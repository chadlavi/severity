(this.webpackJsonpseverity=this.webpackJsonpseverity||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),o=a.n(i),r=a(1),l=(a(9),{cosmetic:"\ud83d\ude43",low:"\ud83e\udd14",medium:"\u2639\ufe0f",high:"\ud83d\ude2b",critical:"\ud83e\udd75"}),u=function(){var e=c.a.useState(),t=Object(r.a)(e,2),a=t[0],n=t[1],i=c.a.useState(),o=Object(r.a)(i,2),u=o[0],s=o[1],m=function(e,t){return e<12.5?"cosmetic":e<25&&t<25?"low":e<90&&t<25||e<75&&t<50||e<50?"medium":e<90&&e>=50&&t>=25&&(e>=75||t>=50)&&!(t>=75&&e>=75)?"high":"critical"}(a||0,u||0),h="".concat(m).concat(!["cosmetic","critical"].includes(m)&&" priority"),p=function(e){return function(t){var a=parseFloat(t.currentTarget.value);(0<=a&&a<=100||!a)&&e(a)}};return c.a.createElement("main",null,c.a.createElement("h1",null,"Bug prioritizer"),c.a.createElement("form",{autoComplete:"false"},c.a.createElement("label",null,c.a.createElement("span",null,"What percentage of users does this impact?"),c.a.createElement("input",{inputMode:"decimal",max:100,min:0,name:"customers",onChange:p(s),type:"number",value:u||""})),c.a.createElement("label",null,c.a.createElement("span",null,"On a scale of 0 to 100, how much does this inhibit an affected user\u2019s ability to use the app?"),c.a.createElement("input",{inputMode:"decimal",max:100,min:0,name:"impact",onChange:p(n),pattern:"[0-9.]*",type:"number",value:a||""}))),u&&a?c.a.createElement("div",{className:"result ".concat(m)},l[m]," Sounds like this is a ",c.a.createElement("u",null,h)," bug"):"")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.5bdbc132.chunk.js.map