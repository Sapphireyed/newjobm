(()=>{var e={58415:(e,t,s)=>{"use strict";s(34404);var a=s(93379),n=s.n(a),r=s(1558);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var i=s(47413),o=s(48193),c=s(39554),l=document.createElement("a");l.href="#top",l.id="up";var d=document.createElement("img");d.src=c,l.appendChild(d),document.body.appendChild(l);var p=s(87316),m=s(57732),b=s(38208),u=s(67067),h=s(78032),g=s(67522),f=s(56668),y=s(87483),v=s(11975),k=s(7112),w=s(3885),x=s(81567),E=s(99020),T=s(6645),L=(s(47687),s(8726)),A=s(55691),M=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth,C=[h,b,u,m,g,f];document.body.style.overflow="hidden";var I=document.createElement("div");I.style.width=screen.width+"px",I.style.height=screen.height+"px",I.id="preload";var P=document.createElement("div");P.id="preloaddiv";var B=document.createElement("img");B.src=y,B.id="jimg",B.maxWidth=I.width,B.clientWidth,B.clientHeight;var N=document.createElement("img");N.src=v,N.id="obmania";var W=document.createElement("img");W.src=k;var H=document.createElement("h4");H.className="loading",H.innerHTML="Loading...";var S=document.createElement("a");S.innerHTML="Skip",S.className="skip";var D=S.cloneNode(!0),O=S.cloneNode(!0),j=S.cloneNode(!0);S.id="skipTop",D.id="skipBottom",O.id="skipLeft",j.id="skipRight";var z=[{transition:"0.9s",transform:"rotate(1080deg) scale(0)"},{transition:"0.9s",transform:"scale(8)"},{transition:"0.4s",transform:"skew(90deg, 0deg) scaley(1)"}];function R(){var e=Math.floor(Math.random()*z.length);console.log(e),console.log(z[e].transform),I.style.transition=z[e].transition,I.style.transform=z[e].transform,I.style.opacity=.5,P.style.animation="none",F.style.animation="none",document.body.style.overflowY="visible",setTimeout((function(){I.style.display="none"}),900)}S.onclick=R,D.onclick=R,O.onclick=R,j.onclick=R,P.append(B,N,W);var F=document.createElement("div");F.id="chardiv";var Y,G=document.createElement("img");switch(Math.floor(Math.random()*C.length),G.id="hero",F.appendChild(G),I.append(P,H,S,D,F),Array.from(document.querySelectorAll("#preload img:not(#hero)")),Math.floor(Math.random()*C.length)){case 0:I.style.backgroundImage="url("+w+")",I.style.backgroundPosition="center center",G.style.width="200px",G.src=u,H.style.color="black";break;case 1:I.style.backgroundImage="url("+A+")",I.style.backgroundPosition="center top",B.style.filter="brightness(0) invert(1)",N.style.filter="brightness(0) invert(1)",W.style.filter="brightness(0) invert(1)",G.src=m;break;case 2:I.style.backgroundImage="url("+T+")",I.style.backgroundPosition="center top",B.style.filter="brightness(0) invert(1)",N.style.filter="brightness(0) invert(1)",W.style.filter="brightness(0) invert(1)",console.log(T),G.src=b;break;case 3:I.style.backgroundImage="url("+x+")",I.style.backgroundPosition="center top",B.style.filter="brightness(0) invert(1)",N.style.filter="brightness(0) invert(1)",W.style.filter="brightness(0) invert(1)",G.src=g;break;case 4:I.style.backgroundImage="url("+L+")",I.style.backgroundPosition="center center",G.src=h;break;case 5:I.style.backgroundImage="url("+E+")",I.style.backgroundPosition="center top",I.style.backgroundAttachment="fixed",H.style.color="black",G.src=f}I.style.backgroundSize="cover",window.onbeforeunload=function(){window.scrollTo(0,0)},setTimeout((function(){B.style.transform=M<768?"scale(1)":"scale(1.5)",G.style.transform=M<768?"scale(1.3)":"scale(2)"}),1),setTimeout((function(){N.style.height=.55*B.height*1.5+"px",N.style.width=.95*B.width+"px",Y=N.height}),1501),setTimeout((function(){W.style.top=Y+"px",W.style.height=.15*B.width+"px",W.style.width=.71*B.width+"px"}),3010),setTimeout((function(){P.style.animation="pulse 1.5s infinite ease-in-out alternate",F.style.animation="pulse 1.5s infinite ease-in-out alternate"}),4e3),setTimeout((function(){R(),document.getElementById("preload").style.zIndex=-100,P.style.animation="none",F.style.animation="none",document.body.style.overflowY="visible"}),8e3),setTimeout((function(){I.style.display="none"}),9e3);var Z=s(80044),U=s(38628),$=s(58933),q=s(60993),J=s.n(q),_=s(89290),X=s(54028),K=s(55141),Q=s(67784),V=s(97209),ee=s(49128),te=s(56245),se=s(95520),ae=s(60543),ne=s(33066),re=s(13763),ie=s(4586),oe=s(93644),ce=s(73036),le=s(93156),de=s(52635),pe=s(28285),me=(s(52798),s(26535),s(75657),s(74069),s(44500));s(37947),s(19755),document.body.append((0,i.Z)(),I),document.body.style.cursor='url("'+o+'"), auto',Array.from(document.getElementsByTagName("select")).map((function(e){return e.style.cursor='url("'+o+'"), auto'})),Array.from(document.getElementsByTagName("button")).map((function(e){return e.style.cursor='url("'+o+'"), auto'})),Array.from(document.getElementsByTagName("a")).map((function(e){return e.style.cursor='url("'+o+'"), auto'})),document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth,document.body.style.backgroundImage='url("'+p+'")',document.body.style.backgroundColor="dimgrey",document.body.style.backgroundSize="cover",document.body.style.backgroundAttachment="fixed",document.body.style.backgroundPosition="left top";var be=document.getElementById("navMain");window.addEventListener("scroll",(function(){!function(e){window.addEventListener("scroll",(function(){e.getBoundingClientRect().top<=0&&(e.classList.add("sticky"),l.style.display="block"),window.pageYOffset<114&&(e.classList.remove("sticky"),l.style.display="none",document.body.style.overflowX="hidden")})),e.offsetTop}(be)}));var ue='<span class="agi"><img class="icon" src="'+K+'" alt="str"/><b> AGI</b></span></span>',he='<span class="str"><img class="icon" src="'+X+'" alt="str"/><b> STR</b></span></span>',ge='<span class="int"><img class="icon" src="'+Q+'" alt="str"/><b> INT</b></span></span>',fe='<span class="maxhp"><img class="icon" src="'+_+'" alt="hp"/><b> HP</b></span></span>',ye='<img class="icon" src="'+V+'" alt="hp" />',ve='<img class="icon" src="'+ee+'" alt="hp" />',ke='<img class="icon" src="'+te+'" alt="hp" />',we='<img class="icon" src="'+se+'" alt="hp" />',xe='<img class="icon" src="'+ae+'" alt="hp" />',Ee='<img class="icon" src="'+ne+'" alt="hp" />',Te='<img class="icon" src="'+re+'" alt="hp" />',Le='<img class="icon" src="'+ie+'" alt="hp" />',Ae='<img class="icon" src="'+oe+'" alt="hp" />',Me='<img class="icon" src="'+ce+'" alt="hp" />',Ce='<img class="icon" src="'+le+'" alt="hp" />',Ie='<img class="icon" src="'+pe+'" alt="hp" />',Pe='<img class="icon" src="'+me+'" alt="hp" />',Be='<img class="icon" src="'+de+'" alt="hp" />';window.addEventListener("load",(function(){var e=document.createElement("section");e.id="mainsect";var t=document.createElement("p");t.id="disclaimer",t.innerHTML="Guide content by Burtgang#9627";var s=document.createElement("div"),a=document.createElement("h1");a.innerHTML="COMBOS",s.appendChild(a),e.append(t,s);var n=document.createElement("div");n.classList.add("row"),n.id="div1";var r=document.createElement("div");r.classList.add("col-12","col-md-3");var i=document.createElement("img");i.src=Z,r.appendChild(i);var o=document.createElement("div");o.classList.add("col-12","col-md-6"),o.innerHTML='<p>There are two types of combo counters in Jobmania, <span class="str"><b>S</b></span><span class="agi"><b>T</b></span><span class="int"><b>Y</b></span><span class="maxhp"><b>L</b></span><b>E</b> and element.Style Combo - This is split into 4 different types, '+ue+", "+he+", "+ge+" and "+fe+".Each time you use or preview an ability, it will have a colored pip indicating which type of combo counter the action will generate, and how many.</p>";var c=document.createElement("div");c.classList.add("col-12","col-md-3");var l=document.createElement("img");l.src=U,c.appendChild(l),n.append(r,o,c);var d=document.createElement("div");d.id="div2";var p=document.createElement("h4");p.innerHTML='<span class="str"><b>S</b></span><span class="agi"><b>T</b></span><span class="int"><b>Y</b></span><span class="maxhp"><b>L</b></span><b>E</b> breakdown',d.append(p),d.innerHTML=d.innerHTML+ue+"<p> Agility specializes in dealing multiple small hits, which drive up the combo counter quickly. As a result, it's easier to generate "+ue+" combos than most others.The cards tend to be low in cost, to better make use of the ability to spend cards.</p><p>Every time the "+ue+" combo hits a multiple of 8 (16, 24, etc.), you draw an ability. Every time the "+ue+' combo hits a multiple of 40, the same abilities already discarded(for example, if you\'ve discarded the ability "Stab" for AP earlier that turn), can be discarded again for AP(if you have another copy of it TO discard).You also gain 2 AP</p> '+he+"<br>  Strength tends to deal big single hits. The cards often self-boost or make use of Protect Pierce.Every time the "+he+' combo hits a multiple of 4, you gain a buff - Guard if you have no Guard buff, and Charge otherwise.There is no "big" 40 - combo reset or bonus.<br><br>'+ge+"<br>Intelligence tends to deal smaller single hits or use effects to make single large hits. The cards often provide buffs or healing, and occasionally make use of elements.<br>Every time the "+ge+" combo hits a multiple of 8(16, 24, etc.), you gain 1 free AP.Additionally, when you hit 40 combo count, the cost of all your job's abilities is set to 0 again(so you can use them for free again once), and you draw 2 abilities.<br><br>"+fe+"<br>Tends to deal medium-large single hits. The cards often provide Protect bonus or maxHP buffs. (In-game, this color is represented by a lighter shade of yellow.)Every time the "+fe+' combo hits 5, the player heals for 15 % of maximum health.If your health is full, you gain 10 % protection instead.<br><br><span class="agi">C</span><span class="str">o</span><span class="maxhp">m</span><span class="int">b</span><span class="agi">o</span><span class="str"> B</span><span class="maxhp">l</span><span class="int">e</span><span class="agi">n</span><span class="str">d</span><br>Abilities with "Combo Blend" will add +1 or +2 to the CURRENT combo count, regardless of the type of actions in the ability itself (for example, Gemstone Heal, despite triggering STR / AGI / INT - type healing, will still only add 1 to the existing combo counter).Just think of combo blend cards as a rainbow addition.<br><br><br><b>Not</b> all abilities generate combo count. Many buff/debuff cards and actions don\'t generate combo count. <br>Do keep in mind, however, that many jobs and heroes also add an extra action after every ability played, which WILL drive up your combo counter, even if the original ability played did not.<br>For example, <b>Archangel Michael</b>, as seen above, generates 1 stack of '+fe+' combo at the end of each turn, because he heals himself.<br><br>Other heroes, such as <b>Underground Ruler Zax</b>, deal additional hits after EACH action.For example, if Zax uses the ability "Assassinate", he will gain 3 '+ue+" combo instead of 1, since he will deal 1 hit with Assassinate, and then 2 hits from his passive "+ue+" damage.This can greatly complicate stacking, so keep that in mind.";var m=document.createElement("div");m.innerHTML='<img src="'+$+'" width="90" height="90" class="breakimg">';var b=document.createElement("div3");b.id="div3";var u=document.createElement("h4");u.innerHTML='<span class="fire"><b>E</b></span><span class="light"><b>L</b></span><span class="earth"><b>E</b></span><span class="water"><b>M</b></span><span class="wind"><b>E</b></span><span class="dark"><b>N</b></span><span class="thunder"><b>T</b></span>(al) Breakdown';var h=document.createElement("p");h.innerHTML='The ELEMENT counter stacks in much the same way; however, there are different stack limits, and elements are generally slower. They also do NOT have an inherent stack bonus, though there ARE abilities that utilize all your elemental stacks.Elemental progress is tracked via the outer ring(4 portions of the circle light up) and via letters on top of the combo counter.Every time FOUR of the same element is used in a row, a single stack of the elemental buff is gained.These buffs are shown the bottom of the screen, with a stack ranging from 5(base) to 10(with element master).</p><br><img src="'+J()+'" alt="elementsCycle" class="elementCycle"><br><p><span class="light">Li</span> for '+Ee+'<span class="light"><b> Light</b></span> - Each stack increases damage dealt against enemies with '+Te+'<span class="dark"> Dark </span>element or '+Le+'<span class="blind"> Blinded </span>by 5%. Lose a stack when hit by '+Te+'<span class="dark"> Dark</span>.<br><br><span class="dark">Dr</span> for '+Te+'<span class="dark"><b> Dark</b> </span>- Deal 5 % bonus per stack to enemies with '+Ee+'<span class="light"> Light </span>element or '+Ae+'<span class="depress"> Depress</span>. Lose a stack when hit by'+Ee+'<span class="light"> Light</span>.<br><br> <span class="water">Wa</span> for '+ve+'<span class="water"><b> Water</b></span> - Each stack increases your damage against enemies with '+ye+' <span class="fire"> Fire</span> element or '+Ce+'<span class="chill"> Chilled</span> by 5 %.Lose a stack when hit by '+xe+'<span class="thunder">Thunder</span>.<br><br><span class="thunder">Th</span> for '+xe+'<span class="thunder"><b> Thunder</b></span> - Deal 5 % bonus per stack to enemies with '+ve+'<span class="water">Water</span> element or '+Pe+' <span class="paralysis">Paralysis</span>. Lose a stack when struck by '+ke+'<span class="earth">Earth</span> element.<br><br> <span class="fire">Fi</span> for '+ye+'<span class="fire"> Fire</span> - Deal 5 % bonus per stack to enemies with '+we+'<span class="wind">Wind</span> element or '+Me+'<span class="burn">Burn</span>.Lose a stack when struck by '+ve+'<span class="water">Water</span>.<br><br> <span class="earth">Ea</span> for '+ke+'<span class="earth">Earth</span> - Deal 5 % bonus per stack to enemies with '+xe+'<span class="thunder">Thunder</span>element or '+Ie+'<span class="seed">Seed</span>.Lose a stack when struck by '+we+'<span class="wind">Wind</span>.<br><br> <span class="wind">Wi</span> for '+we+'<span class="wind">Wind</span> - Deal 5 % bonus per stack to enemies with '+ke+'<span class="earth">Earth</span>element or '+Be+'<span class="dizzy">Dizzy</span>.Lose a stack when struck by '+ye+'<span class="fire">Fire</span>.<br><br> Elemental damage inherently deals 20 % (30 % when upgraded) extra damage to enemy weaknesses, on top of the bonus per buff stack.You can use this to get some really high damage!</p>',b.append(u,h),e.append(n,d,m,b),document.body.appendChild(e);var g=Array.from(document.getElementsByClassName("skip"));g[0].style.animation="skipTop 20s linear infinite alternate",g[1].style.animation="skipBottom 20s linear infinite alternate"}));var Ne,We=document.getElementById("navbtn"),He=document.getElementById("collapsemenu");Ne=He,We.onclick=function(){"none"==Ne.style.display?Ne.style.display="block":Ne.style.display="none"}},1558:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(23645),n=s.n(a)()((function(e){return e[1]}));n.push([e.id,"h1{text-align:center;color:#fff;background-color:#222738}#mainsect{width:90vw;margin:auto;background-color:#6b7fb0;text-align:justify;padding:5px 20px}#mainsect #disclaimer{text-align:center}#mainsect #div1 div:nth-child(2){display:block;margin:auto}#mainsect #div2 h4{text-align:center;margin-top:10px}#mainsect div3 h4{text-align:center;margin-top:25px}#mainsect div3 .elementCycle{display:block;margin:10px auto}#div1 img:not(.breakimg):hover{transform:scale(1.5)}.breakimg{display:block;margin:auto}\n",""]);const r=n},60993:(e,t,s)=>{e.exports=s.p+"ce20b4cf009232e70d69ddb267670d3f.jpg"},26535:(e,t,s)=>{"use strict";e.exports=s.p+"ab25a53533fa074274e1.png"},4586:(e,t,s)=>{"use strict";e.exports=s.p+"f73640f97570b12bab4b.png"},73036:(e,t,s)=>{"use strict";e.exports=s.p+"2b0800423bf2138fd0e8.png"},93156:(e,t,s)=>{"use strict";e.exports=s.p+"e1ba4648a6d5643dcea0.png"},93644:(e,t,s)=>{"use strict";e.exports=s.p+"b15a509c323096b516d7.png"},52635:(e,t,s)=>{"use strict";e.exports=s.p+"ff5a69cd1d8bd20a0184.png"},75657:(e,t,s)=>{"use strict";e.exports=s.p+"bf99e92bf3dcd527df8f.png"},74069:(e,t,s)=>{"use strict";e.exports=s.p+"c4517d24cb0e60530c58.png"},44500:(e,t,s)=>{"use strict";e.exports=s.p+"a599aed36558b4faa25e.png"},52798:(e,t,s)=>{"use strict";e.exports=s.p+"b2e23163716139708c80.png"},28285:(e,t,s)=>{"use strict";e.exports=s.p+"da24f5e5b510c4eab39a.png"},37947:(e,t,s)=>{"use strict";e.exports=s.p+"b2145416ec62da90cdab.png"},67784:(e,t,s)=>{"use strict";e.exports=s.p+"8cec5e853ac4904765e1.png"},80044:(e,t,s)=>{"use strict";e.exports=s.p+"889ec759503476711b51.png"},38628:(e,t,s)=>{"use strict";e.exports=s.p+"4d226a4958192346916f.png"},13763:(e,t,s)=>{"use strict";e.exports=s.p+"241c8f6dee0b73519ae0.png"},56245:(e,t,s)=>{"use strict";e.exports=s.p+"b795115749c71997ae8f.png"},58933:(e,t,s)=>{"use strict";e.exports=s.p+"c8140e5b78208479a7ee.png"},97209:(e,t,s)=>{"use strict";e.exports=s.p+"db3f5ecd8e89a5e59ec7.png"},33066:(e,t,s)=>{"use strict";e.exports=s.p+"5062ff2f391c9e8cbbc9.png"},60543:(e,t,s)=>{"use strict";e.exports=s.p+"e1ad975e8c98be8dfb4b.png"},49128:(e,t,s)=>{"use strict";e.exports=s.p+"2d56393f228ccec6dabb.png"},95520:(e,t,s)=>{"use strict";e.exports=s.p+"14c1f0902ab1a1deec56.png"},87316:(e,t,s)=>{"use strict";e.exports=s.p+"fe0c4596771c82924ab6.png"}},t={};function s(a){if(t[a])return t[a].exports;var n=t[a]={id:a,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.exports}s.m=e,s.x=e=>{},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={994:0},t=[[58415,665,993]],a=e=>{},n=(n,r)=>{for(var i,o,[c,l,d,p]=r,m=0,b=[];m<c.length;m++)o=c[m],s.o(e,o)&&e[o]&&b.push(e[o][0]),e[o]=0;for(i in l)s.o(l,i)&&(s.m[i]=l[i]);for(d&&d(s),n&&n(r);b.length;)b.shift()();return p&&t.push.apply(t,p),a()},r=self.webpackChunklrnwebpack=self.webpackChunklrnwebpack||[];function i(){for(var a,n=0;n<t.length;n++){for(var r=t[n],i=!0,o=1;o<r.length;o++){var c=r[o];0!==e[c]&&(i=!1)}i&&(t.splice(n--,1),a=s(s.s=r[0]))}return 0===t.length&&(s.x(),s.x=e=>{}),a}r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var o=s.x;s.x=()=>(s.x=o||(e=>{}),(a=i)())})(),s.x()})();