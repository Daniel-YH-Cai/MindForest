(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/1.450a123f.jpeg"},20:function(e,a,t){},217:function(e,a,t){},219:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),s=t(14),r=t.n(s),o=t(2),c=t(3),i=t(5),m=t(4),u=t(6),d=t(16),p=t(0),f=t(12),b=t(9),v=t.n(b),h=(t(20),t(13)),E=t.n(h),g=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).onSubmit=function(a){a.preventDefault(),console.log(e.state),e.setState({errors:e.state}),fetch("http://localhost:8080/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,username:e.state.username,password:e.state.password})}).then(function(e){console.log("\u670d\u52a1\u5668",e),200===e.status||console.log("signup failed!")}).catch(function(e){console.log(e)});var t=/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;try{e.state.data;!0===t.test(e.state.email)&&(window.location="/#/signup/verify"),!1===t.test(e.state.email)&&(alert("Invalid email address!"),window.location="/#/signup")}catch(a){e.state.data;!1===t.test(e.state.email)&&(window.location="/#/")}},e.changeHandle=function(a){e.setState(Object(f.a)({},a.target.name,a.target.value))},e.state={username:"",email:"",password:"",errors:{}},e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.username,t=e.email,n=e.password,s=e.errors;return l.a.createElement("div",{className:"form-horizontal"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:E.a,className:"logo",alt:"\u80cc\u666f\u56fe"}),l.a.createElement("span",{className:"title"},"Sign Up")),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-person-circle"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===s.username}),type:"text",name:"username",value:a,onChange:this.changeHandle,placeholder:"username"}),""===s.username?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Email address is invalid."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-envelope-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===s.email}),type:"text",name:"email",value:t,onChange:this.changeHandle,placeholder:"email address"}),""===s.email?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Email address is invalid."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-key-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===s.password}),type:"password",name:"password",value:n,onChange:this.changeHandle,placeholder:"password"}),""===s.password?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Password should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{class:"btn btn-primary",type:"submit",className:"submitbutton"},"Sign up"))))}}]),a}(n.Component),N=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 "}),l.a.createElement("div",{className:"col-md-6 "},l.a.createElement(g,null)),l.a.createElement("div",{className:"col-md-3 "}))}}]),a}(n.Component),y=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{class:"container"})}}]),a}(n.Component),j=(t(42),function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-faded"},l.a.createElement("div",{className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/"},"Mind Forest")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/signup"},"Sign up")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/login"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/forget"},"Forget password")))))}}]),a}(n.Component)),O=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).onSubmit=function(e){console.log(t.state),t.setState({errors:t.state}),fetch("http://localhost:8080/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.state.email,password:t.state.password})}).then(function(e){console.log("\u670d\u52a1\u5668",e),200===e.status?window.location="/#/main":console.log("login failed!")}).catch(function(e){console.log(e)});var a=/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;try{t.state.data;!1===a.test(t.state.email)&&(alert("Invalid email address!"),window.location="/#/login")}catch(e){t.state.data;!1===a.test(t.state.email)&&(window.location="/#/")}},t.changeHandle=function(e){t.setState(Object(f.a)({},e.target.name,e.target.value))},t.state={email:"",password:"",errors:{}},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password,n=e.errors;return l.a.createElement("div",{className:"form-horizontal"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:E.a,className:"logo",alt:"\u80cc\u666f\u56fe"}),l.a.createElement("span",{className:"title"},"Login")),l.a.createElement("div",{className:"clearfix"},l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-envelope-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===n.email}),type:"text",name:"email",value:a,onChange:this.changeHandle,placeholder:"email address"}),""===n.email?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Email address is invalid."):"")),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-key-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===n.password}),type:"password",name:"password",value:t,onChange:this.changeHandle,placeholder:"password"}),""===n.password?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Password should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{class:"btn btn-primary",type:"submit",className:"submitbutton"},"Login"))))}}]),a}(n.Component),w=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(O,null)),l.a.createElement("div",{className:"col-md-3"}))}}]),a}(n.Component),S=(t(44),function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).onSubmit=function(a){a.preventDefault(),console.log(e.state),e.setState({errors:e.state}),fetch("http://localhost:8080/forget",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email})}).then(function(e){console.log("\u670d\u52a1\u5668",e),200===e.status||console.log("signup failed!")}).catch(function(e){console.log(e)});var t=/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;try{e.state.data;!0===t.test(e.state.email)&&(window.location="/#/forget/verify"),!1===t.test(e.state.email)&&(alert("Invalid email address!"),window.location="/#/forget")}catch(a){!1===t.test(e.state.email)&&(window.location="/#/")}},e.changeHandle=function(a){e.setState(Object(f.a)({},a.target.name,a.target.value))},e.state={email:"",errors:{}},e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.errors;return l.a.createElement("div",{className:"form-horizontal"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:E.a,className:"logo",alt:"\u80cc\u666f\u56fe"}),l.a.createElement("span",{className:"title"},"Forget Password")),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-envelope-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===t.email}),type:"text",name:"email",value:a,onChange:this.changeHandle,placeholder:"email"}),""===t.email?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Email address is invalid."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{class:"btn btn-primary",type:"submit",className:"submitbutton"},"Forget password"))))}}]),a}(n.Component)),C=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(S,null)),l.a.createElement("div",{className:"col-md-3"}))}}]),a}(n.Component),x=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).onSubmit=function(a){console.log(e.state),e.setState({errors:e.state}),fetch("http://localhost:8080/signup/verify",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({verification:e.state.verification})}).then(function(e){200===e.status?(alert("Sign-up process is completed."),window.location="/#/login"):console.log("signup verification failed!")}).catch(function(e){console.log(e)})},e.changeHandle=function(a){e.setState(Object(f.a)({},a.target.name,a.target.value))},e.state={verification:"",errors:{}},e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.verification,t=e.errors;return l.a.createElement("div",{className:"form-horizontal"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:E.a,className:"logo",alt:"\u80cc\u666f\u56fe"}),l.a.createElement("span",{className:"title"},"Verify")),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-envelope-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===t.email}),type:"text",name:"verification",value:a,onChange:this.changeHandle,placeholder:"verification"}),""===t.email?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"verification should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{class:"btn btn-primary",type:"submit",className:"submitbutton"},"Verify"))))}}]),a}(n.Component),z=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(x,null)),l.a.createElement("div",{className:"col-md-3"}))}}]),a}(n.Component),k=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).onSubmit=function(a){a.preventDefault(),console.log(e.state),e.setState({errors:e.state}),fetch("http://localhost:8080/forget/verify",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({verification:e.state.verification,password:e.state.password})}).then(function(e){console.log("\u670d\u52a1\u5668",e),200===e.status?(alert("Verification process is completed."),window.location="/#/login"):console.log("verification wrong!")}).catch(function(e){console.log(e)})},e.changeHandle=function(a){e.setState(Object(f.a)({},a.target.name,a.target.value))},e.state={verification:"",password:"",errors:{}},e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.verification,t=e.password,n=e.errors;return l.a.createElement("div",{className:"form-horizontal"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:E.a,className:"logo",alt:"\u80cc\u666f\u56fe"}),l.a.createElement("span",{className:"title"},"Verify")),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-envelope-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===n.verification}),type:"text",name:"verification",value:a,onChange:this.changeHandle,placeholder:"verification"}),""===n.verification?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"verification should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-key-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===n.password}),type:"password",name:"password",value:t,onChange:this.changeHandle,placeholder:"new password"}),""===n.password?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"New password should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{class:"btn btn-primary",type:"submit",className:"submitbutton"},"Verify"))))}}]),a}(n.Component),H=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(k,null)),l.a.createElement("div",{className:"col-md-3"}))}}]),a}(n.Component),A=(t(217),function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"bg"},l.a.createElement(d.a,null,l.a.createElement(j,null),l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/signup",element:l.a.createElement(N,null)}),l.a.createElement(p.a,{exact:!0,path:"/login",element:l.a.createElement(w,null)}),l.a.createElement(p.a,{exact:!0,path:"/forget",element:l.a.createElement(C,null)}),l.a.createElement(p.a,{exact:!0,path:"/signup/verify",element:l.a.createElement(z,null)}),l.a.createElement(p.a,{exact:!0,path:"/forget/verify",element:l.a.createElement(H,null)}),l.a.createElement(p.a,{exact:!0,path:"/",element:l.a.createElement(y,null)}))))}}]),a}(n.Component));r.a.render(l.a.createElement(A,null),document.getElementById("root"))},34:function(e,a,t){e.exports=t(219)},42:function(e,a,t){}},[[34,2,1]]]);
//# sourceMappingURL=main.3f8885fe.chunk.js.map