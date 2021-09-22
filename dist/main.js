(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,".fullTask{\n    display: flex;\n    flex-direction: row;\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=o[u]||0,d="".concat(u," ").concat(l);o[u]=l+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=a(f,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),u=0;u<o.length;u++){var l=n(o[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function e(e,t){this.title=e,this.duedate=t}let t=[];const r=document.getElementById("addTaskBtn"),a=document.getElementById("taskFormOrList");var o=n(379),i=n.n(o),s=n(795),c=n.n(s),u=n(569),l=n.n(u),d=n(565),p=n.n(d),f=n(216),m=n.n(f),v=n(589),h=n.n(v),y=n(426),b={};b.styleTagTransform=h(),b.setAttributes=p(),b.insert=l().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=m(),i()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals,document.getElementById("addTaskBtn").addEventListener("click",(()=>{!function(){r.style.display="none";let n=document.createElement("form");n.setAttribute("id","taskForm");let o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("id","taskName"),o.required=!0;let i=document.createElement("input");i.setAttribute("type","date"),i.setAttribute("id","dueDate");let s=document.createElement("input");s.setAttribute("type","button"),s.setAttribute("value","Add"),s.classList.add("taskButton"),s.setAttribute("id","submitTask");let c=document.createElement("input");c.setAttribute("type","button"),c.setAttribute("value","Cancel"),c.classList.add("taskButton"),c.setAttribute("id","cancelTask"),n.appendChild(o),n.appendChild(i),n.appendChild(s),n.appendChild(c),a.appendChild(n),document.querySelectorAll(".taskButton").forEach((n=>{n.addEventListener("click",(n=>{if(console.log(n.target.id),"submitTask"==n.target.id){let n=document.getElementById("taskName").value,r=document.getElementById("dueDate").value;t.push(new e(n,r))}!function(e){for(console.log(e);a.firstChild;)a.removeChild(a.lastChild);for(let t=0;t<e.length;t++){let n=document.createElement("div");n.setAttribute("class","fullTask");let r=document.createElement("input");r.setAttribute("type","checkbox"),r.setAttribute("class","checkTask");let o=document.createElement("p");o.setAttribute("class","taskName"),o.innerHTML=e[t].title;let i=document.createElement("p");i.setAttribute("class","dueDate"),i.innerHTML=e[t].duedate;let s=document.createElement("input");s.setAttribute("type","button"),s.setAttribute("value","Delete"),s.setAttribute("class","deleteTask"),n.appendChild(r),n.appendChild(o),n.appendChild(i),n.appendChild(s),a.appendChild(n)}r.style.display=""}(t)}))}))}()}))})()})();