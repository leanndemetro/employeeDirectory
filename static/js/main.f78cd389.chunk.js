(this.webpackJsonpemployeeTracker=this.webpackJsonpemployeeTracker||[]).push([[0],{55:function(e,t,r){},56:function(e,t,r){},57:function(e,t,r){},58:function(e,t,r){},59:function(e,t,r){},65:function(e,t,r){},67:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(0),s=r(24),c=r.n(s),l=r(29),i=r(2),o=r(10),u=r(25),h=r(26),j=r(32),m=r(31),d=r(27),b=r.n(d),p=function(){return b.a.get("https://randomuser.me/api/?results=200&nat=us")};var f=function(e){return Object(a.jsx)("div",{className:"container",style:e.style,children:e.children})};r(55);var O=function(e){return Object(a.jsx)("form",{className:"search",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"employee",children:"Search"}),Object(a.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"",list:"results",type:"text",className:"form-control",placeholder:"",id:"results.login.password"})]})})};r(56);var x=function(e){return Object(a.jsx)("ul",{className:"list-group search-results",children:e.results.map((function(e){return Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("img",{alt:"employee",src:e.picture.thumbnail,className:"img-fluid"}),Object(a.jsxs)("p",{className:"li",children:[e.name.first," ",e.name.last]}),Object(a.jsx)("p",{className:"li",children:e.phone}),Object(a.jsx)("p",{className:"li",children:e.email}),Object(a.jsx)("p",{className:"li",children:e.dob.date})]},e.id.value)}))})},v=r(28);var g=function(e){return Object(a.jsx)("div",{role:"alert",className:"alert alert-".concat(e.type," fade in"),style:Object(v.a)({width:"80%",margin:"0 auto",marginTop:18},e.style),children:e.children})},y=function(e){Object(j.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(u.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={search:"",employee:[],results:[],error:""},e.handleInputChange=function(t){var r=t.target.value,a=t.target.name;e.setState(Object(o.a)({},a,r));var n=e.state.results.filter((function(e){return e.name.first.toLowerCase().startsWith(t.target.value)||e.name.last.toLowerCase().startsWith(t.target.value)||e.name.first.startsWith(t.target.value)||e.name.last.startsWith(t.target.value)}));e.setState({results:n}),0===r.length&&p().then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleFormSubmit=function(t){t.preventDefault(),p(e.state.search).then((function(t){if("error"===t.data.status)throw new Error(t.data.message);e.setState({results:t.data.message,error:""})})).catch((function(t){return e.setState({error:t.message})}))},e}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){console.log(t),e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(f,{style:{minHeight:"80%"},children:[Object(a.jsx)("h1",{className:"text-center",children:" "}),Object(a.jsx)(g,{type:"danger",style:{opacity:this.state.error?1:0,marginBottom:10},children:this.state.error}),Object(a.jsx)(O,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(a.jsx)(x,{results:this.state.results})]})})}}]),r}(n.Component);r(57);var N=function(){return Object(a.jsx)("nav",{className:"navbar navbar-custom",children:Object(a.jsx)("h1",{className:"empDirectory",children:"Employee Directory"})})};r(58);var w=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("span",{children:"Employee Directory 2020"})})};r(59);var S=function(e){return Object(a.jsx)("main",{className:"wrapper",children:e.children})};var C=function(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(N,{}),Object(a.jsx)(S,{children:Object(a.jsx)(i.a,{exact:!0,path:"/",component:y})}),Object(a.jsx)(w,{})]})})};r(65),r(66);c.a.render(Object(a.jsx)(C,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.f78cd389.chunk.js.map