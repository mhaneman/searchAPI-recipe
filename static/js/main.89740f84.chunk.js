(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),i=(a(11),a(2)),s=a.n(i),l=a(5),u=a(1),m=function(e){var t=e.title,a=e.image,n=e.calories;return c.a.createElement("div",null,c.a.createElement("h1",null,t),c.a.createElement("p",null,n),c.a.createElement("img",{src:a,alt:""}))},p=(a(13),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(u.a)(o,2),p=i[0],f=i[1],h=Object(n.useState)("chicken"),b=Object(u.a)(h,2),v=b[0],d=b[1];Object(n.useEffect)((function(){E()}),[v]);var E=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(v,"&app_id=").concat("3e7a8591","&app_key=").concat("d05b68b1281e6a5af054a339293db298"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d(p),f("")},className:"search-form"},c.a.createElement("input",{className:"search-form",type:"text",value:p,onChange:function(e){f(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Submit")),a.map((function(e){return c.a.createElement(m,{key:e.recipe.label,title:e.recipe.label,image:e.recipe.image,calories:e.recipe.calories})})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.89740f84.chunk.js.map