(self.webpackChunklrnwebpack=self.webpackChunklrnwebpack||[]).push([[109],{42109:(e,t,n)=>{"use strict";n(67623),n(13247),n(12850),n(36754),n(60380),n(70311),n(46334),n(40721),n(63599),n(67784),n(38529),n(15495)},67623:(e,t,n)=>{"use strict";n(71891);var a=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth,d=document.createElement("section");d.classList.add("section","shadow"),d.id="jobmainsect";var c=document.createElement("div");c.id="jobmaindiv",c.className="row";var r=document.createElement("h1");r.classList.add("col-12"),r.id="jobheader";var i=document.createElement("span");i.id="top",c.append(i,r);var l=document.createElement("div");l.id="basicinfo",l.className="row";var s=document.createElement("div"),o=document.createElement("div");s.classList.add("col-12","col-sm-2"),o.id="jobimg",o.classList.add("d-block","mx-auto"),s.appendChild(o),document.createElement("div").classList.add("col-md-10","col-12","row","my-auto");var m=document.createElement("div");m.id="rarLvlOrb",m.classList.add("col-md-6","col-12");var u=document.createElement("div");u.id="rarity",u.classList.add("jobattr");var v=document.createElement("div");v.id="level",v.style.marginTop="10px";var p=document.createElement("h4"),h=document.createElement("label");h.innerHTML="Level: ";var y=document.createElement("input");y.id="levelSel",y.type="number",y.min=1,y.step=10,y.value=10,y.style.width="50px",y.classList.add("rounded"),p.append(h),v.append(p,y);var g=document.createElement("div");g.id="crystDiv";var b=document.createElement("h4"),E=document.createElement("label");E.for="jobmCrystal",E.innerHTML="Jobmania Orb: ",E.style.marginRight="4px",b.appendChild(E);var f=document.createElement("select");f.id="jobmCrystal",f.name="jobmCrystal",f.value=0,f.style.width="50px",f.classList.add("rounded"),f.style.textAlign="right";var k=[0,1,2,3,4,5].map((function(e){return'<option value="'.concat(e,'">').concat(e,"</option>")}));f.innerHTML=k,g.append(b,f);var w=document.createElement("div");w.classList.add("col-12"),w.id="lvlbtns";var x=document.createElement("button");x.classList.add("rounded"),x.innerHTML="Apply";var L=document.createElement("button");L.classList.add("rounded"),L.innerHTML="Reset",w.append(x,L),m.append(u,v,g,w);var T=document.createElement("div");T.id="attrsAttrs",T.classList.add("col-md-5","col-12");var H=document.createElement("h4");H.id="hp";var M=document.createElement("h4");M.id="str";var A=document.createElement("h4");A.id="agi";var N=document.createElement("h4");N.id="int",[H,M,A,N].map((function(e){e.classList.add("jobattr"),T.appendChild(e)}));var j=document.createElement("div");j.classList.add("col-md-8","col-12","row"),j.id="rarAndAttrs",j.append(m,T);var C=s.cloneNode(!0);C.id="jobimg2",a>768?l.append(s,j,C):l.append(s,j);var I=document.createElement("div");I.classList.add("row"),I.id="passiveAndSwitch";var W=document.createElement("div");W.id="passiveSkill",W.classList.add("col-sm","col-12");var S=document.createElement("h4");S.id="passiveH";var P=document.createElement("h5");P.id="passiveDesc",W.append(S,P);var D=document.createElement("div");D.id="switchSkill",D.classList.add("col-sm","col-12");var R=document.createElement("h4");R.id="switchH";var z=document.createElement("div");z.id="switchimg";var B=document.createElement("h5");B.id="switchDesc",D.append(R,B,z),I.append(W,D);var O=document.createElement("div");O.id="deckdiv",O.style.margin="10px";var Y=document.createElement("div");Y.id="deck",Y.classList.add("row"),Y.style.margin="5px";var q=document.createElement("h3");q.id="deckH",q.className="col-12",q.style.textAlign="center",q.style.color="white",q.style.margin="7px 0",q.innerHTML="Deck";var J=document.createElement("div");J.className="col-md",J.id="card1",J.style.margin="5px";var F=document.createElement("h5");F.id="card1H",F.style.textAlign="center";var G=document.createElement("div");G.id="card1img";var K=document.createElement("h6");K.id="card1desc",J.append(F,G,K);var Q=document.createElement("div");Q.className="col-md",Q.id="card2",Q.style.margin="5px";var U=document.createElement("h5");U.id="card2H",U.style.textAlign="center";var V=document.createElement("div");V.id="card2img";var X=document.createElement("h6");X.id="card2desc",Q.append(U,V,X);var Z=document.createElement("div");Z.className="col-md",Z.id="card3",Z.style.margin="5px";var $=document.createElement("h5");$.id="card3H",$.style.textAlign="center";var _=document.createElement("div");_.id="card3img";var ee=document.createElement("h6");ee.id="card3desc",Z.append($,_,ee);var te=document.createElement("div");te.className="col-md",te.id="card4",te.style.margin="5px";var ne=document.createElement("h5");ne.id="card4H",ne.style.textAlign="center";var ae=document.createElement("div");ae.id="card4img";var de=document.createElement("h6");de.id="card4desc",te.append(ne,ae,de),Y.append(q,J,Q,Z,te);var ce=document.createElement("div");ce.id="craftdiv";var re=document.createElement("h4");re.innerHTML="Craft";var ie=document.createElement("div");ie.id="craftCraft",ie.className="row",ce.append(re,ie),O.append(Y),d.append(c,l,I,O,ce)},15495:(e,t,n)=>{"use strict";n.d(t,{M:()=>f});var a=n(57732),d=n(38208),c=n(67067),r=n(78032),i=n(67522),l=n(56668),s=n(87483),o=n(11975),m=n(7112),u=n(3885),v=n(81567),p=n(99020),h=n(6645),y=(n(47687),n(8726)),g=n(55691),b=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth,E=[r,d,c,a,i,l];document.body.style.overflow="hidden";var f=document.createElement("div");f.style.width=screen.width+"px",f.style.height=screen.height+"px",f.id="preload";var k=document.createElement("div");k.id="preloaddiv";var w=document.createElement("img");w.src=s,w.id="jimg",w.maxWidth=f.width,w.clientWidth,w.clientHeight;var x=document.createElement("img");x.src=o,x.id="obmania";var L=document.createElement("img");L.src=m;var T=document.createElement("h4");T.className="loading",T.innerHTML="Loading...";var H=document.createElement("a");H.innerHTML="Skip",H.className="skip";var M=H.cloneNode(!0),A=H.cloneNode(!0),N=H.cloneNode(!0);H.id="skipTop",M.id="skipBottom",A.id="skipLeft",N.id="skipRight";var j=[{transition:"0.9s",transform:"rotate(1080deg) scale(0)"},{transition:"0.9s",transform:"scale(8)"},{transition:"0.4s",transform:"skew(90deg, 0deg) scaley(1)"}];function C(){var e=Math.floor(Math.random()*j.length);console.log(e),console.log(j[e].transform),f.style.transition=j[e].transition,f.style.transform=j[e].transform,f.style.opacity=.5,k.style.animation="none",I.style.animation="none",document.body.style.overflowY="visible",setTimeout((function(){f.style.display="none"}),900)}H.onclick=C,M.onclick=C,A.onclick=C,N.onclick=C,k.append(w,x,L);var I=document.createElement("div");I.id="chardiv";var W,S=document.createElement("img");switch(Math.floor(Math.random()*E.length),S.id="hero",I.appendChild(S),f.append(k,T,H,M,I),Array.from(document.querySelectorAll("#preload img:not(#hero)")),Math.floor(Math.random()*E.length)){case 0:f.style.backgroundImage="url("+u+")",f.style.backgroundPosition="center center",S.style.width="200px",S.src=c,T.style.color="black";break;case 1:f.style.backgroundImage="url("+g+")",f.style.backgroundPosition="center top",w.style.filter="brightness(0) invert(1)",x.style.filter="brightness(0) invert(1)",L.style.filter="brightness(0) invert(1)",S.src=a;break;case 2:f.style.backgroundImage="url("+h+")",f.style.backgroundPosition="center top",w.style.filter="brightness(0) invert(1)",x.style.filter="brightness(0) invert(1)",L.style.filter="brightness(0) invert(1)",console.log(h),S.src=d;break;case 3:f.style.backgroundImage="url("+v+")",f.style.backgroundPosition="center top",w.style.filter="brightness(0) invert(1)",x.style.filter="brightness(0) invert(1)",L.style.filter="brightness(0) invert(1)",S.src=i;break;case 4:f.style.backgroundImage="url("+y+")",f.style.backgroundPosition="center center",S.src=r;break;case 5:f.style.backgroundImage="url("+p+")",f.style.backgroundPosition="center top",f.style.backgroundAttachment="fixed",T.style.color="black",S.src=l}f.style.backgroundSize="cover",window.onbeforeunload=function(){window.scrollTo(0,0)},setTimeout((function(){w.style.transform=b<768?"scale(1)":"scale(1.5)",S.style.transform=b<768?"scale(1.3)":"scale(2)"}),1),setTimeout((function(){x.style.height=.55*w.height*1.5+"px",x.style.width=.95*w.width+"px",W=x.height}),1501),setTimeout((function(){L.style.top=W+"px",L.style.height=.15*w.width+"px",L.style.width=.71*w.width+"px"}),3010),setTimeout((function(){k.style.animation="pulse 1.5s infinite ease-in-out alternate",I.style.animation="pulse 1.5s infinite ease-in-out alternate"}),4e3),setTimeout((function(){C(),document.getElementById("preload").style.zIndex=-100,k.style.animation="none",I.style.animation="none",document.body.style.overflowY="visible"}),8e3),setTimeout((function(){f.style.display="none"}),9e3)},67784:(e,t,n)=>{"use strict";e.exports=n.p+"8cec5e853ac4904765e1.png"},63599:(e,t,n)=>{"use strict";e.exports=n.p+"fa8022b5808506f031f4.png"},46334:(e,t,n)=>{"use strict";e.exports=n.p+"503b829fcb9ebcf20cd8.png"},40721:(e,t,n)=>{"use strict";e.exports=n.p+"261bf219cf062a5e0d59.png"}}]);