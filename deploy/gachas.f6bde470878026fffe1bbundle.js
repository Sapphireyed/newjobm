(()=>{var e={36754:(e,t,n)=>{"use strict";n(77115),n(97209),n(49128),n(56245),n(95520),n(60543),n(33066),n(13763),n(4586),n(93644),n(73036),n(93156),n(52635),n(28285),n(52798),n(26535),n(75657),n(74069),n(44500),n(37947),n(89290),n(54028),n(55141),n(67784),n(13496),n(12850),n.g.fetch=n(83300),n(62538)},79453:(e,t,n)=>{"use strict";n(34404);var r=n(93379),o=n.n(r),a=n(15377);o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var i=n(47413),l=(n(36754),n(60380),n(77115)),s=n(57732),c=n(38208),u=n(67067),d=n(78032),m=n(67522),f=n(56668),g=n(87483),p=n(11975),h=n(7112),y=n(3885),b=n(81567),v=n(99020),w=n(6645),k=(n(47687),n(8726)),x=n(55691),E=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth,T=[d,c,u,s,m,f];document.body.style.overflow="hidden";var I=document.createElement("div");I.style.width=screen.width+"px",I.style.height=screen.height+"px",I.id="preload";var M=document.createElement("div");M.id="preloaddiv";var B=document.createElement("img");B.src=g,B.id="jimg",B.maxWidth=I.width,B.clientWidth,B.clientHeight;var j=document.createElement("img");j.src=p,j.id="obmania";var S=document.createElement("img");S.src=h;var C=document.createElement("h4");C.className="loading",C.innerHTML="Loading...";var P=document.createElement("a");P.innerHTML="Skip",P.className="skip";var L=P.cloneNode(!0),N=P.cloneNode(!0),$=P.cloneNode(!0);P.id="skipTop",L.id="skipBottom",N.id="skipLeft",$.id="skipRight";var R=[{transition:"0.9s",transform:"rotate(1080deg) scale(0)"},{transition:"0.9s",transform:"scale(8)"},{transition:"0.4s",transform:"skew(90deg, 0deg) scaley(1)"}];function O(){var e=Math.floor(Math.random()*R.length);console.log(e),console.log(R[e].transform),I.style.transition=R[e].transition,I.style.transform=R[e].transform,I.style.opacity=.5,M.style.animation="none",A.style.animation="none",document.body.style.overflowY="visible",setTimeout((function(){I.style.display="none"}),900)}P.onclick=O,L.onclick=O,N.onclick=O,$.onclick=O,M.append(B,j,S);var A=document.createElement("div");A.id="chardiv";var H,Z=document.createElement("img");switch(Math.floor(Math.random()*T.length),Z.id="hero",A.appendChild(Z),I.append(M,C,P,L,A),Array.from(document.querySelectorAll("#preload img:not(#hero)")),Math.floor(Math.random()*T.length)){case 0:I.style.backgroundImage="url("+y+")",I.style.backgroundPosition="center center",Z.style.width="200px",Z.src=u,C.style.color="black";break;case 1:I.style.backgroundImage="url("+x+")",I.style.backgroundPosition="center top",B.style.filter="brightness(0) invert(1)",j.style.filter="brightness(0) invert(1)",S.style.filter="brightness(0) invert(1)",Z.src=s;break;case 2:I.style.backgroundImage="url("+w+")",I.style.backgroundPosition="center top",B.style.filter="brightness(0) invert(1)",j.style.filter="brightness(0) invert(1)",S.style.filter="brightness(0) invert(1)",console.log(w),Z.src=c;break;case 3:I.style.backgroundImage="url("+b+")",I.style.backgroundPosition="center top",B.style.filter="brightness(0) invert(1)",j.style.filter="brightness(0) invert(1)",S.style.filter="brightness(0) invert(1)",Z.src=m;break;case 4:I.style.backgroundImage="url("+k+")",I.style.backgroundPosition="center center",Z.src=d;break;case 5:I.style.backgroundImage="url("+v+")",I.style.backgroundPosition="center top",I.style.backgroundAttachment="fixed",C.style.color="black",Z.src=f}I.style.backgroundSize="cover",window.onbeforeunload=function(){window.scrollTo(0,0)},setTimeout((function(){B.style.transform=E<768?"scale(1)":"scale(1.5)",Z.style.transform=E<768?"scale(1.3)":"scale(2)"}),1),setTimeout((function(){j.style.height=.55*B.height*1.5+"px",j.style.width=.95*B.width+"px",H=j.height}),1501),setTimeout((function(){S.style.top=H+"px",S.style.height=.15*B.width+"px",S.style.width=.71*B.width+"px"}),3010),setTimeout((function(){M.style.animation="pulse 1.5s infinite ease-in-out alternate",A.style.animation="pulse 1.5s infinite ease-in-out alternate"}),4e3),setTimeout((function(){O(),document.getElementById("preload").style.zIndex=-100,M.style.animation="none",A.style.animation="none",document.body.style.overflowY="visible"}),8e3),setTimeout((function(){I.style.display="none"}),9e3),n(19755);var _=Object.entries(l.NR),z=document.createElement("section");z.className="section";var G=document.createElement("div");G.id="gachalist";var W=document.createElement("h1");W.innerHTML="Gachas";var q=document.createElement("ul");q.classList.add("row"),_.map((function(e){var t=document.createElement("li");t.innerHTML='<img src="'+e[1]+'">',t.classList.add("col-md-6","col-12"),console.log(e.lastModified),"Space Gacha.png"!=e[0]&&"Xmas Gacha.png"!=e[0]&&"Sins Gacha.png"!=e[0]||(t.style.filter="grayscale(95%)"),t.onclick=function(){var t=window.open("gacha.html");setTimeout((function(){t.document.getElementById("header").innerHTML='<img src="'+e[1]+'" id="'+e[0]+'">'}),2500)},q.appendChild(t)})),G.append(W,q),z.append(G);var Y=n(48193),Q=n(39554),X=document.createElement("a");X.href="#top",X.id="up";var F=document.createElement("img");F.src=Q,X.appendChild(F),document.body.appendChild(X);var U=n(22823),D=n(12850),J=n(87557),K=n(99296),V=n(19755);document.body.append((0,i.Z)(),I,z),document.body.style.cursor='url("'+Y+'"), auto',Array.from(document.getElementsByTagName("select")).map((function(e){return e.style.cursor='url("'+Y+'"), auto'})),Array.from(document.getElementsByTagName("button")).map((function(e){return e.style.cursor='url("'+Y+'"), auto'})),Array.from(document.getElementsByTagName("a")).map((function(e){return e.style.cursor='url("'+Y+'"), auto'})),V("#jobsmain"),document.getElementById("navMain"),document.body.style.backgroundImage='url("'+K+'")',document.body.style.backgroundSize="cover",document.body.style.backgroundAttachment="fixed",document.body.style.backgroundPosition="center center";var ee=document.getElementById("navMain");function te(){D.Zs.wiki().then((function(e){D.Zs.words().then((function(e){(0,J.a)()}))})),localStorage.getItem("language")&&(document.getElementById("langSel").value=localStorage.getItem("language"));var e=Array.from(document.getElementsByClassName("skip"));e[0].style.animation="skipTop 20s linear infinite alternate",e[1].style.animation="skipBottom 20s linear infinite alternate"}window.onscroll=function(){!function(e){window.addEventListener("scroll",(function(){e.getBoundingClientRect().top<=0&&(e.classList.add("sticky"),X.style.display="block"),window.pageYOffset<114&&(e.classList.remove("sticky"),X.style.display="none",document.body.style.overflowX="hidden")})),e.offsetTop}(ee)},document.getElementById("langSel").addEventListener("change",(function(){localStorage.clear(),localStorage.setItem("language",document.getElementById("langSel").value),console.log(localStorage.getItem("language")),te()})),te();var ne=document.getElementById("navbtn"),re=document.getElementById("collapsemenu");(0,U.Z)(re,ne)},77115:(e,t,n)=>{"use strict";function r(e){var t={};return e.keys().map((function(n,r){t[n.replace("./","")]=e(n)})),t}n.d(t,{jC:()=>o,MM:()=>a,TB:()=>i,ee:()=>l,jQ:()=>s,wQ:()=>c,NR:()=>u}),r(n(63021));var o=r(n(91184)),a=(r(n(48652)),r(n(58108)),r(n(74913))),i=(r(n(87027)),r(n(45337))),l=(r(n(69229)),r(n(53084))),s=r(n(68997)),c=r(n(3748)),u=r(n(79957))},15377:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(23645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"h1{background-color:#717171;box-shadow:2px 2px black}#gachalist ul{list-style-type:none}#gachalist li{padding:4px}#gachalist img{width:85%;display:block;margin:auto;z-index:1}#gachalist img:hover{transform:scale(1.1);z-index:10}\n",""]);const a=o},62538:function(e){var t;t=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t,n){return"https://spreadsheets.google.com/feeds/"+n+"/"+e+"/"+t+"/public/values?alt=json"}function o(e,t,n,o){if(0===e.length)return Promise.reject(new Error("empty id"));var a=r(e,t,n);return new Promise((function(e,t){fetch(a).then((function(e){return e.json()})).then((function(t){var n=o(t.feed.entry),r={title:t.feed.title.$t,updated:t.feed.updated.$t,data:n};e(r)})).catch((function(e){t(e)}))}))}function a(e){var t=[];return e.forEach((function(e){var n=parseInt(e.gs$cell.row,10)-1,r=parseInt(e.gs$cell.col,10)-1,o=e.gs$cell.$t;void 0===t[n]&&(t[n]=[]),t[n][r]=o})),t}function i(e){return e.map((function(e){return function(e){var t={};return Object.keys(e).forEach((function(n){if(0===n.indexOf("gsx$")){var r=n.substr(4);t[r]=e[n].$t}})),t}(e)}))}function l(e){var t={};return e.forEach((function(e){t[e.title.$t]=function(e){var t=e.split(", "),n={},r=null;return t.forEach((function(e,t){var o=e.split(": ");2===o.length?(n[o[0]]=o[1],r=o[0]):1===o.length&&r&&(n[r]=n[r]+", "+o[0])})),n}(e.content.$t)})),t}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o(e,t,"cells",a)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o(e,t,"list",i)}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o(e,t,"list",l)}Object.defineProperty(t,"__esModule",{value:!0}),t.buildUrl=r,t.parseRawCells=a,t.parseLabeledCols=i,t.parseLabeledRowsCols=l,t.raw=s,t.labeledCols=c,t.labeledColsRows=u,t.default={raw:s,labeledCols:c,labeledColsRows:u}}]).default},e.exports=t()},83300:(e,t)=>{"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},88426:(e,t,n)=>{"use strict";e.exports=n.p+"15b22ce189d171fababd.png"},40883:(e,t,n)=>{"use strict";e.exports=n.p+"48b1c8c4f21a5af4dc43.png"},61665:(e,t,n)=>{"use strict";e.exports=n.p+"a2fd8adc1a973ef600f0.png"},99296:(e,t,n)=>{"use strict";e.exports=n.p+"928804ce636a85eeecbc.PNG"}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,n.x=e=>{},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={765:0},t=[[79453,665,993,771,257,542]],r=e=>{},o=(o,a)=>{for(var i,l,[s,c,u,d]=a,m=0,f=[];m<s.length;m++)l=s[m],n.o(e,l)&&e[l]&&f.push(e[l][0]),e[l]=0;for(i in c)n.o(c,i)&&(n.m[i]=c[i]);for(u&&u(n),o&&o(a);f.length;)f.shift()();return d&&t.push.apply(t,d),r()},a=self.webpackChunklrnwebpack=self.webpackChunklrnwebpack||[];function i(){for(var r,o=0;o<t.length;o++){for(var a=t[o],i=!0,l=1;l<a.length;l++){var s=a[l];0!==e[s]&&(i=!1)}i&&(t.splice(o--,1),r=n(n.s=a[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),r}a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a));var l=n.x;n.x=()=>(n.x=l||(e=>{}),(r=i)())})(),n.x()})();