(self.webpackChunklrnwebpack=self.webpackChunklrnwebpack||[]).push([[30],{36754:(n,t,e)=>{"use strict";e.d(t,{Uw:()=>C,Rr:()=>B,O1:()=>H,Ep:()=>S,cX:()=>E});var i=e(97209),a=e(49128),r=e(56245),o=e(95520),s=e(60543),l=e(33066),c=e(13763),p=e(4586),d=e(93644),f=e(73036),u=e(93156),h=(e(52635),e(28285)),g=e(52798),m=e(26535),x=e(75657),b=e(74069),v=e(44500),w=e(37947),y=e(89290),k=e(54028),X=e(55141),j=e(67784),z=e(13496),V=e(12850);e.g.fetch=e(83300);var I=e(62538),T="1_emNAbXp89s3jhjl5Ko-7pHJIcCtjL6PGEfVP1th_6g",E=[],H=[];var C={jobs:function(){return I.raw(T,7).then((function(n){return n.data})).then((function(n){switch(n.shift(),document.getElementById("langSel").value){case"English":n.map((function(n){var t=V.Tl.filter((function(t){return t[0]==n[1]}));null!=t&&(n[1]=null==t[0]?n[6]:t[0][1]);var e=V.Ve.filter((function(t){return t[0]==n[7]}));null!=e&&(n[7]=null==e[0]?n[7]:e[0][1]);var i=V.Xx.filter((function(t){return t[0]==n[8]}));null!=i&&(n[8]=null==i[0]?n[8]:i[0][1]);var a=V.Xx.filter((function(t){return t[0]==n[9]}));null!=a&&(n[9]=null==a[0]?n[9]:a[0][1]);var r=V.Xx.filter((function(t){return t[0]==n[10]}));null!=r&&(n[10]=null==r[0]?n[10]:r[0][1]);var o=V.Xx.filter((function(t){return t[0]==n[11]}));null!=o&&(n[11]=null==o[0]?n[11]:o[0][1]);var s=V.Xx.filter((function(t){return t[0]==n[12]}));null!=s&&(n[12]=null==s[0]?n[12]:s[0][1])}));break;case"Chinese":n.map((function(n){var t=V.Tl.filter((function(t){return t[0]==n[1]}));null!=t&&(n[1]=t[0][2]);var e=V.Xx.filter((function(t){return t[0]==n[8]}));null!=e[0]&&(n[8]=e[0][2])}));break;case"Chinese(Trad)":n.map((function(n){}))}n.map((function(n){return{name:n[1],hp:n[3]/5,str:n[4]/1,agi:n[5]/1,int:n[6]/1}}))}))},craft:function(){return I.raw(T,3).then((function(n){return n.data})).then((function(n){var t=document.getElementById("langSel").value;switch(n.shift(),t){case"English":n.map((function(n){return n.map((function(n,t){return t%2==0?null==V.J_.filter((function(t){return t[0]==n}))[0]?n:V.J_.filter((function(t){return t[0]==n}))[0][1]:null==V.Tl.filter((function(t){return t[0]==n}))[0]?n:V.Tl.filter((function(t){return t[0]==n}))[0][1]}))}))}}))},materials:function(){var n=document.getElementById("langSel").value;return I.raw(T,8).then((function(n){return n.data})).then((function(t){switch(t.shift(),n){case"English":t.map((function(n){var t=V.J_.filter((function(t){return t[0]==n[1]}));n[1]=null==t[0]?n[1]:t[0][1]}));break;case"Chinese":t.map((function(n){var t=V.J_.filter((function(t){return t[0]==n[1]}));n[1]=t[0][2];var e=V.Wu.filter((function(t){return t[1]==n[2]}));n[2]=e[0][2],null!=n[3]&&(n[3]=n[3].split("|").map((function(n){return n.split("-").map((function(n){return null==V.Tl.find((function(t){return t[0]==n&&n.length>1}))?"":V.Tl.find((function(t){return t[0]==n&&n.length>1}))[2]})).join("-")})).join("|"))}));break;case"Chinese(Trad)":t.map((function(n){var t=V.J_.filter((function(t){return t[0]==n[1]}));n[1]=t[0][3];var e=V.Wu.filter((function(t){return t[1]==n[2]}));n[2]=e[0][3],null!=n[3]&&(n[3]=n[3].split("|").map((function(n){return n.split("-").map((function(n){return null==V.Tl.find((function(t){return t[0]==n&&n.length>1}))?"":V.Tl.find((function(t){return t[0]==n&&n.length>1}))[3]})).join("-")})).join("|"))}))}}))}},B={charsRaw:function(){return I.raw(T,9).then((function(n){return n.data})).then((function(n){switch(n.shift(),document.getElementById("langSel").value){case"English":n.map((function(n){var t=V.VH.filter((function(t){return t[0]==n[1]}));null!=t[0]&&(n[1]=t[0][1]);var e=V.Xx.filter((function(t){return t[0]==n[13]}));null!=e[0]&&(n[13]=e[0][1]),null==e[0]&&(n[13]=["n/a","n/a","n/a","n/a"]);var i=V.Xx.filter((function(t){return t[0]==n[14]}));null!=i[0]&&(n[14]=i[0][1]);var a=V.Ve.filter((function(t){return t[0]==n[11]}));null!=a[0]&&(n[11]=a[0][1]);var r=V.Ve.filter((function(t){return t[0]==n[12]}));null!=r[0]&&(n[12]=r[0][1]);var o=null==n[7]?"":n[7].split("-");o=(o=o.length>0?o.map((function(n){return null==V.Ve.filter((function(t){return t[0]==n}))[0]?"":V.Ve.filter((function(t){return t[0]==n}))})):o).length>0?o.map((function(n){return null==n[0]?"":n[0][1]})):o,n[7]=o.length>0?o.join("-"):o;var s=null==n[8]?"":n[8].split("-");(s=s.length>0?s.map((function(n){return null==V.Xx.filter((function(t){return t[0]==n}))[0]?"":V.Xx.filter((function(t){return t[0]==n}))})):s).length>0&&(s=s.map((function(n){return null==n[0]?"":n[0][1]})),n[8]=s.length>0?s.join("-"):s);var l=n[9];null!=l&&("string"!=typeof(l=l.includes("|")?l.split("|"):l)&&(l=l.map((function(n){return n.includes("-")?n.split("-").map((function(n){return null==V.Xx.filter((function(t){return t[0]==n}))[0]?"":V.Xx.filter((function(t){return t[0]==n}))[0][1]})).join("-"):null==V.Xx.filter((function(t){return t[0]==n}))[0]?"":V.Xx.filter((function(t){return t[0]==n}))[0][1]}))),n[9]="string"==typeof l?l:l.join("|"));var c=n[10];null!=c&&("string"!=typeof(c=c.includes(":")?c.split(":"):c)&&(c=c.map((function(n){return n.includes("-")?n.split("-").map((function(n){return null==V.Xx.filter((function(t){return t[0]==n}))[0]?n:V.Xx.filter((function(t){return t[0]==n}))[0][1]})).join("-"):null==V.Xx.filter((function(t){return t[0]==n}))[0]?n:V.Xx.filter((function(t){return t[0]==n}))[0][1]}))),n[10]="string"==typeof c?c:c.join(":")),n[15]=null==V.MG.filter((function(t){return t[0]==n[15]}))[0]?"":V.MG.filter((function(t){return t[0]==n[15]}))[0][1]}));break;case"Chinese":n.map((function(n){var t=V.VH.filter((function(t){return t[0]==n[1]}));n[1]=t[0][2];var e=V.Xx.filter((function(t){return t[0]==n[13]}));null!=e[0]&&(n[13]=e[0][2]);var i=V.Xx.filter((function(t){return t[0]==n[14]}));null!=i[0]&&(n[14]=i[0][2]);var a=V.Wu.filter((function(t){return t[0]==n[2]}));null!=a[0]&&(n[2]=a[0][2])}));break;case"Chinese(Trad)":n.map((function(n){var t=V.VH.filter((function(t){return t[0]==n[1]}));null!=t[0]&&(n[1]=t[0][3]);var e=V.Xx.filter((function(t){return t[0]==n[13]}));null!=e[0]&&(n[13]=e[0][3]);var i=V.Xx.filter((function(t){return t[0]==n[14]}));null!=i[0]&&(n[14]=i[0][3])}))}}))},chars:function(){var n=document.getElementById("langSel").value;return I.raw(T,9).then((function(n){return n.data})).then((function(t){switch(H=[],t.shift(),n){case"English":t.map((function(n){var t=V.VH.filter((function(t){return t[0]==n[1]}));null!=t[0]&&(n[1]=t[0][1]);var e=V.Xx.filter((function(t){return t[0]==n[13]}));null!=e[0]&&(n[13]=e[0][1]);var i=V.Xx.filter((function(t){return t[0]==n[14]}));null!=i[0]&&(n[14]=i[0][1]);var a=V.Ve.filter((function(t){return t[0]==n[11]}));null!=a[0]&&(n[11]=a[0][1]);var r=V.Ve.filter((function(t){return t[0]==n[12]}));null!=r[0]&&(n[12]=r[0][1]);var o=null==n[7]?"":n[7].split("-");o=(o=o.length>0?o.map((function(n){return null==V.Ve.filter((function(t){return t[0]==n}))[0]?"":V.Ve.filter((function(t){return t[0]==n}))})):o).length>0?o.map((function(n){return null==n[0]?"":n[0][1]})):o,n[7]=o.length>0?o.join("-"):o;var s=null==n[8]?"":n[8].replace(/\|/g,"-").split("-");(s=s.length>0?s.map((function(n){return null==V.Xx.filter((function(t){return t[0]==n}))[0]?"":V.Xx.filter((function(t){return t[0]==n}))})):s).length>0&&(s=s.map((function(n){return null==n[0]?"":n[0][1]})),n[8]=s.length>0?s.join("-"):s);var l=n[9];null!=l&&("string"!=typeof(l=l.includes("|")?l.split("|"):l)&&(l=l.map((function(n){return n.includes("-")?n.split("-").map((function(n){return null==V.Xx.filter((function(t){return t[0]==n}))[0]?"":V.Xx.filter((function(t){return t[0]==n}))[0][1]})).join("-"):null==V.Xx.filter((function(t){return t[0]==n}))[0]?"":V.Xx.filter((function(t){return t[0]==n}))[0][1]}))),n[9]="string"==typeof l?l:l.join("|"));var c=n[10];null!=c&&("string"!=typeof(c=c.includes(":")?c.split(":"):c)&&(c=c.map((function(n){return n.includes("-")?n.split("-").map((function(n){return null==V.Xx.filter((function(t){return t[0]==n}))[0]?n:V.Xx.filter((function(t){return t[0]==n}))[0][1]})).join("-"):null==V.Xx.filter((function(t){return t[0]==n}))[0]?n:V.Xx.filter((function(t){return t[0]==n}))[0][1]}))),n[10]="string"==typeof c?c:c.join(":")),n[15]=null==V.MG.filter((function(t){return t[0]==n[15]}))[0]?"":V.MG.filter((function(t){return t[0]==n[15]}))[0][1]}));break;case"Chinese":t.map((function(n){var t=V.VH.filter((function(t){return t[0]==n[1]}));n[1]=t[0][2];var e=V.Xx.filter((function(t){return t[0]==n[13]}));null!=e[0]&&(n[13]=e[0][2]);var i=V.Xx.filter((function(t){return t[0]==n[14]}));null!=i[0]&&(n[14]=i[0][2])}));break;case"Chinese(Trad)":t.map((function(n){var t=V.VH.filter((function(t){return t[0]==n[1]}));null!=t[0]&&(n[1]=t[0][3]),null!=translatedAbil1[0]&&(n[13]=translatedAbil1[0][3]);var e=V.Xx.filter((function(t){return t[0]==n[14]}));null!=e[0]&&(n[14]=e[0][3])}))}var e;e=1,t.map((function(n){for(var t=0;t<n.length;t++)20==t||(t!==e&&void 0!==n[t]?(n[t]=n[t].replace(/\bMaxHp\b|Max HP/gi,'<span class=\'maxhp\'><img class="icon" src="'+y+'" alt="hp"/> MaxHP</span>'),n[t]=n[t].replace(/\bstr\b|\bstrength\b/gi,'<span class=\'strength\'><img class="icon" src="'+k+'" alt="str"/> Strength</span>'),n[t]=n[t].replace(/\bagi\b|\bagility\b/gi,'<span class=\'agility\'><img class="icon" src="'+X+'" alt="agi"/> Agility</span>'),n[t]=n[t].replace(/\bint\b|\bintelligence\b/gi,'<span class=\'intelligence\'><img class="icon" src="'+j+'" alt="int"/> Intelligence</span>'),n[t]=n[t].replace(/\bprotect\b/gi,'<span class=\'protect\'><img class="icon" src="'+z+'" alt="protect"/> Protect</span>'),n[t]=n[t].replace(/\bwater\b/gi,'<span class=\'water\'><img class="icon" src="'+a+'" alt="water"/> '+V.e4+"</span>"),n[t]=n[t].replace(/\bfire\b/gi,'<span class=\'fire\'><img class="icon" src="'+i+'" alt="fire"/> '+V.ur+"</span>"),n[t]=n[t].replace(/\bearth\b/gi,'<span class=\'earth\'><img class="icon" src="'+r+'" alt="earth"/> '+V.tE+"</span>"),n[t]=n[t].replace(/\bwind\b/gi,'<span class=\'wind\'><img class="icon" src="'+o+'" alt="wind"/> '+V.QZ+"</span>"),n[t]=n[t].replace(/\bthunder\b/gi,'<span class=\'thunder\'><img class="icon" src="'+s+'" alt="thunder"/>'+V.E+"</span>"),n[t]=n[t].replace(/\blight\b/gi,'<span class=\'light\'><img class="icon" src="'+l+'" alt="light"/> '+V.mY+"</span>"),n[t]=n[t].replace(/\bdark\b/gi,'<span class=\'dark\'><img class="icon" src="'+c+'" alt="dark"/> '+V.pH+"</span>"),n[t]=n[t].replace(/\bbleed\b/gi,'<span class=\'bleed\'><img class="icon" src="'+m+'" alt="bleed"/>Bleed</span>'),n[t]=n[t].replace(/\binsane\b/gi,'<span class=\'insane\'><img class="icon" src="'+b+'" alt="insane"/>Insane</span>'),n[t]=n[t].replace(/\bdepress\b/gi,'<span class=\'depress\'><img class="icon" src="'+d+'" alt="depress"/>Depress</span>'),n[t]=n[t].replace(/\bburn\b/gi,'<span class=\'burn\'><img class="icon" src="'+f+'" alt="burn"/>Burn</span>'),n[t]=n[t].replace(/\bchill\b/gi,'<span class=\'chill\'><img class="icon" src="'+u+'" alt="chill"/>Chill</span>'),n[t]=n[t].replace(/\binjury\b/gi,'<span class=\'injury\'><img class="icon" src="'+x+'" alt="injury"/>Injury</span>'),n[t]=n[t].replace(/\bparalysis\b/gi,'<span class=\'paralysis\'><img class="icon" src="'+v+'" alt="paralysis"/>Paralysis</span>'),n[t]=n[t].replace(/\brestrain\b/gi,'<span class=\'restrain\'><img class="icon" src="'+g+'" alt="restrain"/>Restrain</span>'),n[t]=n[t].replace(/\bseed\b/gi,'<span class=\'seed\'><img class="icon" src="'+h+'" alt="seed"/>Seed</span>'),n[t]=n[t].replace(/\bblind\b/gi,'<span class=\'blind\'><img class="icon" src="'+p+'" alt="blind"/>Blind</span>'),n[t]=n[t].replace(/\bvenom\b/gi,'<span class=\'venom\'><img class="icon" src="'+w+'" alt="venom"/>Venom</span>')):n[t]=t==e?n[e]:"")})),H=t}))}},S={log:function(){return I.raw(T,2).then((function(n){return n.data})).then((function(n){n.shift(),n.length=30;var t=[];n.map((function(e,i){0==i&&E.push(n[0][1]),E.push(e[3]),i>0&&void 0!==e[1]&&t.push(i)})),E.length=t[0]+1}))}}},38529:(n,t,e)=>{"use strict";e(70311)},22823:(n,t,e)=>{"use strict";function i(n,t){t.onclick=function(){"none"==n.style.display?n.style.display="block":n.style.display="none"}}e.d(t,{Z:()=>i})},77115:(n,t,e)=>{"use strict";function i(n){var t={};return n.keys().map((function(e,i){t[e.replace("./","")]=n(e)})),t}e.d(t,{jC:()=>a,MM:()=>r,TB:()=>o,jn:()=>s,ee:()=>l}),i(e(63021));var a=i(e(91184)),r=(i(e(48652)),i(e(58108)),i(e(74913))),o=(i(e(87027)),i(e(45337))),s=i(e(69229)),l=i(e(53084));i(e(68997)),i(e(3748)),i(e(79957))},28331:(n,t,e)=>{"use strict";function i(n){var t={};return n.keys().map((function(e,i){t[e.replace("./","")]=n(e)})),t}e.d(t,{TI:()=>a});var a=i(e(63021));i(e(91184)),i(e(48652)),i(e(58108)),i(e(74913)),i(e(87027)),i(e(45337)),i(e(69229)),i(e(53084)),i(e(68997)),i(e(3748)),i(e(79957))},81076:(n,t,e)=>{"use strict";e.d(t,{Z:()=>r});var i=e(23645),a=e.n(i)()((function(n){return n[1]}));a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:800);"]),a.push([n.id,"body::after{background-size:0;height:0;width:0}::-webkit-scrollbar-thumb{background-color:#151b1f}::-webkit-scrollbar{background-color:#c1e0f5}h1{background-color:transparent}section{margin-top:-25px}#mainsec{width:70vw;margin:auto}@media only screen and (min-width: 1000px){#features{list-style-type:none;font-size:28px;padding:10px 0;margin-bottom:80px;margin-top:50px;transform:translate3d(0, 0, 0);-webkit-font-smoothing:antialiased;-webkit-font-kerning:normal;-webkit-text-size-adjust:100%}#features li:not(.licontainer){margin-bottom:15px;overflow:hidden;position:relative}#features p{height:80px;padding:0 10px;transition:all .4s ease-in-out;transform:translate3d(0, 0, 0);vertical-align:top}}#change{margin-top:25px}#change h2{text-align:center}#change #change1 img{height:170px}#change #change2{padding-top:7px;height:260px}#change #change2 .txtdiv{height:57.5px}#change #change2 img{height:160px}.change{position:relative;margin:40px auto}.div{position:absolute;top:0;opacity:0}.div .txt{font:1.5em/1 Open Sans, Impact;display:inline;margin:auto;text-align:center;font-size:0;padding:6px 0;text-shadow:2px 2px black;font-weight:bold}.div .col-5{width:215px}.div img{display:block;margin:auto;height:220px;width:auto}.div .txtdiv{text-align:center;width:835px}.div .txt:nth-child(3){color:#36c1f9;letter-spacing:4px}#txtdiv{display:block;margin:auto}#info{color:white}#infoInf{padding:15px 45px}#gplay{text-align:center;padding:25px}#gplay img{display:inline;margin:auto;margin-top:-30px;filter:drop-shadow(2px 1px 6px white)}#gplay #playimg{width:200px}#gplay #media img{background-color:white;border-radius:12%;width:50px}#gplay2{margin:50px 50px 0 50px}#div1,#div2{border-bottom:8px solid #36c1f9;padding-bottom:30px}#div1{transform:skew(10deg, 10deg)}#div2{transform:skew(10deg, -10deg)}#div7 div{padding-top:60px}.delve:first-child img{transform:skew(10deg, 10deg)}#delve2 img{transform:skew(-10deg, -10deg) scaleX(-1)}#div7::before{content:\"\";width:50%;left:50%;position:absolute;border-top:8px solid #36c1f9;transform:skew(10deg, -10deg)}#div7::after{content:\"\";width:50%;position:absolute;border-top:8px solid #36c1f9;transform:skew(10deg, 10deg)}@keyframes TransitioningBackground{0%{background-position:1% 0%}50%{background-position:99% 100%}100%{background-position:1% 0%}}#playdiv a{position:relative;overflow:hidden}#playdiv a::before{content:'';display:block;position:absolute;background:rgba(255,255,255,0.8);width:50px;height:50%;top:-30px;left:23%;filter:blur(30px);transform:translateX(-100px) skewX(-15deg)}#playdiv a::after{content:'';display:block;position:absolute;background:rgba(255,255,255,0.5);width:30px;height:50%;top:-30px;left:23%;opacity:0;filter:blur(5px);overflow:hidden;transform:translateX(-7px) skewX(-15deg)}#playdiv a:hover{transform:scale(1.2);cursor:pointer}#playdiv a:hover::before,#playdiv a:hover::after{transform:translateX(135px) skewX(-15deg);transition:0.5s}#playdiv a:hover::before 10%,#playdiv a:hover::after 10%{opacity:1}#playdiv a:hover::before 99%,#playdiv a:hover::after 99%{opacity:1}#playdiv a:hover::before 100%,#playdiv a:hover::after 100%{opacity:0}.shine{width:10px;height:45px;position:absolute;top:-20px;left:0;overflow:hidden;background:rgba(255,255,255,0.4);transition:all .1s ease;transform:skewX(10deg) translateX(0);opacity:0;filter:blur(5px)}#media a{width:40px;height:40px;overflow:hidden;position:relative}#media a:hover .shine{transform:skewX(10deg) translateX(40px);animation:shine 0.5s ease}@keyframes shine{1%{opacity:1}80%{opacity:0}}.gshine{width:10px;height:45px;position:absolute;top:-15px;left:0;overflow:hidden;background:rgba(255,255,255,0.4);transition:all .2s linear;transform:skewX(10deg) translateX(0);opacity:0}#playdiv a:hover .gshine{transform:skewX(10deg) translateX(170px);animation:shine 0.5s ease}.maininf{margin:auto}.maininf h1{text-transform:uppercase;font:2.5em/1 Open Sans, Impact;text-align:center;color:#36c1f9;font-weight:bold;padding-bottom:15px;text-shadow:1px 2px black;border-radius:5%;animation-delay:0.8s;line-height:0.6}.maininf h1:hover{transition:1s;transform:scaleX(-1);transform:rotate(360deg)}.maininf .eternal{color:#151b1f;font-size:36px;text-shadow:0 0 5px #36c1f9,0 0 15px #36c1f9,0 0 20px #36c1f9,0 0 40px #36c1f9,0 0 60px #36c1f9,0 0 10px #36c1f9,0 0 98px #36c1f9;animation:blink 12s infinite;-webkit-animation:blink 12s infinite}.maininf .head{position:relative;top:20px;display:inline-block;-webkit-animation:bounce 3.4s ease infinite alternate}.maininf ul{text-align:justify}.maininf li{background:transparent;transition:.5s ease-out;background:linear-gradient(to left, transparent 50%, #052a42 50%) right;background-size:200%;background-color:transparent}.maininf li:hover{background-position:left}.maininf #features .cover{display:none}.maininf img{width:20px}.maininf .ghostdiv{position:relative}.maininf .ghostdiv:first-child{transform:scaleX(-1)}.maininf #ghost{position:absolute;width:130px;filter:drop-shadow(2px 4px 6px #36c1f9)}.head:nth-child(1),.head:nth-child(8),.head:nth-child(12),.head:nth-child(18){font-size:68px}.head:nth-child(2){-webkit-animation-delay:0.1s}.head:nth-child(3){-webkit-animation-delay:0.2s}.head:nth-child(4){-webkit-animation-delay:0.3s}.head:nth-child(5){-webkit-animation-delay:0.3s}.head:nth-child(6){-webkit-animation-delay:0.2s}.head:nth-child(7){-webkit-animation-delay:0.1s}.head:nth-child(8){-webkit-animation-delay:0s}.head:nth-child(9){-webkit-animation-delay:1.3s}.head:nth-child(10){-webkit-animation-delay:1.4s}.head:nth-child(12){-webkit-animation:bounce2 3.4s ease infinite alternate;-webkit-animation-delay:0.3s}.head:nth-child(13){-webkit-animation:bounce2 3.4s ease infinite alternate;-webkit-animation-delay:0.2s}.head:nth-child(14){-webkit-animation:bounce2 3.4s ease infinite alternate;-webkit-animation-delay:0.1s}.head:nth-child(15){-webkit-animation:bounce2 3.4s ease infinite alternate;-webkit-animation-delay:0.0s}.head:nth-child(16){-webkit-animation:bounce2 3.4s ease infinite alternate;-webkit-animation-delay:0.1s}.head:nth-child(17){-webkit-animation:bounce2 3.4s ease infinite alternate;-webkit-animation-delay:0.2s}.head:nth-child(18){-webkit-animation:bounce2 3.4s ease infinite alternate;-webkit-animation-delay:0.3s}@-webkit-keyframes blink{20%,24%,55%{color:#111;text-shadow:none}0%,19%,21%,23%,25%,54%,56%,100%{text-shadow:0 0 5px #36c1f9,0 0 15px #36c1f9,0 0 20px #36c1f9,0 0 40px #36c1f9,0 0 60px #250c95,0 0 10px #250c95,0 0 98px #250c95;color:#151b1f}}@keyframes blink{20%,24%,55%{color:#111;text-shadow:none}0%,19%,21%,23%,25%,54%,56%,100%{text-shadow:0 0 5px #36c1f9,0 0 15px #36c1f9,0 0 20px #36c1f9,0 0 40px #36c1f9,0 0 60px #250c95,0 0 10px #250c95,0 0 98px #250c95;color:#151b1f}}@-webkit-keyframes bounce{10%{top:-30px;text-shadow:0 0 5px #02021c,0 0 15px #0a5281,0 0 20px #02021c,0 0 40px #02021c,0 0 60px #36c1f9,0 0 10px #36c1f9;letter-spacing:14px}100%{top:-30px;text-shadow:0 0 5px #02021c,0 0 15px #0a5281,0 0 20px #02021c,0 0 40px #02021c,0 0 60px #36c1f9,0 0 10px #36c1f9;letter-spacing:14px}}@-webkit-keyframes bounce2{0%{top:-30px}10%{top:20px;text-shadow:0 0 5px #02021c,0 0 15px #0a5281,0 0 20px #02021c,0 0 40px #02021c,0 0 60px #36c1f9,0 0 10px #36c1f9;letter-spacing:14px}100%{top:20px;text-shadow:0 0 5px #02021c,0 0 15px #0a5281,0 0 20px #02021c,0 0 40px #02021c,0 0 60px #36c1f9,0 0 10px #36c1f9;letter-spacing:14px}}@keyframes fromLeft{0%{transform-origin:left top;transform:rotate(-90deg);opacity:1}100%{transform-origin:left bottom;transform:rotate(0);transform:translateZ(400px);opacity:1;background-color:transparent}}@keyframes fromRight{0%{transform-origin:right top;transform:rotate(-90deg);opacity:1}100%{transform-origin:right bottom;transform:rotate(0);opacity:1;background-color:transparent}}@keyframes slideBottom{0%{height:0;opacity:0}100%{height:80px;opacity:1;background-color:transparent}}@keyframes slideLeft{0%{width:0;opacity:0}100%{width:100%;opacity:1;background-color:transparent}}@keyframes scale{0%{transform:scale(0);opacity:0}50%{transform:scale(1.5);opacity:1}100%{transform:scale(1);opacity:1;background-color:transparent}}@keyframes translate{0%{width:0}50%{width:100%}100%{width:0}}@keyframes fadein{50%{opacity:0}51%{opacity:1}99%{z-index:-1}100%{opacity:1;z-index:2}}#updates{position:relative;margin-bottom:50px}#updates #banner{width:100%;display:block;margin:auto;border-radius:10%;box-shadow:1px 2px black}#updates h2,#updates ul,#updates .mask{position:absolute}#updates .mask{width:100%;height:100%;background:rgba(4,31,48,0.9);border-radius:10%;transition:0.7s;transform:scale(0)}#updates h2{top:15%;background:rgba(54,193,249,0.9);width:100%;color:white;font-weight:600;padding-left:20%;transform:scale(0);box-shadow:2px 1px black;text-shadow:2px 1px #052a42;transition:0.7s}#updates ul{width:100%;max-height:280px;top:28%;padding:0;left:0;transform:scale(0);background:rgba(8,54,84,0.9);transition:0.7s;overflow-y:scroll}#updates ul li{padding:6px 6px 6px 10%}#herodiv{overflow:hidden;position:fixed;left:0;top:171px;border-right:14px solid #151b1f;background-color:white;padding-top:10px}#herodiv2{overflow:hidden;position:fixed;right:0;top:171px;border-left:14px solid #151b1f;background-color:white;padding-top:10px}@keyframes hithere{1%{transform:scale(1.2)}4%,8%{transform:rotate(-20deg) scale(1.2)}6%{transform:rotate(20deg) scale(1.2)}11%{transform:rotate(0deg) scale(1.2)}16%{transform:scale(1)}100%{transform:scale(1)}}@keyframes animate{0%{transform:translateY(0);opacity:0.4;border-radius:0}100%{transform:translateY(800px);opacity:0.8;border-radius:50%}}#stones{overflow:hidden}.stone{position:fixed;z-index:-10;opacity:0;top:0;animation:animate 30s linear infinite;filter:blur(2px)}.stone:nth-child(2){left:47%;width:100px;animation-delay:40s;animation-duration:45s}.stone:nth-child(3){left:90%;width:40px;animation-delay:28s;animation-duration:25s}.stone:nth-child(4){left:55%;width:120px;animation-delay:25s;animation-duration:45s}.stone:nth-child(5){left:50%;width:65px;animation-delay:7s;animation-duration:45s}.stone:nth-child(6){left:70%;width:85px;animation-delay:30s;animation-duration:50s}.stone:nth-child(7){left:37%;width:105px;animation-delay:48s;animation-duration:53s}.stone:nth-child(8){left:20%;width:115px;animation-delay:33s;animation-duration:50s}.stone:nth-child(9){left:15%;width:35px;animation-duration:60s}.stone:nth-child(1){left:30%;width:100px;animation-delay:1s;animation-duration:60s}.stone:nth-child(10){width:80px;left:20%;animation-delay:35s;animation-duration:60s}@keyframes bump{0%{font-size:2.5rem}50%{font-size:3.5rem;color:white}100%{font-size:2.5rem}}#animationHeader{font:2.5em/1 Open Sans, Impact;text-shadow:16px 2px 30px #36c1f9;margin-bottom:20px}#animationHeader .terror{opacity:0;font-size:30px;padding:13px;text-shadow:5px 1px 16px red, 6px 6px 26px red}#animationHeader .animateTerror{animation:terror 1.7s ease 1}@keyframes terror{0%{opacity:0;transform:scale(0)}20%{opacity:1;transform:scale(1)}40%{transform:scale(1.2)}55%{transform:scale(1.4)}60%{transform:scale(1.4)}65%{transform:scale(1.4)}80%{transform:scale(1.2)}100%{transform:scale(1)}}@media only screen and (max-width: 1024px){.licontainer .cover{height:114px}}@media only screen and (max-width: 768px){#mainsec{width:100vw}#infoInf{padding:0}.maininf .header{margin-left:0;margin-top:80px}.maininf h1{font:1.7em/1 Open Sans, Impact}.maininf .head:nth-child(1),.maininf .head:nth-child(8),.maininf .head:nth-child(12),.maininf .head:nth-child(18){font-size:47px}.maininf #ghostdiv{margin:auto}.maininf #ghost{position:relative;display:block;margin:auto;width:90px}.maininf .ghostdiv:first-child{display:none}.maininf ul{margin:10px auto 15px auto;list-style-type:none}.maininf li{font-size:20px;padding:7px 4px}.maininf li p:nth-child(odd){display:none}.maininf ul:hover li{animation:flattenOut 1s linear 1 forwards}.maininf li:nth-child(8){display:none}.maininf li:nth-child(4){height:107px}#change1 div:nth-child(2){margin-top:30px}#div7 .delve:first-child{margin-top:30px;padding-left:50px;border-top:8px solid #36c1f9;transform:skew(0)}#div7 .delve:first-child img{transform:skew(0, 0)}#delve2 img{transform:skew(0) scaleX(1)}#div7 div{padding-top:20px}#div7::after,#div7::before{width:0}#gplay{margin-bottom:55px;padding-bottom:0}#gplay img{margin-top:0}#gplay #playdiv{padding:10px}.div .txtdiv{width:300px}#herodiv{top:87%;height:350px;border-right:none;border-top:14px solid #151b1f}#herodiv2{display:none}#up{bottom:60px}@keyframes flattenOut{100%{transform:skew(0, 0) scaleY(1)}}@keyframes slideBottom{0%{height:0;opacity:0}100%{height:150px;opacity:1}}@keyframes slideLeft{0%{width:0;opacity:0}100%{width:90vw;opacity:1}}#updates{overflow:visible;margin-bottom:10px}#updates h2{top:5%;font-size:1em}#updates ul{top:23%}#updates ul li{font-size:14px;padding:0}}\n",""]);const r=a},81571:(n,t,e)=>{"use strict";var i=e(93379),a=e.n(i),r=e(81076);a()(r.Z,{insert:"head",singleton:!1}),r.Z.locals},39574:(n,t,e)=>{"use strict";n.exports=e.p+"741e707e5c9b08a1a3b6.png"},26519:(n,t,e)=>{"use strict";n.exports=e.p+"7482d7c66721fffbdae4.png"},54793:(n,t,e)=>{"use strict";n.exports=e.p+"81cbdbd5a7560432ba07.png"},79406:(n,t,e)=>{"use strict";n.exports=e.p+"2343674d777a8a287498.png"},94085:(n,t,e)=>{"use strict";n.exports=e.p+"165533f73368d00085de.png"},3830:(n,t,e)=>{"use strict";n.exports=e.p+"9a4627e24c80cb900ca7.png"},34899:(n,t,e)=>{"use strict";n.exports=e.p+"f21b22a2aa7718e0b090.png"},49437:(n,t,e)=>{"use strict";n.exports=e.p+"b6e77b560126600fff48.png"},66508:(n,t,e)=>{"use strict";n.exports=e.p+"4637ed9c36724362b11a.png"},83038:(n,t,e)=>{"use strict";n.exports=e.p+"7f75fee37c6632943fe0.png"},53502:(n,t,e)=>{"use strict";n.exports=e.p+"210c6456406bc7b8c064.png"},92376:(n,t,e)=>{"use strict";n.exports=e.p+"4ce0c0a3308c2f84494a.png"},4811:(n,t,e)=>{"use strict";n.exports=e.p+"678bac8c6deab7a99546.png"},85294:(n,t,e)=>{"use strict";n.exports=e.p+"6c3f61c7fc83822ee3d4.png"},70311:(n,t,e)=>{"use strict";n.exports=e.p+"38ebeefc81b0e00db576.png"},16675:(n,t,e)=>{"use strict";n.exports=e.p+"4db30ce1b59b75a3d8df.png"},35850:(n,t,e)=>{"use strict";n.exports=e.p+"98032a965ef39043beb2.png"},62358:(n,t,e)=>{"use strict";n.exports=e.p+"5f0d34b6906a8e394665.png"},66335:(n,t,e)=>{"use strict";n.exports=e.p+"78fe6e310f6a574b2ebd.png"},20127:(n,t,e)=>{"use strict";n.exports=e.p+"f902960a94878ee0da67.png"},69754:(n,t,e)=>{"use strict";n.exports=e.p+"b801bfa48aeb770ce386.png"},81144:(n,t,e)=>{"use strict";n.exports=e.p+"e582da55cf3780ba12d4.png"},40485:(n,t,e)=>{"use strict";n.exports=e.p+"d3adf84a9d9b6dac736a.png"},59820:(n,t,e)=>{"use strict";n.exports=e.p+"b0a9fcf233039d2ac699.png"},88259:(n,t,e)=>{"use strict";n.exports=e.p+"03c68566cbf238c564c8.png"},75687:(n,t,e)=>{"use strict";n.exports=e.p+"d3c89dd3647432ec3447.png"}}]);