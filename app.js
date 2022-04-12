const express=require("express")
const passport=require('passport')
const cookieParser = require('cookie-parser');
const sequelize = require("sequelize");
const User=require('./models/model.js').UserModel
const Room=require('./models/model.js').RoomModel
const EmailCheck = require("./models/model.js").EmailCheckModel
const PORTNUMBER=8080
const session=require('express-session')
const flash = require('express-flash')

//send email and check
const email_check = require('./functions/email_check.js')

//store some temp information for verification
var Signinemail;
var Signinusername;
var Signinpassword;


//create express app
const app=express()

//parse the body of POST request to Javascript object
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//template engine ejs
app.set('views', './views')
app.set('view engine','ejs')

//public file for express apps
app.use(express.static('./public'));

app.use(session({
    secret : "tempsecret",
    resave: true,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

const LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    },
    async function(email,password,done){
    try{
        const userInfo = await User.findOne({
            where:{
                email:email
            }
        })
        if(userInfo == null) {
            console.log("cannot find the user")
            return done(null,false);
        }
        if(userInfo.password!=password) {
            console.log("wrong password")
            return done(null,false);
        }
        return done(null,userInfo)
    }
    catch(e){
        console.log(e)
        return done(e)
    }
}))

passport.serializeUser((userInfo, done) => {
    done(null, userInfo)
})
passport.deserializeUser((userInfo, done) => {
    done(null, userInfo)
})

//try
const testRouter = require("./functions/upload_picture.js")
app.use("/main", testRouter)

//first part
app.get('/', checkNotAuthenticated,async (req,res) => {
    /*for(let i = 0; i < 6; i++){
        let x = "ab"+i
        let y = "ab"+i+"@aaa.bbb"
        let current = await User.findOne({
            where:{
                email:y
            }
        })
        let rrr = await current.getRooms()
        for(let j = 0; j < 3; j++ )
        console.log(rrr[j].id)
    }
    for(let i = 1; i < 18; i++){
        let current = await Room.findOne({
            where:{
                id:i
            }
        })
        console.log((await current.getUser()).username)
    }*/
    //console.log(x[1].dataValues)

    res.redirect('/login')
})

app.get('/login', checkNotAuthenticated,(req,res) => {
    res.sendFile("./client/login.html",{root:__dirname})
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true}),
    (req,res) => {
        console.log("login")
        if(req.session.passport.user.admin == 0){
            res.redirect('/main')
        }
        else if(req.session.passport.user.admin == 1){
            //admin user, go to different place ----------------------------------------------------------
            res.redirect('/main')
        }
    })

app.post('/forget', checkNotAuthenticated, async (req, res) => {
    try{
        let validUser = await User.findOne({
            where:{
                email:req.body.email
            }
        })
        if(validUser == null){
            console.log("The email cannot match any account")
            res.redirect('/login')  // waiting for update
        }else{
            await email_check(req,res)
            console.log("success")
           // do something !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! try to post to /forget/verify
        }
    } catch (e) {
        console.log(e)
        res.redirect('/login') // waiting for update
    }
})
app.post('/forget/verify', checkNotAuthenticated, async (req, res) => {
    try{
        let new_info = await EmailCheck.findOne({
            where:{
                email:Signinemail
            }
        })
        if(new_info == null) {
            console.log("invalid verification code.")
            res.redirect('/login') // waiting for update
            return 0;
        }
        else if(new_info.code!=req.body.verification) {
            console.log("wrong verification code.")
            res.redirect('/login') // waiting for update
            return 0;
        }
        else if(new_info.code == req.body.verification) {
            let change_password = await User.findOne({
                where:{
                    email: req.body.email
                }
            })
            try{
                change_password.password = req.body.password
                await change_password.save()
            } catch (e) {
                console.log(e)
                res.redirect('/login')
            }
            return 0
        }
        return 1
    }
    catch(e){
        console.log(e)
        res.redirect('/login') // waiting for update
    }
})
app.post('/signup', checkNotAuthenticated,async(req,res,next )=>{
    console.log("signup")
    const exist_user_check = await User.findOne({ where: { email: req.body.email } });
    if (exist_user_check === null) {
        await email_check(req,res)
        Signinemail = req.body.email
        Signinusername = req.body.username
        Signinpassword = req.body.password
    } else {
        console.log("email exists");
        res.redirect('/login') // waiting for update
    }
})
app.post('/signup/verify', checkNotAuthenticated, async (req, res) => {
    try{
        const new_info = await EmailCheck.findOne({
            where:{
                email:Signinemail
            }
        })
        console.log(Signinemail)
        console.log(req.body.verification)
        if(new_info == null) {
            console.log("invalid verification code.")
            res.redirect('/login') // waiting for update
            return 0;
        }
        if(new_info.code!=req.body.verification) {
            console.log("wrong verification code.")
            res.redirect('/login') // waiting for update
            return 0;
        }
        if(new_info.code == req.body.verification) {
            const new_user = User.build({
                email: Signinemail,
                password: Signinpassword,
                username: Signinusername
            })
            try{
                await new_user.save()
            } catch (e) {
                console.log(e)
                res.redirect('/login')
            }
            return 0
        }
        return 1
    }
    catch(e){
        console.log(e)
        res.redirect('/login')// waiting for update
    }
})


//////////////////////////////////////////////////////////////////////////////
//second part
//show main page react app


app.get('/main',checkAuthenticated, (req,res)=>{
    console.log("tomain")
    res.sendFile('./client/main.html',{ root: __dirname })
})

app.get('/setting',checkAuthenticated,async (req,res)=>{
    console.log('fetch setting')
    let x = await User.findOne({
        where:{
            id: req.session.passport.user.id
        }
    })
    console.log(x.dataValues)
    res.json(x.dataValues)
})

app.post('/newroom',checkAuthenticated,async (req,res)=>{
    console.log('fetch newroom')
    let x = await User.findOne({
        where:{
            id: req.session.passport.user.id
        }
    })
    let y =  await Room.create({name:"new room", participants: 1})
    await y.setUser(x)
    await x.addRoom(y)
    console.log(y.dataValues)
    res.json(y.dataValues)
})

app.get('/rooms',checkAuthenticated,async (req,res)=>{
    console.log('fetch rooms')
    let x = await Room.findAll({
        where:{
            participants:{
                [sequelize.Op.gt]:0
            }
        }
    })
    let z = []
    for(let i = 0; i < x.length; i++)
        z.push(x[i].dataValues)
    console.log(z)
    res.json(z)
})

app.post('/join',checkAuthenticated,async (req,res)=>{
    console.log('fetch join')
    let x = await Room.findOne({
        where:{
            id: req.body.id
        }
    })
    x.participants++
    await x.save()
    console.log(x.dataValues)
    //do something to join the room
})


app.get('/myrooms',checkAuthenticated,async (req,res)=>{
    console.log("fetch myrooms")
    let x = await User.findOne({
        where:{
            id: req.session.passport.user.id
        }
    })
    let y = await x.getRooms()
    let z = []
    for(let i = 0; i < y.length; i++)
        z.push(y[i].dataValues)
    console.log(z)
    res.json(z)
})

app.post('/deleteRoom',checkAuthenticated,async (req,res)=>{
    console.log("fetch deleteRoom")
    let x = await Room.findOne({
        where:{
            id: req.body.id
        }
    })
    let y = await x.getUser()
    await y.removeRoom(x)
    await x.destroy()
    let z = await y.getRooms()
    console.log(z)
    res.json(z)
})

app.post('/changeName',checkAuthenticated,async (req,res)=>{
    console.log('fetch changeName')
    let x = await User.findOne({
        where:{
            id: req.session.passport.id
        }
    })
    x.username = req.body.name
    await x.save()
    console.log(x.dataValues)
    res.json(x)
})

app.post('/changePassword',checkAuthenticated,async (req,res)=>{
    console.log('fetch changePassword')
    let x = await User.findOne({
        where:{
            id: req.session.passport.user.id
        }
    })
    console.log('password from client: '+ req.body.password)
    x.password = req.body.password
    await x.save()
    console.log(x.dataValues)
    res.json(x)
})
//AJAX request for all rooms
app.get('/rooms',async (req,res)=>{
    //send all rooms in Json
    //use include to join
    const rooms=await Room.findAll({
        where:{
            participants:{
                [sequelize.Op.gt]:0
            }
        }
    })
    res.send(rooms)
})

//AJAX request for my room
app.get('/myrooms',async (req,res)=>{
    const rooms=await Room.findAll({
        where:{
            participants:{
                [sequelize.Op.gt]:0
            }
        }
    })
    res.send(rooms)
})

//create new room
/*
app.get('/newroom',async (req,res)=>{
    let userInfo = req.session.passport.user
    let name=req.body.name
    const result=await Room.create({
        name:name,
        UserId:userInfo.id,
        participants:1
    })
    res.cookie("roomID",roomID)
    console.log(result)
    res.redirect('/canvas')

})
*/

app.post('/canvas',async (req,res)=>{
    let roomID=req.body.roomID
    res.cookie("roomID",roomID)
    const roomData=await Room.findOne({
        where:{id:roomID}
    })
    console.log(roomData.content.toString('utf-8'))
    res.render('canvas',{mapData:roomData.content.toString('utf-8')})
})



app.get('/temp', checkAuthenticated,(req, res) =>{
    var userInfo = req.session.passport.user
    res.render('temp', {userInfo})
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/main')
    }
    next()
}

app.get('/testpage',(req,res)=>{
    const myVar={name:"HI"}
    console.log(JSON.stringify(myVar))
    res.render('test',{data:JSON.stringify(myVar)})
})

app.post('/save',cookieParser(),async (req,res)=>{
    const data=req.body;
    const roomID=req.cookies['roomID']
    console.log(data)
    await Room.update({content:JSON.stringify(data)}, {where:{id:roomID}})
    res.send("Saved!")
})

//start the server and listen on port 8080
const server=app.listen(PORTNUMBER,()=>{
    console.log("Server start on port 8080")
})

//mount socket.io endpoints on http server
const io = require('socket.io')(server)
io.on('connection',(socket)=>{
    console.log("New user connected")
    io.emit('hi','hi')
    socket.on('insert',(parentNodeID,index)=>{
        socket.broadcast.emit('other-insert',parentNodeID,index)
        console.log(parentNodeID)
        console.log(index)
    })
socket.on('delete',(id)=>{
    socket.broadcast.emit('other-delete',id)
    console.log(id)
})

socket.on('edit',(nodeID,topic)=>{
    socket.broadcast.emit('other-edit',nodeID,topic)
    console.log(nodeID)
    console.log(topic)
})
socket.on('save',async (data,roomID)=>{
    try{


        console.log(data)
        console.log(roomID)
    }
    catch{

    }
})
})

