(self.webpackChunklrnwebpack=self.webpackChunklrnwebpack||[]).push([[328],{42109:(a,e,t)=>{"use strict";t.d(e,{h:()=>v}),t(67623),t(13247);var n=t(12850),s=t(36754),c=t(60380),d=(t(70311),t(46334)),r=t(40721),i=t(63599),l=t(67784),o=t(89435),m=t(38529),p=t(15495);function v(a,e,t,v,f,u,g,b,E,h,L,H){var y=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"table",M=document.getElementById("langSel"),T=v,j=e[t-1],w=window.open(a+".html");setTimeout((function(){var e,t,v,f,u;if(w.document.getElementById("langSel").value=M.value,console.log(w.document.getElementById("langSel").value),w.document.body.appendChild(p.M),w.document.getElementById("jobheader").innerHTML=j[1],w.document.getElementById("hp").innerHTML='<img src="'+d+'" alt="hp" class="hpicon"> HP: <span class="spanattr" id="'+Math.ceil(.75*j[3])+'">'+Math.ceil(.75*j[3])+"</span>",w.document.getElementById("str").innerHTML='<img src="'+r+'" alt="str" class="stricon"> Strength: <span class="spanattr"  id="'+Math.ceil(1.5*j[4])+'">'+Math.ceil(1.5*j[4])+"</span>",w.document.getElementById("agi").innerHTML='<img src="'+i+'" alt="agi" class="agiicon"> Agility: <span class="spanattr"  id="'+Math.ceil(1.5*j[5])+'">'+Math.ceil(1.5*j[5])+"</span></span>",w.document.getElementById("int").innerHTML='<img src="'+l+'" alt="int" class="inticon"> Intelligence: <span class="spanattr"  id="'+Math.ceil(1.5*j[6])+'">'+Math.ceil(1.5*j[6])+"</span>","job"!==a){w.document.getElementById("race").innerHTML=j[15],w.document.getElementById("acq").innerHTML="Acquire: "+j[16],w.document.getElementById("hpEn").innerHTML='<img src="'+d+'" alt="hp" class="hpicon"> HP: <span class="spanattr" id="'+j[3]+'">'+j[3]+"</span>",w.document.getElementById("strEn").innerHTML='<img src="'+r+'" alt="str" class="stricon"> Strength: <span class="spanattr"  id="'+j[4]+'">'+j[4]+"</span>",w.document.getElementById("agiEn").innerHTML='<img src="'+i+'" alt="agi" class="agiicon"> Agility: <span class="spanattr"  id="'+j[5]+'">'+j[5]+"</span>",w.document.getElementById("intEn").innerHTML='<img src="'+l+'" alt="int" class="inticon"> Intelligence: <span class="spanattr"  id="'+j[6]+'">'+j[6]+"</span>";var b=w.document.getElementsByClassName("navbtns")[0];w.document.getElementsByClassName("navbtns")[1],document.getElementById("attrsAttrs"),document.getElementById("attrsAttrsEn"),"heroes"==y&&b.classList.add("active")}switch(e=n.Wu.filter((function(a){return"EnemyBeginner"==a[0]})),t=n.Wu.filter((function(a){return"EnemyEasy"==a[0]})),v=n.Wu.filter((function(a){return"EnemyMedium"==a[0]})),f=n.Wu.filter((function(a){return"EnemyHard"==a[0]})),u=n.Wu.filter((function(a){return"EnemyBoss"==a[0]})),j[2]){case e[0][1]:case e[0][2]:case e[0][3]:case"1":w.document.body.classList.add("job1star");break;case t[0][1]:case t[0][2]:case t[0][3]:case"2":w.document.body.classList.add("job2star");break;case v[0][1]:case v[0][2]:case v[0][3]:case"3":w.document.body.classList.add("job3star");break;case f[0][1]:case f[0][2]:case f[0][3]:case"4":w.document.body.classList.add("job4star");break;case u[0][1]:case u[0][2]:case u[0][3]:case"5":w.document.body.classList.add("job5star")}var h=/([A-Z])\w+/gi;if("char"==a);else if("job"==a){var L=w.document.getElementById("rarity");(0,m.d)(L,j[2],"heroes");var B=w.document.getElementById("passiveH"),I=w.document.getElementById("passiveDesc"),k=(w.document.getElementById("passiveTraits"),(0,o.C)(H,j[7]));k=0==k.length?"":k[0][1];var x=(0,o.g)(E,j[7]);x=0==x.length?"":x[0][1],B.innerHTML="Passive: "+(j[7]||""),I.innerHTML=x+"<br>("+k+")",h.test(k)?I.innerHTML=x+"<br>("+k+")":I.innerHTML=x,I.innerHTML=I.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g,""),I.innerHTML=I.innerHTML.replace(/, \)/g,")");var C=w.document.getElementById("switchH"),A=w.document.getElementById("switchDesc"),N=(0,o.g)(T,j[8]);N=0==N.length?"":N[0][1];var S=(0,o.C)(g,j[8]);S=0==S.length?"":S[0][1],C.innerHTML="Switch: "+j[8]||0,h.test(S)?A.innerHTML=N+"<br>("+S+")":A.innerHTML=N,A.innerHTML=A.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g,""),A.innerHTML=A.innerHTML.replace(/, \)/g,")");var W=(0,o.g)(T,j[9]);W=0==W.length?"":W[0];var D=(0,o.C)(g,j[9]);D=0==D.length?"":D[0][1];var J=(0,o.g)(T,j[10]);J=0==J.length?"":J[0];var O=(0,o.C)(g,j[10]);O=0==O.length?"":O[0][1];var P=(0,o.g)(T,j[11]);P=0==P.length?"":P[0];var q=(0,o.C)(g,j[11]);q=0==q.length?"":q[0][1];var R=(0,o.g)(T,j[12]);R=0==R.length?"":R[0];var Z=(0,o.C)(g,j[12]);Z=0==Z.length?"":Z[0][1];var U=w.document.getElementById("card1H");U.innerHTML=W[0]+" (x5)";var V=w.document.getElementById("card1desc");h.test(D)?V.innerHTML=W[1]+"<br>("+D+")":V.innerHTML=W[1],V.innerHTML=V.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g,""),V.innerHTML=V.innerHTML.replace(/, \)/g,")");var z=w.document.getElementById("card2H");z.innerHTML=J[0]+" (x3)";var F=w.document.getElementById("card2desc");h.test(O)?F.innerHTML=J[1]+"<br>("+O+")":F.innerHTML=J[1],F.innerHTML=F.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g,""),F.innerHTML=F.innerHTML.replace(/, \)/g,")");var G=w.document.getElementById("card3H");G.innerHTML=P[0]+" (x2)";var K=w.document.getElementById("card3desc");h.test(q)?K.innerHTML=P[1]+"<br>("+q+")":K.innerHTML=P[1],K.innerHTML=K.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g,""),K.innerHTML=K.innerHTML.replace(/, \)/g,")");var Q=w.document.getElementById("card4H");Q.innerHTML=R[0]+" (x1)";var X=w.document.getElementById("card4desc");h.test(Z)?X.innerHTML=R[1]+"<br>("+Z+")":X.innerHTML=R[1],X.innerHTML=X.innerHTML.replace(/, ,|, , ,|\(,|\(\)|<br><br>/g,""),X.innerHTML=X.innerHTML.replace(/, \)/g,")");for(var Y=[U,z,G,Q],$=0;$<Y.length;$++)Y[$].innerHTML.includes(void 0)&&Y[$].parentNode.remove();var _=w.document.getElementById("craftCraft");Object.entries(s.cA).map((function(a){a.shift(),(a=a[0])[9]=null==a[9]?"n/a":a[9];var e=a[0];switch(c.UV.filter((function(a){return a.id==e})),console.log(a),j[1]){case a[9]:_.innerHTML='<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">Jobless</span></div></div><span></span><div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">'+a[0]+'</span></div></div><span></span><div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">'+a[1]+'</span></div></div><span></span><div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">'+a[2]+'</span></div></div><span></span><div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">'+a[3]+'</span></div></div><span></span><div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">'+a[4]+'</span></div></div><span><i class="fas fa-arrow-right"></i></span><div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">'+a[5]+'</span></div></div><span><i class="fas fa-plus"></i></span><div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">'+a[6]+'</span></div></div><span><i class="fas fa-arrow-right"></i></span><div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">'+a[7]+'</span></div></div><span><i class="fas fa-plus"></i></span><div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">'+a[8]+"</span></div></div>";break;case a[7]:_.innerHTML='<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">Jobless</span></div></div><span><i class="fas fa-plus"></i></span><div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">'+a[0]+'</span></div></div><span><i class="fas fa-arrow-right"></i></span><div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">'+a[1]+'</span></div></div><span><i class="fas fa-plus"></i></span><div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">'+a[2]+'</span></div></div><span><i class="fas fa-arrow-right"></i></span><div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">'+a[3]+'</span></div></div><span><i class="fas fa-plus"></i></span><div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">'+a[4]+'</span></div></div><span><i class="fas fa-arrow-right"></i></span><div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">'+a[5]+'</span></div></div><span><i class="fas fa-plus"></i></span><div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">'+a[6]+"</span></div></div>";break;case a[5]:_.innerHTML='<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">Jobless</span></div></div><span><i class="fas fa-plus"></i></span><div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">'+a[0]+'</span></div></div><span><i class="fas fa-arrow-right"></i></span><div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">'+a[1]+'</span></div></div><span><i class="fas fa-plus"></i></span><div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">'+a[2]+'</span></div></div><span><i class="fas fa-arrow-right"></i></span><div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">'+a[3]+'</span></div></div><span><i class="fas fa-plus"></i></span><div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">'+a[4]+"</span></div></div>";break;case a[3]:_.innerHTML='<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">Jobless</span></div></div><span><i class="fas fa-plus"></i></span><div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">'+a[0]+'</span></div></div><span><i class="fas fa-arrow-right"></i></span><div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">'+a[1]+'</span></div></div><span><i class="fas fa-plus"></i></span><div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">'+a[2]+"</span></div></div>";break;case a[1]:_.innerHTML='<div class="col-md col-6 craft craftjob"><div><span id="craftjob"></span><span class="craft">Jobless</span></div></div><span><i class="fas fa-plus"></i></span><div class="col-md col-6 craft craftmat"><div><span id="craftmat"></span><span class="craft">'+a[0]+"</span></div></div>"}}))}}),1120)}},22823:(a,e,t)=>{"use strict";function n(a,e){e.onclick=function(){"none"==a.style.display?a.style.display="block":a.style.display="none"}}t.d(e,{Z:()=>n})},67623:(a,e,t)=>{"use strict";t(71891);var n=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth,s=document.createElement("section");s.classList.add("section","shadow"),s.id="jobmainsect";var c=document.createElement("div");c.id="jobmaindiv",c.className="row";var d=document.createElement("h1");d.classList.add("col-12"),d.id="jobheader";var r=document.createElement("span");r.id="top",c.append(r,d);var i=document.createElement("div");i.id="basicinfo",i.className="row";var l=document.createElement("div"),o=document.createElement("div");l.classList.add("col-12","col-sm-2"),o.id="jobimg",o.classList.add("d-block","mx-auto"),l.appendChild(o),document.createElement("div").classList.add("col-md-10","col-12","row","my-auto");var m=document.createElement("div");m.id="rarLvlOrb",m.classList.add("col-md-6","col-12");var p=document.createElement("div");p.id="rarity",p.classList.add("jobattr");var v=document.createElement("div");v.id="level",v.style.marginTop="10px";var f=document.createElement("h4"),u=document.createElement("label");u.innerHTML="Level: ";var g=document.createElement("input");g.id="levelSel",g.type="number",g.min=1,g.step=10,g.value=10,g.style.width="50px",g.classList.add("rounded"),f.append(u),v.append(f,g);var b=document.createElement("div");b.id="crystDiv";var E=document.createElement("h4"),h=document.createElement("label");h.for="jobmCrystal",h.innerHTML="Jobmania Orb: ",h.style.marginRight="4px",E.appendChild(h);var L=document.createElement("select");L.id="jobmCrystal",L.name="jobmCrystal",L.value=0,L.style.width="50px",L.classList.add("rounded"),L.style.textAlign="right";var H=[0,1,2,3,4,5].map((function(a){return'<option value="'.concat(a,'">').concat(a,"</option>")}));L.innerHTML=H,b.append(E,L);var y=document.createElement("div");y.classList.add("col-12"),y.id="lvlbtns";var M=document.createElement("button");M.classList.add("rounded"),M.innerHTML="Apply";var T=document.createElement("button");T.classList.add("rounded"),T.innerHTML="Reset",y.append(M,T),m.append(p,v,b,y);var j=document.createElement("div");j.id="attrsAttrs",j.classList.add("col-md-5","col-12");var w=document.createElement("h4");w.id="hp";var B=document.createElement("h4");B.id="str";var I=document.createElement("h4");I.id="agi";var k=document.createElement("h4");k.id="int",[w,B,I,k].map((function(a){a.classList.add("jobattr"),j.appendChild(a)}));var x=document.createElement("div");x.classList.add("col-md-8","col-12","row"),x.id="rarAndAttrs",x.append(m,j);var C=l.cloneNode(!0);C.id="jobimg2",n>768?i.append(l,x,C):i.append(l,x);var A=document.createElement("div");A.classList.add("row"),A.id="passiveAndSwitch";var N=document.createElement("div");N.id="passiveSkill",N.classList.add("col-sm","col-12");var S=document.createElement("h4");S.id="passiveH";var W=document.createElement("h5");W.id="passiveDesc",N.append(S,W);var D=document.createElement("div");D.id="switchSkill",D.classList.add("col-sm","col-12");var J=document.createElement("h4");J.id="switchH";var O=document.createElement("div");O.id="switchimg";var P=document.createElement("h5");P.id="switchDesc",D.append(J,P,O),A.append(N,D);var q=document.createElement("div");q.id="deckdiv",q.style.margin="10px";var R=document.createElement("div");R.id="deck",R.classList.add("row"),R.style.margin="5px";var Z=document.createElement("h3");Z.id="deckH",Z.className="col-12",Z.style.textAlign="center",Z.style.color="white",Z.style.margin="7px 0",Z.innerHTML="Deck";var U=document.createElement("div");U.className="col-md",U.id="card1",U.style.margin="5px";var V=document.createElement("h5");V.id="card1H",V.style.textAlign="center";var z=document.createElement("div");z.id="card1img";var F=document.createElement("h6");F.id="card1desc",U.append(V,z,F);var G=document.createElement("div");G.className="col-md",G.id="card2",G.style.margin="5px";var K=document.createElement("h5");K.id="card2H",K.style.textAlign="center";var Q=document.createElement("div");Q.id="card2img";var X=document.createElement("h6");X.id="card2desc",G.append(K,Q,X);var Y=document.createElement("div");Y.className="col-md",Y.id="card3",Y.style.margin="5px";var $=document.createElement("h5");$.id="card3H",$.style.textAlign="center";var _=document.createElement("div");_.id="card3img";var aa=document.createElement("h6");aa.id="card3desc",Y.append($,_,aa);var ea=document.createElement("div");ea.className="col-md",ea.id="card4",ea.style.margin="5px";var ta=document.createElement("h5");ta.id="card4H",ta.style.textAlign="center";var na=document.createElement("div");na.id="card4img";var sa=document.createElement("h6");sa.id="card4desc",ea.append(ta,na,sa),R.append(Z,U,G,Y,ea);var ca=document.createElement("div");ca.id="craftdiv";var da=document.createElement("h4");da.innerHTML="Craft";var ra=document.createElement("div");ra.id="craftCraft",ra.className="row",ca.append(da,ra),q.append(R),s.append(c,i,A,q,ca)}}]);