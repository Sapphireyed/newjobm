(self.webpackChunklrnwebpack=self.webpackChunklrnwebpack||[]).push([[534,935],{22823:(t,e,n)=>{"use strict";function i(t,e){e.onclick=function(){"none"==t.style.display?t.style.display="block":t.style.display="none"}}n.d(e,{Z:()=>i})},12850:(t,e,n)=>{"use strict";n.d(e,{Zs:()=>c,w_:()=>i}),n.g.fetch=n(83300);var i,r=n(62538),s="1B2olPb1sTgFSskGBC68czBBt1ICh2jGmQkIKOi_c39w",o=[],a=[],c={wiki:function(){return r.raw(s,15).then((function(t){return t.data})).then((function(t){t.shift(),t.shift();var e=t.map((function(t,e){if("Sentences"==t[0])return e}));e=e.find((function(t){return null!=t})),i=t.slice(0,e)}))},skills:function(){return r.raw(s,3).then((function(t){return t.data})).then((function(t){t.shift(),t.shift();var e=t.map((function(t,e){if("Skills Titles"==t[0])return e}));e=e.find((function(t){return null!=t}));var n=t.map((function(t,e){if("Skills Descriptions"==t[0])return e}));n=n.find((function(t){return null!=t}));var i=t.map((function(t,e){if("Buffs, Debuffs, Applies & Passives Descriptions"==t[0])return e}));i=i.find((function(t){return null!=t}));var r=t.map((function(t,e){if("Ability's Skill Unit Term/Descriptions"==t[0])return e}));r=r.find((function(t){return null!=t}));var s=t.map((function(t,e){if("Passive's Skill Unit Term/Desciptions"==t[0])return e}));s=s.find((function(t){return null!=t})),t.slice(0,n),a=t.slice(n,i),t.slice(i,r),console.log(a),t.slice(r,s).shift(),t.slice(s).shift()}))},characters:function(){return r.raw(s,9).then((function(t){return t.data})).then((function(t){t.shift(),t.shift()}))},chapters:function(){return r.raw(s,11).then((function(t){return t.data})).then((function(t){t.shift(),t.shift(),o=t,console.log(o)}))},rules:function(){return r.raw(s,13).then((function(t){return t.data})).then((function(t){t.shift(),t.shift()}))},traits:function(){return r.raw(s,12).then((function(t){return t.data})).then((function(t){t.shift(),t.shift()}))},materials:function(){return r.raw(s,7).then((function(t){return t.data})).then((function(t){t.shift(),t.shift();var e=t.map((function(t,e){if("Description"==t[0])return e}));e=e.find((function(t){return null!=t})),t.length=e}))},words:function(){return r.raw(s,1).then((function(t){return t.data})).then((function(t){t.shift(),t.shift()}))},jobs:function(){return r.raw(s,8).then((function(t){return t.data})).then((function(t){t.shift(),t.shift()}))},abils:function(){return r.raw(s,5).then((function(t){return t.data})).then((function(t){t.shift(),t.shift()}))},passives:function(){return r.raw(s,6).then((function(t){return t.data})).then((function(t){t.shift(),t.shift(),t.pop()}))}}},15495:(t,e,n)=>{"use strict";n.d(e,{M:()=>b});var i=n(57732),r=n(38208),s=n(67067),o=n(78032),a=n(67522),c=n(56668),l=n(87483),u=n(11975),f=n(7112),d=n(3885),h=n(81567),m=n(99020),g=n(6645),y=(n(47687),n(8726)),p=n(55691),k=n(12850),b=document.createElement("div");k.Zs.wiki().then((function(t){var e,n;switch(localStorage.getItem("language")?localStorage.getItem("language"):"English"){case"English":e=k.w_.filter((function(t){return"Loading"==t[0]}))[0][1],n=k.w_.filter((function(t){return"Skip"==t[0]}))[0][2]}var v=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth,w=[o,r,s,i,a,c];document.body.style.overflow="hidden",b.style.width=screen.width+"px",b.style.height=screen.height+"px",b.id="preload";var T=document.createElement("div");T.id="preloaddiv";var E=document.createElement("img");E.src=l,E.id="jimg",E.maxWidth=b.width,E.clientWidth,E.clientHeight;var x=document.createElement("img");x.src=u,x.id="obmania";var I=document.createElement("img");I.src=f;var S=document.createElement("h4");S.className="loading",S.innerHTML=e;var M=document.createElement("a");M.innerHTML=n,M.className="skip";var P=M.cloneNode(!0),B=M.cloneNode(!0),D=M.cloneNode(!0);M.id="skipTop",P.id="skipBottom",B.id="skipLeft",D.id="skipRight";var A=[{transition:"0.9s",transform:"rotate(1080deg) scale(0)"},{transition:"0.9s",transform:"scale(8)"},{transition:"0.4s",transform:"skew(90deg, 0deg) scaley(1)"}];function C(){var t=Math.floor(Math.random()*A.length);console.log(t),console.log(A[t].transform),b.style.transition=A[t].transition,b.style.transform=A[t].transform,b.style.opacity=.5,T.style.animation="none",N.style.animation="none",document.body.style.overflowY="visible",setTimeout((function(){b.style.display="none"}),900)}M.onclick=C,P.onclick=C,B.onclick=C,D.onclick=C,T.append(E,x,I);var N=document.createElement("div");N.id="chardiv";var W,L=document.createElement("img");switch(Math.floor(Math.random()*w.length),L.id="hero",N.appendChild(L),b.append(T,S,M,P,N),Array.from(document.querySelectorAll("#preload img:not(#hero)")),Math.floor(Math.random()*w.length)){case 0:b.style.backgroundImage="url("+d+")",b.style.backgroundPosition="center center",L.style.width="200px",L.src=s,S.style.color="black";break;case 1:b.style.backgroundImage="url("+p+")",b.style.backgroundPosition="center top",E.style.filter="brightness(0) invert(1)",x.style.filter="brightness(0) invert(1)",I.style.filter="brightness(0) invert(1)",L.src=i;break;case 2:b.style.backgroundImage="url("+g+")",b.style.backgroundPosition="center top",E.style.filter="brightness(0) invert(1)",x.style.filter="brightness(0) invert(1)",I.style.filter="brightness(0) invert(1)",console.log(g),L.src=r;break;case 3:b.style.backgroundImage="url("+h+")",b.style.backgroundPosition="center top",E.style.filter="brightness(0) invert(1)",x.style.filter="brightness(0) invert(1)",I.style.filter="brightness(0) invert(1)",L.src=a;break;case 4:b.style.backgroundImage="url("+y+")",b.style.backgroundPosition="center center",L.src=o;break;case 5:b.style.backgroundImage="url("+m+")",b.style.backgroundPosition="center top",b.style.backgroundAttachment="fixed",S.style.color="black",L.src=c}b.style.backgroundSize="cover",window.onbeforeunload=function(){window.scrollTo(0,0)},setTimeout((function(){E.style.transform=v<768?"scale(1)":"scale(1.5)",L.style.transform=v<768?"scale(1.3)":"scale(2)"}),1),setTimeout((function(){x.style.height=.55*E.height*1.5+"px",x.style.width=.95*E.width+"px",W=x.height}),1501),setTimeout((function(){I.style.top=W+"px",I.style.height=.15*E.width+"px",I.style.width=.71*E.width+"px"}),3010),setTimeout((function(){T.style.animation="pulse 1.5s infinite ease-in-out alternate",N.style.animation="pulse 1.5s infinite ease-in-out alternate"}),4e3),setTimeout((function(){C(),document.getElementById("preload").style.zIndex=-100,T.style.animation="none",N.style.animation="none",document.body.style.overflowY="visible"}),8e3),setTimeout((function(){b.style.display="none"}),9e3)}))},67784:(t,e,n)=>{"use strict";t.exports=n.p+"8cec5e853ac4904765e1.png"}}]);