(function(e){function t(t){for(var r,c,u=t[0],i=t[1],s=t[2],l=0,b=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2ca95ec1"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/probieren/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0092":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}#nav{padding:30px}#nav a{font-weight:700;color:#2c3e50}#nav a.router-link-exact-active{color:#42b983}.print-only{display:none}@media print{.no-print{display:none}.print-only{display:block}}",""]),e.exports=t},"0d03":function(e,t,n){"use strict";n("336d")},"149d":function(e,t,n){var r=n("0092");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("248a023f",r,!0,{sourceMap:!1,shadowMode:!1})},1931:function(e,t,n){var r=n("8bfd");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("15a1d70c",r,!0,{sourceMap:!1,shadowMode:!1})},"24bd":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return f})),n.d(t,"f",(function(){return O})),n.d(t,"a",(function(){return v})),n.d(t,"d",(function(){return g}));var r=n("5530"),o=n("1da1"),a=(n("d3b7"),n("159b"),n("d81d"),n("96cf"),n("e71f"));function c(e,t){return u.apply(this,arguments)}function u(){return u=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(a["b"])(Object(a["e"])(),t),n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function i(e){return s.apply(this,arguments)}function s(){return s=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.next=3,Object(a["d"])(Object(a["b"])(Object(a["e"])(),t));case 3:return o=e.sent,o.forEach((function(e){n.push(e)})),e.abrupt("return",n.map((function(e){return Object(r["a"])(Object(r["a"])({},e.data()),{},{id:e.id})})));case 6:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return d=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c("SchoolReports",t);case 2:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function b(){return p.apply(this,arguments)}function p(){return p=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",i("SchoolReports"));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return h=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c("WorkReports",t);case 2:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function O(){return j.apply(this,arguments)}function j(){return j=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",i("WorkReports"));case 1:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return m=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c("Option",t);case 2:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function g(){return y.apply(this,arguments)}function y(){return y=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",i("Option"));case 1:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}},"336d":function(e,t,n){var r=n("48c2");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("66c55f89",r,!0,{sourceMap:!1,shadowMode:!1})},"48c2":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"h3[data-v-54f8829a]{margin:40px 0 0}ul[data-v-54f8829a]{list-style-type:none;padding:0}li[data-v-54f8829a]{display:inline-block;margin:0 10px}a[data-v-54f8829a]{color:#42b983}",""]),e.exports=t},"8bfd":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"table[data-v-10bdd322],td[data-v-10bdd322],tr[data-v-10bdd322]{border:1px solid #000}@media print{.report[data-v-10bdd322]{page-break-after:always}}.print-only[data-v-10bdd322]{display:none}@media print{.no-print[data-v-10bdd322]{display:none}.print-only[data-v-10bdd322]{display:block}}",""]),e.exports=t},a9bb:function(e,t,n){"use strict";n("149d")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav",class:"no-print"},a=Object(r["h"])("Home"),c=Object(r["h"])(" | "),u=Object(r["h"])("Settings"),i=Object(r["h"])(" | "),s=Object(r["h"])("Report");function l(e,t){var n=Object(r["z"])("router-link"),l=Object(r["z"])("router-view");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",o,[Object(r["i"])(n,{to:"/"},{default:Object(r["H"])((function(){return[a]})),_:1}),c,Object(r["i"])(n,{to:"/about"},{default:Object(r["H"])((function(){return[u]})),_:1}),i,Object(r["i"])(n,{to:"/report"},{default:Object(r["H"])((function(){return[s]})),_:1})]),Object(r["i"])(l)],64)}n("a9bb");var d=n("6b0d"),b=n.n(d);const p={},f=b()(p,[["render",l]]);var h=f,O=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),j={class:"home"};function v(e,t,n,o,a,c){var u=Object(r["z"])("hello-world");return Object(r["r"])(),Object(r["e"])("div",j,[Object(r["i"])(u)])}var m=n("bee2"),g=n("d4ec"),y=n("262e"),w=n("2caf"),k=n("9ab4"),x=n("ce1f"),R=function(e){return Object(r["v"])("data-v-54f8829a"),e=e(),Object(r["s"])(),e},A={class:"generator"},M=R((function(){return Object(r["f"])("div",{class:"settings"},null,-1)})),S=[M];function _(e,t,n,o,a,c){return Object(r["r"])(),Object(r["e"])("div",A,S)}var B=function(e){Object(y["a"])(n,e);var t=Object(w["a"])(n);function n(){return Object(g["a"])(this,n),t.apply(this,arguments)}return Object(m["a"])(n)}(x["b"]);B=Object(k["a"])([Object(x["a"])({props:{msg:String}})],B);var N=B;n("0d03");const z=b()(N,[["render",_],["__scopeId","data-v-54f8829a"]]);var I=z,P=function(e){Object(y["a"])(n,e);var t=Object(w["a"])(n);function n(){return Object(g["a"])(this,n),t.apply(this,arguments)}return Object(m["a"])(n)}(x["b"]);P=Object(k["a"])([Object(x["a"])({components:{HelloWorld:I}})],P);var T=P;const D=b()(T,[["render",v]]);var F=D,H=function(e){return Object(r["v"])("data-v-10bdd322"),e=e(),Object(r["s"])(),e},U={class:"no-print"},E=H((function(){return Object(r["f"])("div",null,"DailyReport",-1)})),W={class:"selection d-flex justify-content-center"},q=H((function(){return Object(r["f"])("option",{selected:"",disabled:""},"Einstellung auswählen:",-1)})),C=["value"],J={class:"m-2"},L=H((function(){return Object(r["f"])("label",{for:"counter",class:"m-3"},"Wie viele Berichte",-1)})),V={class:"buttonGroup"},G={class:"reportHeader",style:{margin:"2rem",width:"100%"}},Y=H((function(){return Object(r["f"])("span",null,[Object(r["f"])("b",null,"Ausbildungsnachweis (täglich)")],-1)})),K={class:"d-flex justify-content-around"},Q=H((function(){return Object(r["f"])("th",{scope:"row"},"Name des/der Auszubildenden:",-1)})),X={colspan:"3"},Z=H((function(){return Object(r["f"])("th",{scope:"row"},"Ausbildungjahr:",-1)})),$={colspan:"3"},ee=H((function(){return Object(r["f"])("th",{scope:"row"},"Ggf. ausbildende Abteilung",-1)})),te={colspan:"3"},ne=H((function(){return Object(r["f"])("th",{scope:"row"},"Ausbildungswoche von:",-1)})),re=H((function(){return Object(r["f"])("td",null,[Object(r["f"])("b",null,"bis:")],-1)})),oe={class:"reportBody d-flex justify-content-around",style:{margin:"2rem"}},ae=H((function(){return Object(r["f"])("tr",null,[Object(r["f"])("th",{scope:"col"},"Tag"),Object(r["f"])("td",{scope:"col"},[Object(r["f"])("b",null," Betriebliche Tätigkeiten, Unterweisungen bzw. überbetriebliche Unterweisungen (z.B. im Handwerk), betrieblicher Unterricht, sonstige Schulungen, Themen des Berufsschulunterrichts ")]),Object(r["f"])("td",{scope:"col"},[Object(r["f"])("b",null,"Stunden")])],-1)})),ce={scoped:"col"},ue={scoped:"col"},ie={key:0},se={key:1},le={key:2},de={scoped:"col"},be=Object(r["g"])('<div class="reportFooter" data-v-10bdd322><div style="margin-top:1rem;" data-v-10bdd322><span data-v-10bdd322> Durch die nachfolgende Unterschrift wird die Richtigkeit und Vollständigkeit der obigen Angaben bestätigt. </span></div><div class="row d-flex justify-content-around" style="margin-top:5rem;" data-v-10bdd322><span class="col-4" style="border-top:1px solid black;" data-v-10bdd322> Datum, Unterschrift Auszubildende/r </span><span class="col-4" style="border-top:1px solid black;" data-v-10bdd322> Datum, Unteschrift Ausbildende/r oder Ausbilder/in </span></div></div>',1);function pe(e,t,n,o,a,c){return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",U,[E,Object(r["f"])("div",W,[Object(r["I"])(Object(r["f"])("select",{class:"form-select","aria-label":"Default select example",style:{width:"25%"},"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.selected=t})},[q,(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(e.options,(function(e){return Object(r["r"])(),Object(r["e"])("option",{key:e.optionName,value:e},Object(r["B"])(e.optionName),9,C)})),128))],512),[[r["E"],e.selected]])]),Object(r["f"])("div",J,[L,Object(r["I"])(Object(r["f"])("input",{id:"counter",type:"number",style:{width:"80px"},placeholder:"z.B. 10","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.counter2=t})},null,512),[[r["F"],e.counter2]])]),Object(r["f"])("div",V,[Object(r["f"])("button",{class:"btn btn-success",style:{margin:"1rem"},onClick:t[2]||(t[2]=function(t){return e.getOption()})}," generieren "),Object(r["f"])("button",{class:"btn btn-danger",style:{margin:"1rem"},onClick:t[3]||(t[3]=function(t){return e.resetOption()})}," zurücksetzen ")])]),(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(e.counter,(function(t){return Object(r["r"])(),Object(r["e"])("div",{class:"report",key:t},[Object(r["f"])("div",G,[Y,Object(r["f"])("div",K,[Object(r["f"])("table",null,[Object(r["f"])("tbody",null,[Object(r["f"])("tr",null,[Q,Object(r["f"])("td",X,Object(r["B"])(e.values.azubiName),1)]),Object(r["f"])("tr",null,[Z,Object(r["f"])("td",$,Object(r["B"])(e.values.azubiYear),1)]),Object(r["f"])("tr",null,[ee,Object(r["f"])("td",te,Object(r["B"])(e.values.department),1)]),Object(r["f"])("tr",null,[ne,Object(r["f"])("td",null,Object(r["B"])(e.values.weekFrom),1),re,Object(r["f"])("td",null,Object(r["B"])(e.values.weekTo),1)])])])])]),Object(r["f"])("div",oe,[Object(r["f"])("table",null,[Object(r["f"])("thead",null,[ae,(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(e.values.week,(function(t){return Object(r["r"])(),Object(r["e"])("tr",{key:t.dayName},[Object(r["f"])("td",ce,Object(r["B"])(t.dayName),1),Object(r["f"])("td",ue,["work"===t.value?(Object(r["r"])(),Object(r["e"])("span",ie,Object(r["B"])(e.workReports[Math.floor(Math.random()*e.workReports.length)].value),1)):"school"===t.value?(Object(r["r"])(),Object(r["e"])("span",se,Object(r["B"])(e.schoolReports[Math.floor(Math.random()*e.schoolReports.length)].value),1)):"free"===t.value?(Object(r["r"])(),Object(r["e"])("span",le," Frei ")):Object(r["d"])("",!0)]),Object(r["f"])("td",de,Object(r["B"])(t.hours),1)])})),128))])])]),be])})),128))],64)}var fe=n("5530"),he=n("1da1"),Oe=(n("96cf"),n("24bd")),je={optionName:"",azubiName:"",azubiYear:"",department:"",weekFrom:"",weekTo:"",week:[{dayName:"Montag",value:"",hours:""},{dayName:"Dienstag",value:"",hours:""},{dayName:"Mittwoch",value:"",hours:""},{dayName:"Donnerstag",value:"",hours:""},{dayName:"Freitag",value:"",hours:""},{dayName:"Samstag",value:"",hours:""},{dayName:"Sonntag",value:"",hours:""}]},ve=Object(r["j"])({methods:{getOptions:function(){var e=this;return Object(he["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Oe["d"]();case 3:e.options=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error(t.t0,"API.getOption()");case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getSchoolReports:function(){var e=this;return Object(he["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Oe["e"]();case 3:e.schoolReports=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error(t.t0,"API.getSchoolReport()");case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getWorkReports:function(){var e=this;return Object(he["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Oe["f"]();case 3:e.workReports=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error(t.t0,"API.getWorkReport()");case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getOption:function(){this.values=this.selected,this.counter=this.counter2},resetOption:function(){this.values=Object(fe["a"])({},je)}},mounted:function(){this.getOptions(),this.getSchoolReports(),this.getWorkReports()},data:function(){return{counter:0,counter2:0,options:[],selected:{},values:Object(fe["a"])({},je),schoolReports:[],workReports:[]}},setup:function(){}});n("eabc");const me=b()(ve,[["render",pe],["__scopeId","data-v-10bdd322"]]);var ge=me,ye=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/report",name:"Report",component:ge}],we=Object(O["a"])({history:Object(O["b"])(),routes:ye}),ke=we,xe=(n("ab8b"),n("7b17"),n("d81d"),n("9483"));Object(xe["a"])("".concat("/probieren/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Re="v2";self.addEventListener("activate",(function(e){e.waitUntil(Object(he["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,caches.keys();case 2:return t=e.sent,e.abrupt("return",t.map(function(){var e=Object(he["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t===Re){e.next=5;break}return console.log("Service Worker: Removing old cache: "+t),e.next=4,caches.delete(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:case"end":return e.stop()}}),e)})))())}));var Ae=n("260b"),Me={apiKey:"AIzaSyC9KaqvdcVDYd-zkIqRumFJLJq03TtqAGM",authDomain:"test-599b6.firebaseapp.com",projectId:"test-599b6",storageBucket:"test-599b6.appspot.com",messagingSenderId:"798639786545",appId:"1:798639786545:web:f4a42108372e9674b26310"};Object(Ae["a"])(Me);Object(r["c"])(h).use(ke).mount("#app")},eabc:function(e,t,n){"use strict";n("1931")}});
//# sourceMappingURL=app.4f29e466.js.map