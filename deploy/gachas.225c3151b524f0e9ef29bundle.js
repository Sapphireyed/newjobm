(()=>{var e={38432:(e,t,n)=>{"use strict";n(34404);var r=n(93379),i=n.n(r),o=n(15377);i()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var a=n(47413);function c(e){var t={};return e.keys().map((function(n,r){t[n.replace("./","")]=e(n)})),t}c(n(63021));var s=c(n(91184)),l=(c(n(48652)),c(n(58108)),c(n(74913))),u=(c(n(87027)),c(n(45337))),d=(c(n(69229)),c(n(53084))),f=(c(n(68997)),c(n(3748)),c(n(79957)));n(97209),n(49128),n(56245),n(95520),n(60543),n(33066),n(13763),n(4586),n(93644),n(73036),n(93156),n(52635),n(28285),n(52798),n(26535),n(75657),n(74069),n(44500),n(37947),n(89290),n(54028),n(55141),n(67784),n(13496),n(12850),n.g.fetch=n(83300),n(62538),n.g.fetch=n(83300),n(62538);var p=Object.entries(l).filter((function(e){return"Common.png"==e[0]}));p=Object.values(p)[0][1];var g=Object.entries(l).filter((function(e){return"Rare.png"==e[0]}));g=Object.values(g)[0][1];var m=Object.entries(l).filter((function(e){return"Epic.png"==e[0]}));m=Object.values(m)[0][1];var b=Object.entries(l).filter((function(e){return"Legendary.png"==e[0]}));b=Object.values(b)[0][1];var v=Object.entries(s).filter((function(e){return"1.png"==e[0]}));v=Object.values(v)[0][1];var h=Object.entries(s).filter((function(e){return"2.png"==e[0]}));h=Object.values(h)[0][1];var y=Object.entries(s).filter((function(e){return"3.png"==e[0]}));y=Object.values(y)[0][1];var j=Object.entries(s).filter((function(e){return"4.png"==e[0]}));j=Object.values(j)[0][1];var w=Object.entries(s).filter((function(e){return"5.png"==e[0]}));w=Object.values(w)[0][1];var k=Object.entries(u).filter((function(e){return"Curse.jpg"==e[0]}));k=Object.values(k)[0][1];var O=Object.entries(u).filter((function(e){return"Damage.jpg"==e[0]}));O=Object.values(O)[0][1];var x=Object.entries(u).filter((function(e){return"Heal.jpg"==e[0]}));x=Object.values(x)[0][1];var E=Object.entries(u).filter((function(e){return"Debuff.jpg"==e[0]}));E=Object.values(E)[0][1];var T=Object.entries(u).filter((function(e){return"Buff.jpg"==e[0]}));T=Object.values(T)[0][1];var M=Object.entries(u).filter((function(e){return"Nothing.jpg"==e[0]}));M=Object.values(M)[0][1];var I=Object.entries(d).filter((function(e){return"1.png"==e[0]}));I=Object.values(I)[0][1];var P=Object.entries(d).filter((function(e){return"2.png"==e[0]}));P=Object.values(P)[0][1];var C=Object.entries(d).filter((function(e){return"3.png"==e[0]}));C=Object.values(C)[0][1];var $=Object.entries(d).filter((function(e){return"4.png"==e[0]}));$=Object.values($)[0][1];var L=Object.entries(d).filter((function(e){return"5.png"==e[0]}));L=Object.values(L)[0][1];var B=n(57732),N=n(38208),R=n(67067),H=n(78032),S=n(67522),A=n(56668),_=n(87483),z=n(11975),G=n(7112),W=n(3885),Z=n(81567),q=n(99020),D=n(6645),Y=(n(47687),n(8726)),F=n(55691),U=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth,X=[H,N,R,B,S,A];document.body.style.overflow="hidden";var J=document.createElement("div");J.style.width=screen.width+"px",J.style.height=screen.height+"px",J.id="preload";var K=document.createElement("div");K.id="preloaddiv";var Q=document.createElement("img");Q.src=_,Q.id="jimg",Q.maxWidth=J.width,Q.clientWidth,Q.clientHeight;var V=document.createElement("img");V.src=z,V.id="obmania";var ee=document.createElement("img");ee.src=G;var te=document.createElement("h4");te.className="loading",te.innerHTML="Loading...";var ne=document.createElement("a");ne.innerHTML="Skip",ne.className="skip";var re=ne.cloneNode(!0),ie=ne.cloneNode(!0),oe=ne.cloneNode(!0);ne.id="skipTop",re.id="skipBottom",ie.id="skipLeft",oe.id="skipRight";var ae=[{transition:"0.9s",transform:"rotate(1080deg) scale(0)"},{transition:"0.9s",transform:"scale(8)"},{transition:"0.4s",transform:"skew(90deg, 0deg) scaley(1)"}];function ce(){var e=Math.floor(Math.random()*ae.length);console.log(e),console.log(ae[e].transform),J.style.transition=ae[e].transition,J.style.transform=ae[e].transform,J.style.opacity=.5,K.style.animation="none",se.style.animation="none",document.body.style.overflowY="visible",setTimeout((function(){J.style.display="none"}),900)}ne.onclick=ce,re.onclick=ce,ie.onclick=ce,oe.onclick=ce,K.append(Q,V,ee);var se=document.createElement("div");se.id="chardiv";var le,ue=document.createElement("img");switch(Math.floor(Math.random()*X.length),ue.id="hero",se.appendChild(ue),J.append(K,te,ne,re,se),Array.from(document.querySelectorAll("#preload img:not(#hero)")),Math.floor(Math.random()*X.length)){case 0:J.style.backgroundImage="url("+W+")",J.style.backgroundPosition="center center",ue.style.width="200px",ue.src=R,te.style.color="black";break;case 1:J.style.backgroundImage="url("+F+")",J.style.backgroundPosition="center top",Q.style.filter="brightness(0) invert(1)",V.style.filter="brightness(0) invert(1)",ee.style.filter="brightness(0) invert(1)",ue.src=B;break;case 2:J.style.backgroundImage="url("+D+")",J.style.backgroundPosition="center top",Q.style.filter="brightness(0) invert(1)",V.style.filter="brightness(0) invert(1)",ee.style.filter="brightness(0) invert(1)",console.log(D),ue.src=N;break;case 3:J.style.backgroundImage="url("+Z+")",J.style.backgroundPosition="center top",Q.style.filter="brightness(0) invert(1)",V.style.filter="brightness(0) invert(1)",ee.style.filter="brightness(0) invert(1)",ue.src=S;break;case 4:J.style.backgroundImage="url("+Y+")",J.style.backgroundPosition="center center",ue.src=H;break;case 5:J.style.backgroundImage="url("+q+")",J.style.backgroundPosition="center top",J.style.backgroundAttachment="fixed",te.style.color="black",ue.src=A}J.style.backgroundSize="cover",window.onbeforeunload=function(){window.scrollTo(0,0)},setTimeout((function(){Q.style.transform=U<768?"scale(1)":"scale(1.5)",ue.style.transform=U<768?"scale(1.3)":"scale(2)"}),1),setTimeout((function(){V.style.height=.55*Q.height*1.5+"px",V.style.width=.95*Q.width+"px",le=V.height}),1501),setTimeout((function(){ee.style.top=le+"px",ee.style.height=.15*Q.width+"px",ee.style.width=.71*Q.width+"px"}),3010),setTimeout((function(){K.style.animation="pulse 1.5s infinite ease-in-out alternate",se.style.animation="pulse 1.5s infinite ease-in-out alternate"}),4e3),setTimeout((function(){ce(),document.getElementById("preload").style.zIndex=-100,K.style.animation="none",se.style.animation="none",document.body.style.overflowY="visible"}),8e3),setTimeout((function(){J.style.display="none"}),9e3),n(19755);var de=Object.entries(f),fe=document.createElement("section");fe.className="section";var pe=document.createElement("div");pe.id="gachalist";var ge=document.createElement("h1");ge.innerHTML="Gachas";var me=document.createElement("ul");me.classList.add("row"),de.map((function(e){var t=document.createElement("li");t.innerHTML='<img src="'+e[1]+'">',t.classList.add("col-md-6","col-12"),console.log(e.lastModified),"Space Gacha.png"!=e[0]&&"Xmas Gacha.png"!=e[0]&&"Sins Gacha.png"!=e[0]||(t.style.filter="grayscale(95%)"),t.onclick=function(){var t=window.open("gacha.html");setTimeout((function(){t.document.getElementById("header").innerHTML='<img src="'+e[1]+'" id="'+e[0]+'">'}),2500)},me.appendChild(t)})),pe.append(ge,me),fe.append(pe);var be=n(25819),ve=n(99296),he=n(19755);document.body.append((0,a.Z)(),J,fe),(0,be.o)(),he("#jobsmain"),document.getElementById("navMain"),document.body.style.backgroundImage='url("'+ve+'")',document.body.style.backgroundSize="cover",document.body.style.backgroundAttachment="fixed",document.body.style.backgroundPosition="center center";var ye=document.getElementById("navMain");window.onscroll=function(){(0,be.h)(ye)},window.onload=function(){var e=Array.from(document.getElementsByClassName("skip"));e[0].style.animation="skipTop 20s linear infinite alternate",e[1].style.animation="skipBottom 20s linear infinite alternate"};var je,we=document.getElementById("navbtn"),ke=document.getElementById("collapsemenu");je=ke,we.onclick=function(){"none"==je.style.display?je.style.display="block":je.style.display="none"}},15377:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(23645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"h1{background-color:#717171;box-shadow:2px 2px black}#gachalist ul{list-style-type:none}#gachalist li{padding:4px}#gachalist img{width:85%;display:block;margin:auto;z-index:1}#gachalist img:hover{transform:scale(1.1);z-index:10}\n",""]);const o=i},62538:function(e){var t;t=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t,n){return"https://spreadsheets.google.com/feeds/"+n+"/"+e+"/"+t+"/public/values?alt=json"}function i(e,t,n,i){if(0===e.length)return Promise.reject(new Error("empty id"));var o=r(e,t,n);return new Promise((function(e,t){fetch(o).then((function(e){return e.json()})).then((function(t){var n=i(t.feed.entry),r={title:t.feed.title.$t,updated:t.feed.updated.$t,data:n};e(r)})).catch((function(e){t(e)}))}))}function o(e){var t=[];return e.forEach((function(e){var n=parseInt(e.gs$cell.row,10)-1,r=parseInt(e.gs$cell.col,10)-1,i=e.gs$cell.$t;void 0===t[n]&&(t[n]=[]),t[n][r]=i})),t}function a(e){return e.map((function(e){return function(e){var t={};return Object.keys(e).forEach((function(n){if(0===n.indexOf("gsx$")){var r=n.substr(4);t[r]=e[n].$t}})),t}(e)}))}function c(e){var t={};return e.forEach((function(e){t[e.title.$t]=function(e){var t=e.split(", "),n={},r=null;return t.forEach((function(e,t){var i=e.split(": ");2===i.length?(n[i[0]]=i[1],r=i[0]):1===i.length&&r&&(n[r]=n[r]+", "+i[0])})),n}(e.content.$t)})),t}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i(e,t,"cells",o)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i(e,t,"list",a)}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i(e,t,"list",c)}Object.defineProperty(t,"__esModule",{value:!0}),t.buildUrl=r,t.parseRawCells=o,t.parseLabeledCols=a,t.parseLabeledRowsCols=c,t.raw=s,t.labeledCols=l,t.labeledColsRows=u,t.default={raw:s,labeledCols:l,labeledColsRows:u}}]).default},e.exports=t()},83300:(e,t)=>{"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},88426:(e,t,n)=>{"use strict";e.exports=n.p+"15b22ce189d171fababd.png"},67784:(e,t,n)=>{"use strict";e.exports=n.p+"8cec5e853ac4904765e1.png"},40883:(e,t,n)=>{"use strict";e.exports=n.p+"48b1c8c4f21a5af4dc43.png"},61665:(e,t,n)=>{"use strict";e.exports=n.p+"a2fd8adc1a973ef600f0.png"},99296:(e,t,n)=>{"use strict";e.exports=n.p+"928804ce636a85eeecbc.PNG"}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,n.x=e=>{},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={765:0},t=[[38432,665,589,771,82]],r=e=>{},i=(i,o)=>{for(var a,c,[s,l,u,d]=o,f=0,p=[];f<s.length;f++)c=s[f],n.o(e,c)&&e[c]&&p.push(e[c][0]),e[c]=0;for(a in l)n.o(l,a)&&(n.m[a]=l[a]);for(u&&u(n),i&&i(o);p.length;)p.shift()();return d&&t.push.apply(t,d),r()},o=self.webpackChunklrnwebpack=self.webpackChunklrnwebpack||[];function a(){for(var r,i=0;i<t.length;i++){for(var o=t[i],a=!0,c=1;c<o.length;c++){var s=o[c];0!==e[s]&&(a=!1)}a&&(t.splice(i--,1),r=n(n.s=o[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),r}o.forEach(i.bind(null,0)),o.push=i.bind(null,o.push.bind(o));var c=n.x;n.x=()=>(n.x=c||(e=>{}),(r=a)())})(),n.x()})();