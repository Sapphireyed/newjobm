(self.webpackChunklrnwebpack=self.webpackChunklrnwebpack||[]).push([[408],{80759:(e,t,a)=>{"use strict";a(41343),a(88426),a(40883),a(61665),a(201),a(45827),a(60380),a(77115),a(19755),document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth},13247:(e,t,a)=>{"use strict";var n=document.createElement("section");n.classList.add("section","shadow","subsection"),n.id="jobmainsect";var d=document.createElement("div");d.id="jobmaindiv",d.className="row";var r=document.createElement("h1");r.classList.add("col-12"),r.id="jobheader";var c=document.createElement("span");c.id="top";var i=document.createElement("button");i.classList.add("navbtns","rounded"),i.innerHTML="Hero";var o=document.createElement("button","rounded");o.classList.add("navbtns"),o.innerHTML="Enemy",d.append(c,r,i,o);var s=document.createElement("div");s.id="basicinfo",s.className="row";var l=document.createElement("div"),m=document.createElement("div");l.classList.add("col-12","col-sm-2"),m.id="jobimg",m.classList.add("d-block","mx-auto"),l.appendChild(m),document.createElement("div").classList.add("col-md-10","col-12","row","my-auto");var u=document.createElement("div");u.id="rarLvlOrb",u.classList.add("col-md-6","col-12");var p=document.createElement("div");p.id="racediv",p.style.margin="6px 0";var v=document.createElement("h4");v.id="race",p.appendChild(v);var h=document.createElement("div");h.id="rarity",h.style.margin="6px 0",h.classList.add("jobattr");var E=document.createElement("div");E.id="rarityEn",E.classList.add("jobattr");var f=document.createElement("div");f.classList.add("col-12"),f.style.margin="auto auto 6px auto";var L=document.createElement("h4");L.id="acq",f.appendChild(L);var b=document.createElement("br"),g=document.createElement("div");g.id="level",g.style.marginTop="10px";var y=document.createElement("h4"),w=document.createElement("label");w.innerHTML="Dungeon Level: ";var H=document.createElement("input");H.id="levelSel",H.type="number",H.min=1,H.step=10,H.value=10,H.style.width="60px",H.classList.add("rounded"),y.append(w),g.append(y,H);var T=document.createElement("div");T.id="herolvl",T.style.marginTop="10px";var x=document.createElement("h4"),M=document.createElement("label");M.innerHTML="Hero Level: ";var A=document.createElement("input");A.id="heroSel",A.type="number",A.min=1,A.step=5,A.value=1,A.style.width="50px",A.classList.add("rounded"),x.append(M),T.append(x,A);var S=document.createElement("div");S.classList.add("col-12"),S.id="lvlbtns";var C=document.createElement("button");C.classList.add("rounded"),C.innerHTML="Apply";var j=document.createElement("button");j.classList.add("rounded"),j.innerHTML="Reset",S.append(C,j),u.append(f,E,h,p,T,g,S,b);var D=document.createElement("div");D.id="attrsAttrs",D.classList.add("col-md-5","col-12");var P=document.createElement("h4");P.id="hp";var N=document.createElement("h4");N.id="str";var k=document.createElement("h4");k.id="agi";var R=document.createElement("h4");R.id="int",[P,N,k,R].map((function(e){e.classList.add("jobattr"),D.appendChild(e)}));var B=document.createElement("div");B.id="attrsAttrsEn",B.classList.add("col-md-5","col-12");var I=document.createElement("h4");I.id="hpEn";var W=document.createElement("h4");W.id="strEn";var O=document.createElement("h4");O.id="agiEn";var F=document.createElement("h4");F.id="intEn",[I,W,O,F].map((function(e){e.classList.add("jobattr"),B.appendChild(e)}));var z=document.createElement("div");z.classList.add("col-md-8","col-12","row"),z.id="rarAndAttrs",z.append(u,D,B);var G=l.cloneNode(!0);G.id="jobimg2",s.append(l,z,G);var V=document.createElement("div");V.classList.add("row","subsection"),V.id="passiveAndSwitch";var J=document.createElement("div");J.classList.add("row","subsection"),J.id="passiveAndSwitchBis";var q=document.createElement("div");q.classList.add("row","subsection"),q.id="passiveAndSwitchEn";var K=document.createElement("div");K.id="threshdiv",K.classList.add("row","subsection");var Q=document.createElement("h4");Q.id="threshH",Q.innerHTML="Threshold Abilities",Q.classList.add("col-12","rounded-lg","shadow");var U=document.createElement("div");U.classList.add("col-12","col-sm-4"),U.id="thresh1";var X=document.createElement("h5");X.innerHTML="Act first",X.id="oneH",U.append(X);var Y=document.createElement("div");Y.classList.add("col-12","col-sm-4"),Y.id="thresh2";var Z=document.createElement("h5");Z.innerHTML="< 50%",Y.append(Z);var $=document.createElement("div");$.classList.add("col-12","col-sm-4"),$.id="thresh3";var _=document.createElement("h5");_.innerHTML="< 30%",$.append(_),K.append(Q,U,Y,$);var ee=document.createElement("div");ee.id="scdiv",ee.classList.add("col-md-6","col-12","shadow");var te=document.createElement("h4");te.id="scH",te.innerHTML="Special Cases",te.classList.add("col-12","rounded-lg");var ae=document.createElement("div");ae.id="scsub",ee.append(te,ae);var ne=document.createElement("div");ne.classList.add("col-md-6","col-12","shadow"),ne.id="dropdiv";var de=document.createElement("h4");de.classList.add("col-12","rounded"),de.innerHTML="Drops ";var re=document.createElement("div");re.classList.add("drop");var ce=document.createElement("div");ce.classList.add("drop"),ne.append(de,re,ce);var ie=document.createElement("div");ie.classList.add("row","subsection"),ie.append(ee,ne);var oe=document.createElement("div");oe.id="chapt",oe.classList.add("row","subsection","shadow");var se=document.createElement("div");se.classList.add("row","col-12","rounded-lg","shadow"),se.id="chH";var le=document.createElement("h5");le.innerHTML="#",le.classList.add("col");var me=document.createElement("h5");me.innerHTML="Chapter's Name",me.classList.add("col");var ue=document.createElement("h5");ue.innerHTML="Appears as",ue.classList.add("col"),se.append(le,me,ue,le.cloneNode(!0)),oe.append(se),n.append(d,s,V,J,q,K,ie,oe)},40343:(e,t,a)=>{"use strict";a(25879);var n=document.createElement("table");n.id="jobsTable",n.classList.add("section","tablesorter","myTable","w-100","shadow");var d=document.createElement("thead");d.classList.add("thead","shadow-lg","w-100"),d.id="thead",d.innerHTML='<tr id="jobsThead"><th id="#" data-sort="number">#<i class="fas fa-sort float-right"></i></th><th id="Icon">Icon<i class="fas fa-sort float-right"></i></th><th id="Name">Name<i class="fas fa-sort float-right"></i></th><th id="Rarity">Rarity<i class="fas fa-sort float-right"></i></th><th id="Passive">Passive<i class="fas fa-sort float-right"></i></th><th id="Switch">Switch<i class="fas fa-sort float-right"></i></th><th id="Deck">Deck<i class="fas fa-sort float-right"></i></th><th id="HP" data-sort="number">HP<i class="fas fa-sort float-right"></i></th><th id="Str" data-sort="number">STR<i class="fas fa-sort float-right"></i></th><th id="Agi" data-sort="number">AGI<i class="fas fa-sort float-right"></i></th><th id="Int" data-sort="number">INT<i class="fas fa-sort float-right"></i></th></tr>';var r=document.createElement("tbody");r.id="jobsBody",n.append(d,r)},51766:(e,t,a)=>{"use strict";var n=a(87357),d=a(64887),r=(a(25879),a(4811),a(53869),document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth,document.createElement("br"),document.createElement("div"));r.classList.add("section","shadow","row","filtersmain"),r.id="jobs",r.style.backgroundSize="cover",r.style.backgroundPosition="center 20%";var c=document.createElement("h1");c.classList.add("col-12"),c.innerHTML="JOBS",c.style.textShadow="2px 2px grey",c.id="top";var i=document.createElement("div");i.id="jobsfilter",i.classList.add("col-12","col-lg-7","row","filtersSub");var o=document.createElement("div");o.classList.add("col-6");var s=document.createElement("label");s.for="rarity",s.innerHTML="Rarity: ";var l=document.createElement("select");l.id="rarity",l.name="rarity",l.classList.add("filter","rounded");var m=["All",1,2,3,4,5].map((function(e){return'<option value="'.concat(e,'">').concat(e,"</option>")}));l.innerHTML=m,o.append(s,l);var u=document.createElement("div");u.classList.add("col-6");var p=document.createElement("label");p.for="element",p.innerHTML="Element:";var v=document.createElement("select");v.id="element",v.name="element",v.classList.add("filter","rounded");var h=["All","Fire","Water","Earth","Wind","Thunder","Light","Dark"].map((function(e){var t=e;return'<option id="'.concat(t,'" value="').concat(t,'">').concat(e,"</option>")}));v.innerHTML=h,u.append(p,v);var E=document.createElement("div");E.classList.add("col-6");var f=document.createElement("label");f.for="attrSel",f.innerHTML="Attribute: ";var L=document.createElement("select");L.id="attrSel",L.name="attrSel",L.classList.add("filter","rounded");var b=["All","MaxHP","Strength","Agility","Intelligence"].map((function(e){return'<option value="'.concat(e,'">').concat(e,"</option>")}));L.innerHTML=b,E.append(f,L);var g=document.createElement("div");g.classList.add("col-6");var y=document.createElement("label");y.for="type",y.innerHTML="Type: ";var w=document.createElement("select");w.id="type",w.name="type",w.value="All",w.classList.add("filter","rounded"),w.innerHTML='<option id="All" value="All">All</option><option id="Damage" value="Damage">Damage</option><option id="Heal" value="Heal">Heal</option><option id="Buff" value="Buff">Buff</option><option id="InstantBoost" value="InstantBoost">Action Buff</option><option id="Debuff" value="Debuff">Debuff</option><option id="Vulnerable" value="Vulnerable">Vulnerable</option><option id="Protect" value="Protect">Protect</option><option id="RemoveDebiff" value="Remove Debuff">Remove Debuff</option><option id="Negative" value="Negative">Negative</option><option id="Other" value="Other">Other</option>',g.append(y,w);var H=document.createElement("div");H.classList.add("col-6");var T=document.createElement("label");T.for="apply",T.innerHTML="Apply: ";var x=document.createElement("select");x.id="apply",x.name="apply",x.value="All",x.classList.add("filter","rounded");var M=["PracticePerfect","Exhaust","LifeSteal","LastResort","TurnCharge","Combo Blend","Overloaded","FocusEnergy","NegativePower","Curse","Scheduled","AutoFire","Gamble","Creature","Humanoid","Matter","Spirit","Strength Synergy","Agility Synergy","MaxHP Synergy","Intelligence Synergy","Fire","Water","Earth","Wind","Thunder","Dark","Light"].sort().map((function(e){var t=e;return'<option id="'.concat(t,'" value="').concat(t,'">').concat(e,"</option>")}));M.unshift('<option value="All">All</option>'),x.innerHTML=M,H.append(T,x);var A=document.createElement("div");A.classList.add("col-6");var S=document.createElement("label");S.for="whenSel",S.innerHTML="Passive: ";var C=document.createElement("select");C.id="whenSel",C.name="whenSel",C.classList.add("filter","rounded");var j=["Turn End","After Action","Combat Start","Master","Stat Boost","Reflect","Immune","Hp Threshold","Heal","Dmg Mitigate"].sort().map((function(e){var t=e;return'<option id="'.concat(t.replace(" ",""),'" value="').concat(t,'">').concat(e,"</option>")}));j.unshift('<option value="All">All</option>'),C.innerHTML=j,A.append(S,C);var D=document.createElement("div");D.classList.add("col-12");var P=document.createElement("label");P.for="searchin",P.innerHTML="Search in: ";var N=document.createElement("select");N.id="searchin",N.name="searchin",N.classList.add("rounded"),N.innerHTML='<option value="both">Both</option><option value="passive">Passive</option><option value="switch">Switch</option>',D.append(P,N);var k=document.createElement("div");k.classList.add("col-6","sol-sm-3");var R=document.createElement("button");R.id="jobsclear",R.innerHTML="Reset",R.classList.add("rounded"),R.style.color="white",R.style.fontSize="18px",R.style.backgroundColor="#3a5863",k.appendChild(R);var B=document.createElement("div");B.classList.add("col-6","sol-sm-3");var I=document.createElement("button");I.id="start",I.innerHTML="Search",I.classList.add("rounded"),I.style.color="white",I.style.fontSize="18px",I.style.backgroundColor="#3a5863",B.appendChild(I);var W=document.createElement("div");W.id="navFiters",W.classList.add("col-12","row"),W.append(D,k,B),i.append(o,u,E,g,H,A,W);var O=document.createElement("div");O.classList.add("col-12","col-lg-5","row"),O.id="otherfilters";var F=document.createElement("div");F.classList.add("col-6","col-lg-12");var z=document.createElement("label");z.for="chooselvl",z.innerHTML="Change lvl",z.style.marginRight="4px";var G=document.createElement("input");G.id="chooselvl",G.name="chooseInput",G.style.width="50px",G.value=10,G.type="number",G.min=1,G.step=10,G.classList.add("rounded"),F.append(z,G);var V=document.createElement("div");V.classList.add("col-6","col-lg-12"),V.style.textAlign="right";var J=document.createElement("label");J.for="jobmCrystal",J.innerHTML="Jobmania Crystal",J.style.textAlign="right",J.style.marginRight="4px";var q=document.createElement("select");q.id="jobmCrystal",q.name="jobmCrystal",q.value=0,q.style.width="50px",q.classList.add("rounded"),q.style.textAlign="right";var K=[0,1,2,3,4,5].map((function(e){return'<option value="'.concat(e,'">').concat(e,"</option>")}));q.innerHTML=K,V.append(J,q);var Q=document.createElement("div");Q.classList.add("col-12"),Q.id="lvlbtns";var U=document.createElement("button");U.classList.add("rounded"),U.innerHTML="Apply";var X=document.createElement("button");X.classList.add("rounded"),X.innerHTML="Reset",Q.append(U,X);var Y=document.createElement("div");Y.classList.add("col-12"),Y.style.textAlign="right";var Z=document.createElement("label");Z.for="search",Z.innerHTML="Search: ";var $=document.createElement("input");$.type="text",$.id="search",$.name="search",$.classList.add("rounded"),Y.append(Z,$);var _=document.createElement("div");_.id="pagesdiv",_.classList.add("col-12"),_.innerHTML='\x3c!-- pager --\x3e<div></div><div id="pages" class="float-right"><button class="pages rounded" id="first"><img alt="first" src="'+d+'" width="44" height="auto"></button><button class="pages rounded" id="prev"><img alt="next" src="'+n+'" width="44" height="auto"></button> <select class="pagesize pages rounded" id="numOfPages"><option selected="selected" value="10">10</option><option value="20">20</option><option value="50">50</option> <option value="all">All</option></select> <button class="pages rounded" id="next"><img alt="next" src="'+n+'" width="44" height="auto"></button><button class="pages rounded" id="last"><img alt="last" src="'+d+'" width="44" height="auto"></button></div>',O.append(F,V,Q,Y,_),r.append(c,i,O);var ee=document.createElement("div"),te=document.createElement("img"),ae=document.createElement("div");ae.classList.add("row","col-12");var ne=document.createElement("div");ne.innerHTML=" ^ <br> ^ ",ne.classList.add("col");var de=ne.cloneNode(!0);ae.append(ne,de);var re=ae.cloneNode(!0);ae.id="upAndDown",re.id="upAndDown2",de.id="up2",ne.id="up1",document.createElement("div").style.width="80%",ee.append(te)},97678:(e,t,a)=>{"use strict";a(40343),a(42109),a(36754),a(16243),a(60380),a(51766),a(41343),a(80759),a(39346),a.g.fetch=a(83300),a(62538),a(19755)},41343:(e,t,a)=>{e.exports=a.p+"e6413bc0e60b9c49c41378d73e77c5ff.jpg"},88426:(e,t,a)=>{"use strict";e.exports=a.p+"15b22ce189d171fababd.png"},26535:(e,t,a)=>{"use strict";e.exports=a.p+"ab25a53533fa074274e1.png"},75657:(e,t,a)=>{"use strict";e.exports=a.p+"bf99e92bf3dcd527df8f.png"},74069:(e,t,a)=>{"use strict";e.exports=a.p+"c4517d24cb0e60530c58.png"},52798:(e,t,a)=>{"use strict";e.exports=a.p+"b2e23163716139708c80.png"},37947:(e,t,a)=>{"use strict";e.exports=a.p+"b2145416ec62da90cdab.png"},16243:(e,t,a)=>{"use strict";e.exports=a.p+"6af41e3076b9c2f39079.png"},40883:(e,t,a)=>{"use strict";e.exports=a.p+"48b1c8c4f21a5af4dc43.png"},61665:(e,t,a)=>{"use strict";e.exports=a.p+"a2fd8adc1a973ef600f0.png"},45827:(e,t,a)=>{"use strict";e.exports=a.p+"595781a727bc1cb02f2f.PNG"},25879:(e,t,a)=>{"use strict";e.exports=a.p+"c0f7fe91158f86012dd7.png"},53869:(e,t,a)=>{"use strict";e.exports=a.p+"6ae7fa726c26be599c25.png"},71891:(e,t,a)=>{"use strict";e.exports=a.p+"3b684a17730fe63a203d.png"},64887:(e,t,a)=>{"use strict";e.exports=a.p+"6c7456f00f740141a211.png"},87357:(e,t,a)=>{"use strict";e.exports=a.p+"5164f2c0dbccf00e7ae4.png"},201:(e,t,a)=>{"use strict";e.exports=a.p+"a5f60c44efe2aa21f9a4.PNG"}}]);