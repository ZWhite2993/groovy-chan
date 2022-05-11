(function(){"use strict";var t={9052:function(t,o,e){e(6992),e(8674),e(9601),e(7727);var r=e(8935),n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],a={name:"App",components:{}},i=a,u=e(1001),l=(0,u.Z)(i,n,s,!1,null,null,null),c=l.exports,p=e(2809),d=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"homePage"}},[t._m(0),e("h2",[t._v("We're Glad you're here!")]),e("h3",[t._v("Groovy Chan is under consruction!")]),e("img",{attrs:{src:"http://www.textfiles.com/underconstruction/Corridor4748construction_spin.gif",alt:"Construction1"}}),e("img",{attrs:{src:"http://www.textfiles.com/underconstruction/MoMotorCity4109construct.gif",alt:"Construction2"}}),e("img",{attrs:{src:"http://www.textfiles.com/underconstruction/TokyoFuji7118constructsonic.gif",alt:"Construction3"}}),e("br"),e("h5",[t._v("Please come back!")]),e("h6",[t._v("Enjoy your time!")]),e("button",[e("router-link",{attrs:{to:"/main"}},[t._v("Enter!")])],1),e("br"),e("img",{attrs:{src:"http://www.textfiles.com/underconstruction/Nebula5275_underconstructionsmall1.gif",alt:"skull-with-shovels"}}),e("br"),e("audio",{attrs:{controls:"",src:"assets/Super.mp3"}})])},h=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("h1",[t._v("Welcome to "),e("span",{staticClass:"colorChangingLogo"},[t._v("Groovy Chan!")])])}],m={data:function(){return{}},methods:{}},v=m,f=(0,u.Z)(v,d,h,!1,null,null,null),_=f.exports,g=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"mainPage"}},[e("h1",[t._v("Welcome to the main page!")]),e("h2",[t._v("We are undergo heavy renovation! Please check soon again!")]),e("h3",[t._v("Updated: May 6th, 2022")]),e("button",[e("router-link",{attrs:{to:"/"}},[t._v("Get Out!")])],1),e("br"),e("button",[e("router-link",{attrs:{to:"/userpage"}},[t._v("Come in...")])],1),e("table",{attrs:{id:"contentBoard"}},[t._m(0),e("tr",[e("td",[e("router-link",{attrs:{to:"/random"}},[t._v("Random!")])],1),e("td",[t._v("A board for anything.")])]),e("tr",[e("td",[e("router-link",{attrs:{to:"/failure"}},[t._v("Special Place")])],1),e("td",[t._v("A special board for special folks...")])])]),e("br"),e("audio",{attrs:{controls:"",src:"assets/Ranch.mp3"}})])},b=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("tr",[e("th",{attrs:{colspan:"2"}},[t._v("Boards!")])])}],y={data:function(){return{}},methods:{}},w=y,P=(0,u.Z)(w,g,b,!1,null,null,null),k=P.exports,O=function(){var t=this,o=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"failurePage"}},[e("h1",[t._v("404... You've done something wrong! :(")])])}],C={data:function(){return{}},methods:{}},S=C,$=(0,u.Z)(S,O,x,!1,null,null,null),E=$.exports,N=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"randomBoard"}},[e("h2",[t._v("Make An Post?")]),e("form",[this.errors.length?e("p",{attrs:{id:"errorMessage"}},[t._v(t._s(this.errors[0]))]):t._e(),e("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],attrs:{id:"postTitle",type:"text",placeholder:"Post Title (Optional)",required:""},domProps:{value:t.post.title},on:{input:function(o){o.target.composing||t.$set(t.post,"title",o.target.value)}}}),e("br"),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.content,expression:"post.content"}],attrs:{id:"postContent",placeholder:"Post Content",required:""},domProps:{value:t.post.content},on:{input:function(o){o.target.composing||t.$set(t.post,"content",o.target.value)}}}),e("br"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.post.author,expression:"post.author"}],attrs:{id:"postAuthor",type:"text",placeholder:"Author (Optional)"},domProps:{value:t.post.author},on:{input:function(o){o.target.composing||t.$set(t.post,"author",o.target.value)}}}),e("br"),e("button",{on:{click:function(o){return o.preventDefault(),t.submitForm.apply(null,arguments)}}},[t._v("POST")])]),e("button",[e("router-link",{attrs:{to:"/main"}},[t._v("RETURN")])],1)])},Z=[],j=(e(8862),{data:function(){return{post:{title:"",content:"",author:"",id:0},posts:[],errors:[]}},methods:{submitForm:function(){if(this.checkForm(),!this.errors.length){for(var t=JSON.parse(localStorage.getItem("posts"))||[],o=0,e=0;e<t.length;e++){var r=t[e].id;r>o&&(o=r)}this.post.id=o+1,this.posts.push(this.post),localStorage.setItem("posts",JSON.stringify(this.posts)),this.$router.push("/randomposts")}},checkForm:function(){this.errors=[],this.post.content||(this.errors.push("Please Submit Post Content."),console.log(this.errors))}},created:function(){var t=JSON.parse(localStorage.getItem("posts"));null!==t&&(this.posts=t)}}),T=j,A=(0,u.Z)(T,N,Z,!1,null,null,null),D=A.exports,F=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"randomPosts"}},[e("div",{attrs:{id:"randomPostsContainer"}},[t.randomPosts.length?t._e():e("h1",[t._v("NO POSTS FOUND")]),e("ul",t._l(t.randomPosts,(function(o){return e("li",{key:o.id,attrs:{id:"postList"}},[e("p",{staticClass:"postData"},[t._v("No. "+t._s(o.id))]),e("p",[e("router-link",{attrs:{id:"postReply",to:"/posts/"+o.id}},[t._v("Reply")])],1),e("hr"),o.title?e("p",{staticClass:"postData"},[e("strong",[t._v("Subject: ")]),t._v(t._s(o.title))]):t._e(),e("p",{staticClass:"postData",attrs:{id:"postContent"}},[t._v(t._s(o.content))]),o.author?e("p",{staticClass:"postData",attrs:{id:"postAuthor"}},[e("strong",[t._v("Author: ")]),t._v(t._s(o.author))]):t._e()])})),0)]),e("button",[e("router-link",{attrs:{to:"/random"}},[t._v("Return to Post Page")])],1)])},I=[],R={data:function(){return{randomPosts:[]}},methods:{},created:function(){this.randomPosts=JSON.parse(localStorage.getItem("posts"))||[],console.log(localStorage.getItem("posts"))}},M=R,J=(0,u.Z)(M,F,I,!1,null,null,null),W=J.exports,G=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"UserPage"}},[e("h1",{attrs:{id:"profileNameDisplay"}}),e("h2",[t._v("You've found your secret place...")]),e("h3",[t._v("Soon you can make it your own!")]),e("h5",[t._v("Please come back again soon. Won't you?")]),e("img",{attrs:{src:"https://web.archive.org/web/20090821073605/http://geocities.com/sacredwisdom2003/globe.gif",alt:"globe"}}),e("br"),e("br"),e("br"),e("button",[e("router-link",{attrs:{to:"/main"}},[t._v("I want to get out...")])],1),e("br"),e("audio",{attrs:{controls:"",src:"assets/Depr.mp3"}})])},U=[],B={data:function(){return{}},methods:{}},L=B,q=(0,u.Z)(L,G,U,!1,null,null,null),Y=q.exports,z=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"replyThread"}},[e("ul",t._l(t.filteredPosts,(function(o){return e("li",{key:o.content,attrs:{id:"replyList"}},[o.title?e("p",[e("strong",[t._v("Subject: ")]),t._v(t._s(o.title))]):t._e(),e("p",[t._v(t._s(o.content))]),o.author?e("p",[e("strong",[t._v("Author: ")]),t._v(t._s(o.author))]):t._e()])})),0)])},H=[],K=(e(7327),e(1539),{data:function(){return{id:this.$route.params.id,randomPosts:[]}},methods:{},computed:{filteredPosts:function(){var t=this;return this.randomPosts.filter((function(o){return o.id==t.id}))}},created:function(){this.randomPosts=JSON.parse(localStorage.getItem("posts"))||[]}}),Q=K,V=(0,u.Z)(Q,z,H,!1,null,null,null),X=V.exports,tt=[{path:"/",component:_},{path:"/main",component:k},{path:"/main",component:k},{path:"/failure",component:E},{path:"/random",component:D},{path:"/userpage",component:Y},{path:"/randomposts",component:W},{path:"/posts/:id",component:X}];r.Z.use(p.Z);var ot=new p.Z({routes:tt,mode:"history"});r.Z.config.productionTip=!1,new r.Z({render:function(t){return t(c)},router:ot}).$mount("#app")}},o={};function e(r){var n=o[r];if(void 0!==n)return n.exports;var s=o[r]={exports:{}};return t[r](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(o,r,n,s){if(!r){var a=1/0;for(c=0;c<t.length;c++){r=t[c][0],n=t[c][1],s=t[c][2];for(var i=!0,u=0;u<r.length;u++)(!1&s||a>=s)&&Object.keys(e.O).every((function(t){return e.O[t](r[u])}))?r.splice(u--,1):(i=!1,s<a&&(a=s));if(i){t.splice(c--,1);var l=n();void 0!==l&&(o=l)}}return o}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[r,n,s]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,r){var n,s,a=r[0],i=r[1],u=r[2],l=0;if(a.some((function(o){return 0!==t[o]}))){for(n in i)e.o(i,n)&&(e.m[n]=i[n]);if(u)var c=u(e)}for(o&&o(r);l<a.length;l++)s=a[l],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(c)},r=self["webpackChunkgroovy_chan"]=self["webpackChunkgroovy_chan"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(9052)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.11dce35d.js.map