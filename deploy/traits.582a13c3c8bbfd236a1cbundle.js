(()=>{"use strict";var e={36754:(e,t,a)=>{a.d(t,{iR:()=>C,jq:()=>H,ZH:()=>O,JK:()=>P,aG:()=>A,mk:()=>Q,N$:()=>I});var n=a(77115),r=a(97209),i=a(49128),s=a(56245),c=a(95520),l=a(60543),o=a(33066),d=a(13763),p=a(4586),u=a(93644),m=a(73036),g=a(93156),h=(a(52635),a(28285)),b=a(52798),f=a(26535),v=a(75657),y=a(74069),w=a(44500),E=a(37947),L=a(89290),x=a(54028),k=a(55141),M=a(67784),T=a(13496),j=a(12850);a.g.fetch=a(83300);var B=a(62538),C=[],H=[],O=[],P=[],Q=[],I=[];var A={traitsFn:function(){return B.raw("1_emNAbXp89s3jhjl5Ko-7pHJIcCtjL6PGEfVP1th_6g",12).then((function(e){return e.data})).then((function(e){switch(e.shift(),document.getElementById("langSel").value){case"English":e.map((function(e,t){var a=j.Ei.filter((function(t){return t[0]==e[0]+"Descr"}));null!=a[0]&&(e[1]=a[0][1]);var r=j.Ei.filter((function(t){return t[0]==e[3]+"Descr"}));null!=r[0]&&(e[4]=r[0][1]),t<=1&&(e[4]=e[4].replace("{0}","Protect").replace("{1}","10%")),2!=t&&6!=t||(e[4]=e[4].replace("{0}","Exhaust")),3==t&&(e[4]=e[4]=e[4].replace("{0}","Protect").replace("{1}","20%")),5==t&&(e[4]=e[4]=e[4].replace("{0}","1").replace("{1}","Protect")),9==t&&(e[4]=e[4]=e[4].split(".")[0]),t<=3&&(e[1]=e[1].replace("{0}","10%")),4!=t&&9!=t||(e[1]=e[1].replace("{0}","5%")),t>4&&t<=8&&(e[1]=e[1].replace("{0}","10%")),11==t&&(e[1]=e[1].replace("{0}","20%").replace("{1}","1")),12==t&&(e[1]=e[1].replace("{0}","200")),13==t&&(e[1]=e[1].replace("{0}","100").replace("{1}","Protect")),I=Object.entries(n.wQ).map((function(e){return[0==j.Ei.filter((function(t){return t[0]+".PNG"==e[0]})).length?j.Ei.filter((function(t){return t[0]+".png"==e[0]}))[0][1]+".PNG":j.Ei.filter((function(t){return t[0]+".PNG"==e[0]}))[0][1]+".PNG",e[1]]}));var i=j.Ei.filter((function(t){return t[0]==e[0].replace(/ /g,"")}));null!=i[0]&&(e[0]=i[0][1]);var s=j.Ei.filter((function(t){return t[0]==e[3]}));null!=s[0]&&(e[3]=s[0][1])}))}var t;t=0,e.map((function(e){for(var a=0;a<e.length;a++)20==a||(a!==t&&void 0!==e[a]?(e[a]=e[a].replace(/\bMaxHp\b|Max HP/gi,'<span class=\'maxhp\'><img class="icon" src="'+L+'" alt="hp"/> MaxHP</span>'),e[a]=e[a].replace(/\bstr\b|\bstrength\b/gi,'<span class=\'strength\'><img class="icon" src="'+x+'" alt="str"/> Strength</span>'),e[a]=e[a].replace(/\bagi\b|\bagility\b/gi,'<span class=\'agility\'><img class="icon" src="'+k+'" alt="agi"/> Agility</span>'),e[a]=e[a].replace(/\bint\b|\bintelligence\b/gi,'<span class=\'intelligence\'><img class="icon" src="'+M+'" alt="int"/> Intelligence</span>'),e[a]=e[a].replace(/\bprotect\b/gi,'<span class=\'protect\'><img class="icon" src="'+T+'" alt="protect"/> Protect</span>'),e[a]=e[a].replace(/\bwater\b/gi,'<span class=\'water\'><img class="icon" src="'+i+'" alt="water"/> '+j.e4+"</span>"),e[a]=e[a].replace(/\bfire\b/gi,'<span class=\'fire\'><img class="icon" src="'+r+'" alt="fire"/> '+j.ur+"</span>"),e[a]=e[a].replace(/\bearth\b/gi,'<span class=\'earth\'><img class="icon" src="'+s+'" alt="earth"/> '+j.tE+"</span>"),e[a]=e[a].replace(/\bwind\b/gi,'<span class=\'wind\'><img class="icon" src="'+c+'" alt="wind"/> '+j.QZ+"</span>"),e[a]=e[a].replace(/\bthunder\b/gi,'<span class=\'thunder\'><img class="icon" src="'+l+'" alt="thunder"/>'+j.E+"</span>"),e[a]=e[a].replace(/\blight\b/gi,'<span class=\'light\'><img class="icon" src="'+o+'" alt="light"/> '+j.mY+"</span>"),e[a]=e[a].replace(/\bdark\b/gi,'<span class=\'dark\'><img class="icon" src="'+d+'" alt="dark"/> '+j.pH+"</span>"),e[a]=e[a].replace(/\bbleed\b/gi,'<span class=\'bleed\'><img class="icon" src="'+f+'" alt="bleed"/>Bleed</span>'),e[a]=e[a].replace(/\binsane\b/gi,'<span class=\'insane\'><img class="icon" src="'+y+'" alt="insane"/>Insane</span>'),e[a]=e[a].replace(/\bdepress\b/gi,'<span class=\'depress\'><img class="icon" src="'+u+'" alt="depress"/>Depress</span>'),e[a]=e[a].replace(/\bburn\b/gi,'<span class=\'burn\'><img class="icon" src="'+m+'" alt="burn"/>Burn</span>'),e[a]=e[a].replace(/\bchill\b/gi,'<span class=\'chill\'><img class="icon" src="'+g+'" alt="chill"/>Chill</span>'),e[a]=e[a].replace(/\binjury\b/gi,'<span class=\'injury\'><img class="icon" src="'+v+'" alt="injury"/>Injury</span>'),e[a]=e[a].replace(/\bparalysis\b/gi,'<span class=\'paralysis\'><img class="icon" src="'+w+'" alt="paralysis"/>Paralysis</span>'),e[a]=e[a].replace(/\brestrain\b/gi,'<span class=\'restrain\'><img class="icon" src="'+b+'" alt="restrain"/>Restrain</span>'),e[a]=e[a].replace(/\bseed\b/gi,'<span class=\'seed\'><img class="icon" src="'+h+'" alt="seed"/>Seed</span>'),e[a]=e[a].replace(/\bblind\b/gi,'<span class=\'blind\'><img class="icon" src="'+p+'" alt="blind"/>Blind</span>'),e[a]=e[a].replace(/\bvenom\b/gi,'<span class=\'venom\'><img class="icon" src="'+E+'" alt="venom"/>Venom</span>')):e[a]=a==t?e[t]:"")})),Q=e}))}}},91426:(e,t,a)=>{a(34404);var n=a(93379),r=a.n(n),i=a(86204);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var s=a(47413),c=a(87357),l=a(64887),o=(a(25879),a(41343),document.createElement("div"));o.style.backgroundColor="#5b707a",o.classList.add("section","shadow","row","filtersmain"),o.id="passives";var d=document.createElement("h1");d.classList.add("col-12","shadow"),d.innerHTML="Traits",d.style.textShadow="2px 1px #728bbc";var p=document.createElement("div");p.id="glossfilter",p.classList.add("col-12","row","filtersSub");var u=document.createElement("div");u.classList.add("col-12","row"),u.id="otherfilters";var m=document.createElement("div");m.classList.add("col-6");var g=document.createElement("label");g.for="search",g.innerHTML="Search: ";var h=document.createElement("input");h.type="text",h.id="search",h.name="search",h.classList.add("rounded"),m.append(g,h);var b=document.createElement("div");b.id="pagesdiv",b.classList.add("col-6"),b.innerHTML='\x3c!-- pager --\x3e<div></div><div id="pages" class="float-right"><button class="pages rounded" id="first"><img alt="first" src="'+l+'" width="44" height="auto"></button><button class="pages rounded" id="prev"><img alt="next" src="'+c+'" width="44" height="auto"></button> <select class="pagesize pages rounded" id="numOfPages"><option selected="selected" value="10">10</option><option value="20">20</option><option value="50">50</option> <option value="all">All</option></select> <button class="pages rounded" id="next"><img alt="next" src="'+c+'" width="44" height="auto"></button><button class="pages rounded" id="last"><img alt="last" src="'+l+'" width="44" height="auto"></button></div>',u.append(m);var f=document.createElement("div");f.id="tabs",f.className="col-6";var v=document.createElement("button");v.innerHTML="Jobs Traits",v.id="glossButton";var y=document.createElement("button");y.innerHTML="Abilities Traits",y.id="applyButton",f.append(v,y),o.append(d,m,f);var w=document.createElement("table");w.id="glossTable",w.classList.add("section","tablesorter","myTable","w-100","shadow");var E=document.createElement("thead");E.classList.add("thead","shadow-lg","w-100"),E.id="thead",E.innerHTML='<tr id="abilsThead"><th data-sort="number">#<i class="fas fa-sort float-right"></i></th><th>Icon<i class="fas fa-sort float-right"></i></th><th>Name<i class="fas fa-sort float-right"></i></th><th>Description<i class="fas fa-sort float-right"></i></th></tr>';var L=document.createElement("tbody");L.id="abilsBody",w.append(E,L);var x=document.createElement("table");x.id="glossTable",x.classList.add("section","tablesorter","myTable","w-100","shadow");var k=document.createElement("thead");k.classList.add("thead","shadow-lg","w-100"),k.id="thead",k.innerHTML='<tr id="abilsThead">';var M=document.createElement("table");M.id="applyTable",M.classList.add("section","tablesorter","myTable","w-100","shadow");var T=document.createElement("thead");T.classList.add("thead","shadow-lg","w-100"),T.id="applythead",T.innerHTML='<tr id="applyTh"><th data-sort="number">#<i class="fas fa-sort float-right"></i></th><th>Icon<i class="fas fa-sort float-right"></i></th><th>Name<i class="fas fa-sort float-right"></i></th><th>Description<i class="fas fa-sort float-right"></i></th></tr>';var j=document.createElement("tbody");j.id="applyBody",M.append(j);var B=document.createElement("tbody");B.id="abilsBody",x.append(k,B);var C=a(77115),H=a(14847),O=a(3810),P=a(32742),Q=document.createElement("section");Q.id="glossarymain",Q.classList.add("row"),o.style.color="white",o.classList.add("col-sm-9","col-12"),o.append(w,M),Q.classList.add("section"),w.classList.add("w-100");var I=document.createElement("div");I.classList.add("col-md-2","col-12"),I.id="randimg";var A=document.createElement("img");A.classList.add("traitimg");var S=document.createElement("img");S.classList.add("traitimg");var N=document.createElement("img");N.classList.add("traitimg");var Z=Math.floor(Math.random()*Object.entries(C.wQ).length),q=Math.floor(Math.random()*Object.entries(C.wQ).length),G=Math.floor(Math.random()*Object.entries(C.wQ).length);A.src=Object.entries(C.wQ)[Z][1],S.src=Object.entries(C.wQ)[q][1],N.src=Object.entries(C.wQ)[G][1];var $=document.createElement("div");$.classList.add("col-12","navbtns"),$.id="navbtns";var D=document.createElement("img"),R=document.createElement("img"),_=document.createElement("img");D.src=H,R.src=O,_.src=P,$.append(_,R,D),I.append($,A,S,N);var F=I.cloneNode(!0);F.classList.add("d-md-none");var J=document.createElement("div");J.classList.add("col-1","d-none","d-md-block"),Q.append(F,o,J,I);var z=a(36754),K=a(60380),V=a(25819),X=(a(80759),a(39346),a(19755));console.log(C.wQ);var Y=a(94370),U=a(15495),W=a(22823),ee=a(12850);a(19755),document.body.append(U.M,(0,s.Z)(),Q),(0,V.o)(),document.body.style.backgroundImage='url("'+Y+'")',document.body.style.backgroundSize="cover",document.body.style.backgroundAttachment="fixed",document.body.style.backgroundPosition="center 30%",setTimeout((function(){var e=document.getElementById("navMain");window.onscroll=function(){(0,V.h)(e)}}),500),ee.Zs.traits().then((function(e){z.aG.traitsFn().then((function(e){(0,K.HL)(),function(){var e=z.mk;document.getElementById("abilsBody").innerHTML="";for(var t=0;t<e.length;t++){var a=Object.values(e[t]);a.length=2,a.splice(0,0,t+1),a.splice(1,0,"pic");var n=document.createElement("tr");n.classList.add("jobRow"),n.style.backgroundColor=t%2==0?"#f5f7f8":"#d6d1bf",a.map((function(e,t){var r=document.createElement("td");r.id=r.innerHTML,r.innerHTML=e,n.appendChild(r),abilsBody.append(n),Object.entries(C.wQ);var i=z.N$.find((function(e){return e[0].toLowerCase()==a[2].toLowerCase()+".png"}));if("pic"==r.innerHTML){var s=document.createElement("img");null!=i&&(s.src=i[1]),console.log(s.src),r.id="pic",r.innerHTML="",r.append(s)}}))}}(),X("#search").on("keyup",(function(){var e=X(this).val().toLowerCase();X("#abilsBody tr").filter((function(){X(this).toggle(X(this).text().toLowerCase().indexOf(e)>-1)}))}));var t=document.getElementById("abilsBody"),a=document.getElementById("applyBody"),n=document.getElementById("glossButton"),r=document.getElementById("applyButton"),i=Array.from(document.querySelectorAll(".traitimg"));function s(e,t){e.style.display="table-row-group",t.style.display="none"}n.style.backgroundColor="#c09601",n.onclick=function(){s(t,a),p(2),this.style.backgroundColor="#c09601",r.style.backgroundColor="rgba(192, 150, 1, 0.5);",i.map((function(e){return e.style.width="200px"}))},z.mk,r.onclick=function(e){this.style.backgroundColor="#c09601",n.style.backgroundColor="rgba(192, 150, 1, 0.5);",function(){var e=z.mk;document.getElementById("applyBody").innerHTML="";for(var t=document.getElementById("applyBody"),a=0;a<e.length;a++){var n=Object.values(e[a]);if(n.splice(0,2),n.splice(0,0,a+1),n.splice(1,0,"pic"),void 0!==n[2]){var r=document.createElement("tr");r.classList.add("jobRow"),r.style.backgroundColor=a%2==0?"#f5f7f8":"#d6d1bf",n.map((function(e,a){var i=document.createElement("td");i.id=i.innerHTML,i.innerHTML="<td>"+e+"</td>",Object.entries(C.wQ);var s=z.N$.find((function(e){return null==n[2]?"":e[0].toLowerCase()==n[3].toLowerCase()+".png"}));if("pic"==i.innerHTML){var c=document.createElement("img");c.src=null==s?"n/a":s[1],console.log(C.wQ),i.id="pic",i.innerHTML="",i.append(c)}r.appendChild(i),t.append(r)}))}}}(),X("#search").on("keyup",(function(){var e=X(this).val().toLowerCase();X("#abilsBody tr").filter((function(){X(this).toggle(X(this).text().toLowerCase().indexOf(e)>-1)}))})),s(a,t),p(3),i.map((function(e){return e.style.width="150px"}))};var c=document.querySelectorAll(".navbtns img:nth-child(1)"),l=document.querySelectorAll(".navbtns img:nth-child(2)"),o=document.querySelectorAll(".navbtns img:nth-child(3)"),d=Array.from(document.querySelectorAll(".traitimg"));function p(e){var t=Array.from(document.querySelectorAll("tr"));t.shift();for(var a=function(){var a=t[n].children[e].innerText.toLowerCase()+".png";t[n].addEventListener("mousemove",(function(){d.map((function(e){return e.src=Object.entries(C.wQ).find((function(e){return e[0].toLowerCase()==a}))[1]}))})),t[n].addEventListener("mouseleave",(function(){d.map((function(e){var t=Math.floor(Math.random()*Object.entries(C.wQ).length);e.src=Object.entries(C.wQ)[t][1]}))}))},n=0;n<t.length;n++)a()}console.log(o),o[0].onclick=function(){d.map((function(e){return e.style.animation="rotation 5s infinite linear"}))},o[1].onclick=function(){d.map((function(e){return e.style.animation="rotation 5s infinite linear"}))},l[0].onclick=function(){d.map((function(e){return e.style.animation="rotation 0"}))},l[1].onclick=function(){d.map((function(e){return e.style.animation="rotation 0"}))},c[0].onclick=function(){d.map((function(e){var t=Math.floor(Math.random()*Object.entries(C.wQ).length);e.src=Object.entries(C.wQ)[t][1]}))},c[1].onclick=function(){d.map((function(e){var t=Math.floor(Math.random()*Object.entries(C.wQ).length);e.src=Object.entries(C.wQ)[t][1]}))},p(2);var u=Array.from(document.getElementsByClassName("skip"));u[0].style.animation="skipTop 20s linear infinite alternate",u[1].style.animation="skipBottom 20s linear infinite alternate"}))}));var te=document.getElementById("navbtn"),ae=document.getElementById("collapsemenu");(0,W.Z)(ae,te)},86204:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(23645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,"h1{text-align:center;color:#fff;background-color:#c09601}.col-9{padding:0}#tabs{float:right;text-align:right}#tabs button{background-color:#c09601;color:white;float:right;text-align:right;border-radius:10px}th{position:inherit;background-color:#c09601}table tr td:nth-child(2){width:35px}table tr:not(:first-child){height:50px}table tr td:not(:first-child){padding:0 0 0 5px}#glossarymain{width:95vw;margin:auto}#glossarymain #navbtns img{width:30px;padding:10px 0 50px 0;float:right}#glossarymain .traitimg{box-shadow:2px 1px black;width:220px;animation:rotation 5s infinite linear}#glossarymain #passives{background-color:#c09601 !important;padding:0.7%}@keyframes rotation{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}@media only screen and (max-width: 760px){#randimg{text-align:center}#randimg img:nth-child(n+2){width:100px}#glossarymain #navbtns{text-align:center}#glossarymain #navbtns img{float:none}#search{width:100%}}\n",""]);const i=r},3810:(e,t,a)=>{e.exports=a.p+"394852502d563d203297.png"},14847:(e,t,a)=>{e.exports=a.p+"b581f430d8d429ea9101.png"},32742:(e,t,a)=>{e.exports=a.p+"1fb0ebd4a0336457e62d.png"},94370:(e,t,a)=>{e.exports=a.p+"3641f5e2e15ebe2b9f1b.png"}},t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={id:n,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,a.x=e=>{},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={530:0},t=[[91426,665,780,589,771,498,630]],n=e=>{},r=(r,i)=>{for(var s,c,[l,o,d,p]=i,u=0,m=[];u<l.length;u++)c=l[u],a.o(e,c)&&e[c]&&m.push(e[c][0]),e[c]=0;for(s in o)a.o(o,s)&&(a.m[s]=o[s]);for(d&&d(a),r&&r(i);m.length;)m.shift()();return p&&t.push.apply(t,p),n()},i=self.webpackChunklrnwebpack=self.webpackChunklrnwebpack||[];function s(){for(var n,r=0;r<t.length;r++){for(var i=t[r],s=!0,c=1;c<i.length;c++){var l=i[c];0!==e[l]&&(s=!1)}s&&(t.splice(r--,1),n=a(a.s=i[0]))}return 0===t.length&&(a.x(),a.x=e=>{}),n}i.forEach(r.bind(null,0)),i.push=r.bind(null,i.push.bind(i));var c=a.x;a.x=()=>(a.x=c||(e=>{}),(n=s)())})(),a.x()})();