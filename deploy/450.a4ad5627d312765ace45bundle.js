(self.webpackChunklrnwebpack=self.webpackChunklrnwebpack||[]).push([[450],{87557:(e,n,r)=>{"use strict";r.d(n,{a:()=>a});var t=r(12850);function a(){var e=document.getElementById("langSel").value,n=document.getElementById("home"),r=t.w_.filter((function(e){return"Home"==e[0]})),a=document.getElementById("database"),c=t.w_.filter((function(e){return"Database"==e[0]})),u=document.getElementById("jobsnav"),i=t.Wu.filter((function(e){return"Jobs"==e[0]})),l=document.getElementById("charsnav"),p=t.Wu.filter((function(e){return"Heroes"==e[0]})),s=document.getElementById("abilsnav"),o=t.Wu.filter((function(e){return"Abilities"==e[0]})),f=document.getElementById("passivesnav"),m=t.Wu.filter((function(e){return"HeroesPassives"==e[0]})),X=document.getElementById("matsnav"),h=t.Wu.filter((function(e){return"Materials"==e[0]})),d=document.getElementById("chaptersnav"),b=t.Wu.filter((function(e){return"Chapters"==e[0]})),g=document.getElementById("gachasnav"),v=t.Wu.filter((function(e){return"Gacha"==e[0]})),k=document.getElementById("glossarynav"),D=t.w_.filter((function(e){return"Glossary"==e[0]})),A=document.getElementById("gamemech"),P=t.w_.filter((function(e){return"GameMechanics"==e[0]})),y=document.getElementById("combos"),S=t.w_.filter((function(e){return"Combos"==e[0]})),B=document.getElementById("unknown"),I=t.w_.filter((function(e){return"Unknowns"==e[0]})),E=document.getElementById("traits"),H=t.w_.filter((function(e){return"Trais"==e[0]})),w=document.getElementById("drules"),C=t.w_.filter((function(e){return"DungeonRules"==e[0]})),R=document.getElementById("guidemain"),T=document.getElementById("guide"),V=t.w_.filter((function(e){return"Guide"==e[0]})),M=document.getElementById("faq"),W=t.w_.filter((function(e){return"FAQ"==e[0]})),L=document.getElementById("credits"),x=t.w_.filter((function(e){return"Credit"==e[0]}));switch(console.log(x),e){case"English":r=r[0][1],c=c[0][1],i=i[0][1],p=p[0][1],o=o[0][1],m=m[0][1],h=h[0][1],b=b[0][1],v=v[0][1],D=D[0][1],P=P[0][1],S=S[0][1],I=I[0][1],H=H[0][1],C=C[0][1],V=V[0][1],W=W[0][1],x=x[0][1];break;case"Chinese":r=r[0][2],c=c[0][2],i=i[0][2],p=p[0][2],o=o[0][2],m=m[0][2],h=h[0][2],b=b[0][2],v=v[0][2],D=D[0][2],P=P[0][2],S=S[0][2],I=I[0][2],H=H[0][2],C=C[0][2],V=V[0][2],W=W[0][2],x=x[0][2];break;case"Chinese(Trad)":r=r[0][3],c=c[0][3],i=i[0][3],p=p[0][3],o=o[0][3],m=m[0][3],h=h[0][3],b=b[0][3],v=v[0][3],D=D[0][3],P=P[0][3],S=S[0][3],I=I[0][3],H=H[0][3],C=C[0][3],V=V[0][3],W=W[0][3],x=x[0][3]}n.innerHTML=r||"Home",a.innerHTML=c||"Database",u.innerHTML=i,l.innerHTML=p,s.innerHTML=o,f.innerHTML=m,X.innerHTML=h,d.innerHTML=b,g.innerHTML=v,k.innerHTML=D||"Glossary",A.innerHTML=P||"Game Mechanics",y.innerHTML=S,B.innerHTML=I,E.innerHTML=H||"Traits",w.innerHTML=C||"Dungeon Ruless",R.innerHTML=V||"Guide",T.innerHTML=V||"Guide",M.innerHTML=W||"FAQ",L.innerHTML=x||"Credits"}},12850:(e,n,r)=>{"use strict";r.d(n,{Zs:()=>Me,J_:()=>ke,Wu:()=>De,Tl:()=>Ae,Xx:()=>Pe,Ve:()=>ye,VH:()=>Se,wP:()=>Be,Ps:()=>Ce,MG:()=>_e,qj:()=>He,Ei:()=>we,T4:()=>Ke,LN:()=>Ue,vF:()=>me,X_:()=>qe,WB:()=>Ee,ur:()=>i,e4:()=>l,QZ:()=>s,tE:()=>p,E:()=>o,pH:()=>f,mY:()=>m,eX:()=>h,zb:()=>d,Bf:()=>b,KI:()=>g,L6:()=>v,zd:()=>k,UE:()=>D,OR:()=>A,JN:()=>y,Vg:()=>B,g_:()=>P,gT:()=>S,lR:()=>L,CC:()=>x,dJ:()=>J,a9:()=>G,wC:()=>F,w_:()=>t}),r.g.fetch=r(83300);var t,a,c,u,i,l,p,s,o,f,m,X,h,d,b,g,v,k,D,A,P,y,S,B,I,E,H,w,C,R,T,V,M,W,L,x,G,J,F,N,_,j,O,z,Q,U,q,K,Z,Y,$,ee,ne,re,te,ae,ce,ue,ie,le,pe,se,oe,fe,me,Xe,he,de,be,ge=r(62538),ve="1B2olPb1sTgFSskGBC68czBBt1ICh2jGmQkIKOi_c39w",ke=[],De=[],Ae=[],Pe=[],ye=[],Se=[],Be=[],Ie=[],Ee=[],He=[],we=[],Ce=[],Re=[],Te=[],Ve=[],Me={wiki:function(){return ge.raw(ve,15).then((function(e){return e.data})).then((function(e){e.shift(),e.shift();var n=e.map((function(e,n){if("Sentences"==e[0])return n}));n=n.find((function(e){return null!=e})),t=e.slice(0,n)}))},skills:function(){return ge.raw(ve,3).then((function(e){return e.data})).then((function(e){e.shift(),e.shift();var n=e.map((function(e,n){if("Skills Titles"==e[0])return n}));n=n.find((function(e){return null!=e}));var r=e.map((function(e,n){if("Skills Descriptions"==e[0])return n}));r=r.find((function(e){return null!=e}));var t=e.map((function(e,n){if("Buffs, Debuffs, Applies & Passives Descriptions"==e[0])return n}));t=t.find((function(e){return null!=e}));var a=e.map((function(e,n){if("Ability's Skill Unit Term/Descriptions"==e[0])return n}));a=a.find((function(e){return null!=e}));var c=e.map((function(e,n){if("Passive's Skill Unit Term/Desciptions"==e[0])return n}));c=c.find((function(e){return null!=e})),Ce=e.slice(0,r),Ie=e.slice(r,t),Ve=e.slice(t,a),console.log(Ie),(Re=e.slice(a,c)).shift(),(Te=e.slice(c)).shift()}))},characters:function(){return ge.raw(ve,9).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),Se=e}))},chapters:function(){return ge.raw(ve,11).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),Be=e,console.log(Be)}))},rules:function(){return ge.raw(ve,13).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),He=e}))},traits:function(){return ge.raw(ve,12).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),we=e}))},materials:function(){return ge.raw(ve,7).then((function(e){return e.data})).then((function(e){e.shift(),e.shift();var n=e.map((function(e,n){if("Description"==e[0])return n}));n=n.find((function(e){return null!=e})),(ke=e).length=n}))},words:function(){return ge.raw(ve,1).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),De=e}))},jobs:function(){return ge.raw(ve,8).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),Ae=e}))},abils:function(){return ge.raw(ve,5).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),Pe=e}))},passives:function(){return ge.raw(ve,6).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),e.pop(),ye=e}))}},We=[],Le=[],xe=[],Ge=[],Je=[],Fe=["Max HP","Strength","Agility","Intelligence"],Ne=["Fire","Water","Earth","Wind","Thunder","Dark","Light"],_e=[];function je(e,n){return e.filter((function(e){return e[0]==n}))}function Oe(e,n,r,t,a,c,u,i){return(e=(e=(e=(e=(e=(e=0!=n?(e=e.replace(/\{0\}/g,n)).replace(/\{1\}/g,r):e.replace(/\{0\}/g,r)).replace(/\{1\}/g,r)).replace(/\{2\}/g,t)).replace(/\{3\}/g,a)).replace(/\{4\}/g,c)).replace(/\{5\}/g,u)).replace(/\{6\}/g,i)}function ze(e,n,r,t){return[e,Oe(n[1],r[1]||r,"X%",(r[1]||r)+" "+(t[1]||t)),Oe(n[2],r[2]||r,"X%",(r[2]||r)+" "+(t[2]||t)),Oe(n[3],r[3]||r,"X%",(r[3]||r)+" "+(t[3]||t))]}function Qe(e,n,r,t){var a=[e];return n.map((function(e,n){a.push(e.replace(r,t[n]||t))})),a.splice(1,1),a}var Ue=[],qe=[],Ke={abilities:function(){return ge.raw(ve,3).then((function(e){return e.data})).then((function(e){a=De.filter((function(e){return"Random"==e[0]}))[0],c=De.filter((function(e){return"All"==e[0]}))[0],u=De.filter((function(e){return"HandDraw"==e[0]}))[0];var n=je(Ce,"Combo")[0];switch(se=je(Ce,"SkillStackMaster")[0],oe=je(Ce,"NormalMaster")[0],fe=null==je(Ce,"XMaster")[0]?"":je(Ce,"XMaster")[0].map((function(e){return e.replace(/\{0\}/g,"")})),i=je(Ce,"Fire")[0],l=je(Ce,"Water")[0],p=je(Ce,"Earth")[0],s=je(Ce,"Wind")[0],o=je(Ce,"Thunder")[0],f=je(Ce,"Dark")[0],m=je(Ce,"Light")[0],X=je(Ce,"Element")[0],We=[i,l,p,s,o,f,m,X],h=je(Ce,"Burn")[0],d=je(Ce,"Chill")[0],b=je(Ce,"Seed")[0],g=je(Ce,"Dizzy")[0],v=je(Ce,"Paralysis")[0],k=je(Ce,"Depress")[0],D=je(Ce,"Blind")[0],A=je(Ce,"Venom")[0],P=je(Ce,"Restrain")[0],y=je(Ce,"Insane")[0],S=je(Ce,"Injury")[0],B=je(Ce,"Bleed")[0],I=je(Ce,"Confuse")[0],E=je(Ce,"Slack")[0],Le=[h,d,b,g,v,k,D,S,B,I,E],xe=[A,y,P],Y=je(Ce,"EStatusEffect")[0],$=je(Ce,"StatDebuff")[0],H=je(Ce,"Charge")[0],w=je(Ce,"Guard")[0],C=je(Ce,"StackCharge")[0],R=je(Ce,"StackGuard")[0],V=je(Ce,"Rage")[0],M=je(Ce,"Instinct")[0],T=je(Ce,"Certain")[0],L=je(Ce,"MaxHP")[0],x=je(Ce,"Strength")[0],G=je(Ce,"Agility")[0],J=je(Ce,"Intelligence")[0],Ge.push(L,x,G,J),_=je(Ce,"Buff")[0],j=null==je(Ce,"XActBuff")[0]?"":je(Ce,"XActBuff")[0].map((function(e){return e.replace(/\{0\}/g,"")})),O=null==je(Ce,"XStatBoost")[0]?"":je(Ce,"XStatBoost")[0].map((function(e){return e.replace(/\{0\}/g,"")})),z=je(Ce,"Debuff")[0],Q=null==je(Ce,"XActDebuff")[0]?"":je(Ce,"XActDebuff")[0].map((function(e){return e.replace(/\{0\}/g,"")})),U=null==je(Ce,"XStatNerf")[0]?"":je(Ce,"XStatNerf")[0].map((function(e){return e.replace(/\{0\}/g,"")})),q=null==je(Ce,"XStatDrain")[0]?"":je(Ce,"XStatDrain")[0].map((function(e){return e.replace(/\{0\}/g,"")})),K=null==je(Ce,"XAbsorb")[0]?"":je(Ce,"XAbsorb")[0].map((function(e){return e.replace(/\{0\}/g,"")})),Z=je(Ce,"Reflect")[0],null==je(Ce,"XImmune")[0]||je(Ce,"XImmune")[0].map((function(e){return e.replace(/\{0\}/g,"")})),ee=je(Ce,"ProtectiveHeal")[0],ne=je(Ce,"AggressiveHeal")[0],re=null==je(Ce,"XVulnerable")[0]?"":je(Ce,"XVulnerable")[0].map((function(e){return e.replace(/\{0\}/g,"")})),te=je(Ce,"XProtectEnhance")[0],ce=je(Ce,"SecondChance")[0],F=je(Ce,"Protect")[0],ue=je(Ce,"Invulnerable")[0],ie=null==je(Ce,"XActionPoint")[0]?"":je(Ce,"XActionPoint")[0].map((function(e){return e.replace(/\{0\}/g,"")})),le=null==je(Ce,"XActionPointNext")[0]?"":je(Ce,"XActionPointNext")[0].map((function(e){return e.replace(/\{0\}/g,"")})),pe=null==je(Ce,"XDrawNext")[0]?"":je(Ce,"XDrawNext")[0].map((function(e){return e.replace(/\{0\}/g,"")})),N=null==je(Ce,"XFinale")[0]?"":je(Ce,"XFinale")[0].map((function(e){return e.replace(/\{0\}/g,"")})),null==je(Ce,"XEnchant")[0]||je(Ce,"XEnchant")[0].map((function(e){return e.replace(/\{0\}/g,"")})),W=je(Ce,"LifeSteal")[0],ae=je(Ce,"Curse")[0],Xe=je(Ce,"Humanoid")[0],he=je(Ce,"Creature")[0],de=je(Ce,"Spirit")[0],be=je(Ce,"Matter")[0],_e=[Xe,he,de,be],Je=[x,G,J,L,F,i,l,p,o,s,f,m,X,Xe,he,de,be,z,n,ae,H,w,W,Z,B,S],function(){me=["Humanoid","Creature","Spirit","Matter","LifeSteal","TurnCharge","PracticePerfect","FocusEnergy","NegativePower","ComboBlend","Scheduled","AutoFire","Overloaded","LastResort","Gamble","Exhaust","Curse"];var e=null==je(Ce,"XSynergy")[0]?"":je(Ce,"XSynergy")[0].map((function(e){return e.replace(/\{0\}/g,"").replace("X","")}));me=me.map((function(e){return je(Ce,e)[0]})),Ge.map((function(n,r){var t=n.map((function(n,r){return n+" "+e[r]}));me.push(t)}))}(),me=me.map((function(e){return["ComboBlend"==e[0]?e[0]="Combo Blend":e[0],e[1],e[2],e[3]]})),Re.map((function(e){switch(e[0]){case"EElementXAttackDescr":var n=ze("Fire Attack",e,i,N),r=ze("Water Attack",e,l,N),t=ze("Earth Attack",e,p,N),u=ze("Wind Attack",e,s,N),V=ze("Thunder Attack",e,o,N),M=ze("Dark Attack",e,f,N),W=ze("Light Attack",e,m,N),O=ze("Element Attack",e,X,N);Ue.push(n,r,t,u,V,M,W,O);break;case"VRIDamageXDescr":var U=ze("Venom Explode",e,A,"20%"),q=ze("Restrain Explode",e,P,"20%"),K=ze("Insane Explode",e,y,"20%");Ue.push(U,q,K);break;case"DebuffRemoveXAttackDescr":var Z=["Removal attack",e[1],e[2],e[3]].map((function(e){return e.replace("{0}","X%")}));Ue.push(Z);break;case"EElementXHealDescr":var $=ze("Fire Heal",e,i,"X%"),ee=ze("Water Heal",e,l,"X%"),ne=ze("Earth Heal",e,p,"X%"),ae=ze("Wind Heal",e,s,"X%"),se=ze("Thunder Heal",e,o,"X%"),oe=ze("Dark Heal",e,f,"X%"),fe=ze("Light Heal",e,m,"X%"),me=ze("Elemental Heal",e,X,"X%");Ue.push($,ee,ne,ae,se,oe,fe,me);break;case"BuffRemoveXHealDescr":var Xe=ze("Removal heal",e,F,ce);Ue.push(Xe);break;case"DrawXAbilityDescr":var he=["Draw Ability",e[1],e[2],e[3]].map((function(e){return e.replace("{0}","X")}));Ue.push(he);break;case"ForceXTurnPassDescr":var de=["Pass Turn",e[1],e[2],e[3]].map((function(e){return e.replace("{0}","X")}));Ue.push(de);break;case"DoubleActionBuffDescr":var be=["Double Action Buff",e[1],e[2],e[3]];Ue.push(be);break;case"DoubleBuffDescr":var ge=["Double Buff",e[1],e[2],e[3]];Ue.push(ge);break;case"DoubleDebuffDescr":var ve=["Double Debuffs",e[1],e[2],e[3]];Ue.push(ve);break;case"DoubleVulnDescr":var ke=["Double Vulnerable",e[1],e[2],e[3]];Ue.push(ke);break;case"StatVuln":case"ElementVuln":break;case"RecoverXAbilityDescr":var De=Qe("Recover skill",e,"{0}","1");Ue.push(De);break;case"LoseXMaxHPDescr":var Ae=Qe("Sacrifice HP",e,"{1}",L).map((function(e){return e.replace("{0}","10x%")}));Ue.push(Ae);break;case"DiscardXDescr":var Pe=Qe("Discard hand",e,"{0}","1");Ue.push(Pe);break;case"FarewellXDescr":var ye=Qe("Fare Well",e,"{0}","99999");Ue.push(ye);break;case"BuffSwapXDescr":var Se=Qe("Swap Buffs",e,"{0}",F).map((function(e,n){return e.replace("{1}",ue[n])}));Se=Se.map((function(e,n){return e.replace("{2}",ce[n])})),Ue.push(Se);break;case"DebuffSwapDescr":var Be=["Swap Debuffs",e[1],e[2],e[3]];Ue.push(Be);break;case"CurseStartXDebuffDescr":var Ie=ze("Weak MaxHP (Ability become Passive)",e,"X",L).map((function(e,n){return e.replace("X%",L[n]+" Debuff")})),Ee=ze("Weak Strength (Ability become Passive)",e,"X",x).map((function(e,n){return e.replace("X%",x[n]+" Debuff")})),He=ze("Weak Agility (Ability become Passive)",e,"X",G).map((function(e,n){return e.replace("X%",G[n]+" Debuff")})),we=ze("Weak Intelligence (Ability become Passive)",e,"X",J).map((function(e,n){return e.replace("X%",J[n]+" Debuff")})),Ce=ze("Burned (Ability become Passive)",e,"X",h).map((function(e,n){return e.replace("X%",h[n])})),Re=ze("Chill (Ability become Passive)",e,"X",d).map((function(e,n){return e.replace("X%",d[n])})),Te=ze("Seeded (Ability become Passive)",e,"X",b).map((function(e,n){return e.replace("X%",b[n])})),Ve=ze("Dizzy (Ability become Passive)",e,"X",g).map((function(e,n){return e.replace("X%",g[n])})),Me=ze("Paralysed (Ability become Passive)",e,"X",v).map((function(e,n){return e.replace("X%",v[n])})),Je=ze("Depress (Ability become Passive)",e,"X",k).map((function(e,n){return e.replace("X%",k[n])})),_e=ze("Blinded (Ability become Passive)",e,"X",D).map((function(e,n){return e.replace("X%",D[n])})),je=ze("Bleeding (Ability become Passive)",e,"X",B).map((function(e,n){return e.replace("X%",B[n])})),Oe=ze("Injured (Ability become Passive)",e,"X",S).map((function(e,n){return e.replace("X%",S[n])})),qe=ze("Insane (Ability become Passive)",e,"X",y).map((function(e,n){return e.replace("X%",y[n])})),Ke=ze("Restrained (Ability become Passive)",e,"X",P).map((function(e,n){return e.replace("X%",P[n])})),Ze=ze("Venomed (Ability become Passive)",e,"X",A).map((function(e,n){return e.replace("X%",A[n])})),Ye=ze("Venomed (Ability become Passive)",e,"X",I).map((function(e,n){return e.replace("X%",I[n])})),$e=ze("Venomed (Ability become Passive)",e,"X",E).map((function(e,n){return e.replace("X%",E[n])})),en=ze("Cursed (Ability become Passive)",e,"X",a).map((function(e,n){return e.replace("X%",a[n]+" "+Y[n])}));Ue.push(Ce,Re,Te,Ve,Me,Je,_e,en,je,Oe,qe,Ke,Ze,Ye,$e,Ie,Ee,He,we);break;case"DiscardAbilityXAttackDescr":var nn=ze("Discard HP Attack",e,L,"X"),rn=ze("Discard Str Attack",e,x,"X"),tn=ze("Discard Agi Attack",e,G,"X"),an=ze("Discard Int Attack",e,J,"X");Ue.push(nn,rn,tn,an);break;case"RemoveXDebuffsJoin":var cn=ze("Burn Remove",e,h,N),un=ze("Chill Remove",e,d,N),ln=ze("Seed Remove",e,b,N),pn=ze("Dizzy Remove",e,g,N),sn=ze("Paralysis Remove",e,v,N),on=ze("Depress Remove",e,k,N),fn=ze("Blind Remove",e,D,N),mn=ze("Bleed Remove",e,B,N),Xn=ze("Injury Remove",e,S,N),hn=ze("Insane Remove",e,y,N),dn=ze("Restrain Remove",e,P,N),bn=ze("Venom Remove",e,A,N),gn=ze("All Elemental Status Effect Remove",e,X,N),vn=ze("Debuff Remove",e,"X",N).map((function(e,n){return e.replace("X",c[n]+" "+z[n]+", "+re[n])}));Ue.push(cn,un,ln,pn,sn,on,fn,mn,Xn,hn,dn,bn,gn,vn);break;case"ApplyXSelfJoin":var kn=ze("Charge",e,H,N),Dn=ze("Guard",e,w,N),An=ze("Stack Charge",e,C,N),Pn=ze("Stack Guard",e,R,N),yn=ze("Apply Certain",e,"X",N).map((function(e,n){return e.replace("X","X "+T[n])})),Sn=ze("Pure Element",e,X,N),Bn=ze("Protect Enhance",e,F,te);Ue.push(kn,Dn,An,Pn,yn,Sn,Bn),Ne.map((function(n,r){var t=We.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" Element",c=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+X[n])}));c.splice(0,1,a),Ue.push(c)}));var In=ze("Paralyed On Self",e,"X",te).map((function(e,n){return e.replace("X","X "+v[n])})),En=ze("Burned On Self",e,"X",te).map((function(e,n){return e.replace("X","X "+h[n])})),Hn=ze("Seeded On Self",e,"X",te).map((function(e,n){return e.replace("X","X "+b[n])})),wn=ze("Bleeding On Self",e,"X",te).map((function(e,n){return e.replace("X","X "+B[n])})),Cn=ze("Blinded On Self",e,"X",te).map((function(e,n){return e.replace("X","X "+D[n])})),Rn=ze("Injured On Self",e,"X",te).map((function(e,n){return e.replace("X","X "+S[n])}));Ue.push(In,En,Hn,wn,Cn,Rn),Le.map((function(n,r){var t=Le.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" On Self",c=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+X[n])}));c.splice(0,1,a),Ue.push(c)})),xe.map((function(n,r){var t=xe.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" On Self",c=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+X[n])}));c.splice(0,1,a),Ue.push(c)})),Fe.map((function(n,r){if(r>0){var t=Ge.filter((function(e){return e.includes(n)||e==n}))[0],a="Debuff "+t[1]+" On Self",c=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+z[n])}));c.splice(0,1,a),Ue.push(c)}}));var Tn=ze("Cursed On Self",e,"X",te).map((function(e,n){return e.replace("X","X "+a[n]+" "+Y[n])}));Ue.push(Tn);break;case"ApplyXOpponentJoin":var Vn=Qe("HP Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+L[n]+" Vulnerable")})),Mn=Qe("Strength Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+x[n]+" "+re[n])})),Wn=Qe("Agility Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+G[n]+" "+re[n])})),Ln=Qe("Intelligence Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+J[n]+" "+re[n])})),xn=Qe("Protect Pierce",e,"{0}","X").map((function(e,n){return e.replace("X","X "+F[n]+" "+re[n])})),Gn=Qe("Fire Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+i[n]+" "+re[n])})),Jn=Qe("Water Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+l[n]+" "+re[n])})),Fn=Qe("Earth Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+p[n]+" "+re[n])})),Nn=Qe("Wind Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+s[n]+" "+re[n])})),_n=Qe("Thunder Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+o[n]+" "+re[n])})),jn=Qe("Dark Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+f[n]+" "+re[n])})),On=Qe("Light Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+m[n]+" "+re[n])})),zn=Qe("Injury Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+S[n]+" "+re[n])})),Qn=Qe("Bleed Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+B[n]+" "+re[n])})),Un=Qe("Inflict Random status effects",e,"{0}","X").map((function(e,n){return e.replace("X","X "+a[n]+" "+Y[n])}));Ue.push(Gn,Jn,Fn,Nn,_n,jn,On,zn,Qn,Un,Vn,Mn,Wn,Ln,xn),Fe.map((function(n,r){var t=Ge.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" Debuff",c=e.map((function(e,n){return e.replace("{0}","X "+t[n]+" "+z[n])}));c.splice(0,1,a),Ue.push(c)})),Le.map((function(n,r){var t=Le.filter((function(e){return e.includes(n)||e==n}))[0],a="Inflict "+t[1],c=e.map((function(e,n){return e.replace("{0}","X "+t[n])}));c.splice(0,1,a),Ue.push(c)})),xe.map((function(n,r){var t=xe.filter((function(e){return e.includes(n)||e==n}))[0],a="Inflict "+t[1],c=e.map((function(e,n){return e.replace("{0}","X "+t[n]+" "+z[n])}));c.splice(0,1,a),Ue.push(c)}));break;case"GainXProtectJoin":var qn=ze("HP Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+L[n]+" "+F[n]).replace("{1}","")})),Kn=ze("Strength Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+x[n]+" "+F[n]).replace("{1}","")})),Zn=ze("Agility Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+G[n]+" "+F[n]).replace("{1}","")})),Yn=ze("Intelligence Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+J[n]+" "+F[n]).replace("{1}","")})),$n=ze("Raw Protect",e,!1,"X").map((function(e,n){return e.replace("X","X  "+F[n]).replace("{1}","")})),er=Qe("Second Chance",e,"{0}","X").map((function(e,n){return e.replace("{1}",ce[n])})),nr=Qe("Invulnerable",e,"{0}","X").map((function(e,n){return e.replace("{1}",ue[n])})),rr=Qe("Gain AP",e,"{0}","X").map((function(e,n){return e.replace("{1}",ie[n])})),tr=Qe("Gain AP Next",e,"{0}","X").map((function(e,n){return e.replace("{1}",le[n])})),ar=Qe("Draw Ability Next",e,"{0}","X").map((function(e,n){return e.replace("{1}",pe[n])}));Ue.push(qn,Kn,Zn,Yn,rr,tr,ar,$n,er,nr),Fe.map((function(n){var r=Ge.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Buff",a=e.map((function(e,n){return e.replace("{0}","X").replace("{1}",r[n]+" "+_[n])}));a.splice(0,1,t),Ue.push(a)})),Fe.map((function(n){var r=Ge.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Buff",a=e.map((function(e,n){return e.replace("{0}","X").replace("{1}",r[n]+" "+j[n])}));a.splice(0,1,t),Ue.push(a)})),Fe.map((function(n){var r=Ge.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Debuff",a=e.map((function(e,n){return e.replace("{0}","X").replace("{1}",r[n]+" "+Q[n])}));a.splice(0,1,t),Ue.push(a)})),Ne.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Buff",a=e.map((function(e,n){return e.replace(/\{0\}/g,"X").replace("{1}",r[n]+" "+j[n])}));a.splice(0,1,t),Ue.push(a)}));break;case"DealXDamageJoin":var cr=ze("Raw Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X")})),ur=ze("HP Attack",e,!1,"X% ").map((function(e,n){return e.replace("X%","X% "+L[n])})),ir=ze("Strength Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+x[n])})),lr=ze("Agility Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+G[n])})),pr=ze("Intelligence Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+J[n])})),sr=ze("Protect Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+F[n])}));Ue.push(cr,ur,ir,lr,pr,sr);break;case"HealXJoin":var or=ze("Raw Heal",e,!1,"X"),fr=ze("HP Heal",e,!1,"X% ").map((function(e,n){return e.replace("X%","X% "+L[n])})),mr=ze("Strength Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+x[n])})),Xr=ze("Agility Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+G[n])})),hr=ze("Intelligence Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+J[n])})),dr=ze("Protect Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+F[n])}));Ue.push(or,fr,mr,Xr,hr,dr,["Do nothing","Do nothing","Do nothing","Do nothing"])}})),document.getElementById("langSel").value){case"English":L=L[1],x=x[1],G=G[1],J=J[1],F=F[1],i=i[1],l=l[1],p=p[1],s=s[1],o=o[1],f=f[1],m=m[1],h=h[1],d=d[1],b=b[1],g=g[1],v=v[1],k=k[1],D=D[1],A=A[1],y=y[1],B=B[1],P=P[1],S=S[1];break;case"Chinese":L=L[2],x=x[2],G=G[2],J=J[2],F=F[2],i=i[2],l=l[2],p=p[2],s=s[2],o=o[2],f=f[2],m=m[2],h=h[2],d=d[2],b=b[2],g=g[2],v=v[2],k=k[2],D=D[2],A=A[2],y=y[2],B=B[2],P=P[2],S=S[2];break;case"Chinese(Trad)":L=L[3],x=x[3],G=G[3],J=J[3],F=F[3],i=i[3],l=l[3],p=p[3],s=s[3],o=o[3],f=f[3],m=m[3],h=h[3],d=d[3],b=b[3],g=g[3],v=v[3],k=k[3],D=D[3],A=A[3],y=y[3],B=B[3],P=P[3],S=S[3]}}))},glossary:function(){return ge.raw(ve,3).then((function(e){return e.data})).then((function(e){Me.skills(),F=je(Ce,"Protect")[0],Ie.shift(),ie=null==je(Ce,"XActionPoint")[0]?"":je(Ce,"XActionPoint")[0],le=null==je(Ce,"XActionPointNext")[0]?"":je(Ce,"XActionPointNext")[0],pe=null==je(Ce,"XDrawNext")[0]?"":je(Ce,"XDrawNext")[0],le.splice(0,1,"Gain AP Next"),le=le.map((function(e){return e.replace("{0}","+X")})),pe.splice(0,1,"Draw Ability Next"),pe=pe.map((function(e){return e.replace("{0}","+X")})),Ee.push(le,pe),Ie.map((function(e){switch(e[0]){case"XActBuffDescr":Fe.map((function(n,r){var t=Ge.filter((function(e){return e.includes(n)||e==n}))[0],a=e.map((function(e,n){return e.replace("{0}",t[n])}));(a=(a=(a=(a=a.map((function(e,n){return e.replace("{1}",F[n])}))).map((function(e,n){return e.replace("{2}","5X%")}))).map((function(e){return e.split("。")[0]}))).map((function(e){return e.split(".")[0]}))).splice(0,1,n+" Action Buff"),Ee.push(a)}));var n=e.map((function(e,n){return e.replace("{0}",F[n])}));(n=(n=(n=(n=n.map((function(e,n){return e.replace("{1}",F[n])}))).map((function(e,n){return e.replace("{2}","5X%")}))).map((function(e){return e.split("。")[0]}))).map((function(e){return e.split(".")[0]}))).splice(0,1,"Protect Enhance"),Ee.push(n);break;case"XDebuffDescr":Fe.map((function(n,r){var t=Ge.filter((function(e){return e.includes(n)||e==n}))[0],a=e.map((function(e,n){return e.replace("{0}",t[n])}));(a=(a=a.map((function(e,n){return e.replace("{1}","10%")}))).map((function(e,n){return e.replace("{2}","3").replace("{3}","5")}))).splice(0,1,n+" Debuff"),Ee.push(a)}));case"ChargeXDescr":var r=e.map((function(e,n){return e.replace("{0}","30%").replace("{1}","50%")}));r.splice(0,1,"Charge"),Ee.push(r);break;case"GuardXDescr":var t=e.map((function(e,n){return e.replace("{0}","30%").replace("{1}","50%")}));t.splice(0,1,"Guard"),Ee.push(t);break;case"StackChargeXDescr":var a=e.map((function(e,n){return e.replace("{0}","15X%").replace("{1}","500%").replace("{2}","800%")}));a.splice(0,1,"Stack Charge"),Ee.push(a);break;case"StackGuardXDescr":var c=e.map((function(e,n){return e.replace("{0}","30%").replace("{1}","40%").replace("{2}","10%")}));c.splice(0,1,"Stack Guard"),Ee.push(c);break;case"XEActBuffDescr":Ne.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0][1]+" Action Buff",t=e.map((function(e,n){return e.replace("{0}",r).replace("{1}","5X%").replace("{2}","15").replace("{3}","20")}));t.splice(0,1,r),Ee.push(t)}));break;case"FWTEWElementXDescr":var u,X;Ne.map((function(n){switch(n){case"Fire":u=h,X=s;break;case"Water":u=d,X=i;break;case"Earth":u=b,X=o;break;case"Thunder":u=v,X=l;break;case"Wind":u=g,X=p;break;case"Light":u=D,X=f;break;case"Dark":u=k,X=m}var r=We.filter((function(e){return e.includes(n)||e==n}))[0][1]+" Element",t=e.map((function(e,r){return e.replaceAll(/\{0\}/gi,"5X%").replaceAll(/\{1\}/gi,u).replaceAll(/\{2\}/gi,X).replaceAll(/\{3\}/gi,n).replaceAll(/\{4\}/gi,"5").replaceAll(/\{5\}/gi,"10").replaceAll(/\{6\}/gi,X)}));t.splice(0,1,r),Ee.push(t)}));break;case"XBuffDescr":Fe.map((function(n,r){var t=Ge.filter((function(e){return e.includes(n)||e==n}))[0],a=e.map((function(e,n){return e.replace("{0}",t[n])}));(a=(a=a.map((function(e,n){return e.replace("{1}","10X%")}))).map((function(e,n){return e.replace("{2}","3").replace("{3}","5")}))).splice(0,1,n+" Buff"),Ee.push(a)}));break;case"BurnXDescr":var A=e.map((function(e,n){return e.replace("{0}","5%").replace("{1}",L[n]).replace("{2}",i).replace("{3}","3").replace("{4}","5")}));A.splice(0,1,"Burned"),Ee.push(A);break;case"ChillXDescr":var P=e.map((function(e,n){return e.replace(/\{0\}/gi,"1").replace(/\{1\}/gi,l).replace(/\{2\}/gi,"2")}));P.splice(0,1,"Chilled"),Ee.push(P);break;case"ParalysisXDescr":var y=e.map((function(e,n){return e.replace(/\{0\}/gi,"10%").replace(/\{1\}/gi,o).replace(/\{2\}/gi,"3").replace(/\{3\}/gi,"5")}));y.splice(0,1,"Paralyzed"),Ee.push(y);break;case"SeedXDescr":var I=e.map((function(e,n){return e.replace(/\{0\}/gi,p).replace(/\{1\}/gi,"20%").replace(/\{2\}/gi,"3").replace(/\{3\}/gi,"5")}));I.splice(0,1,"Seeded"),Ee.push(I);break;case"DizzyXDescr":var E=e.map((function(e,n){return e.replace(/\{0\}/gi,"10%").replace(/\{1\}/gi,s).replace(/\{2\}/gi,"3").replace(/\{3\}/gi,"5")}));E.splice(0,1,"Dizzy"),Ee.push(E);break;case"BlindXDescr":var H=e.map((function(e,n){return e.replace(/\{0\}/gi,"15%").replace(/\{1\}/gi,m).replace(/\{2\}/gi,"3").replace(/\{3\}/gi,"5")}));H.splice(0,1,"Blinded"),Ee.push(H);break;case"DepressXDescr":var w=e.map((function(e,n){return e.replace(/\{0\}/gi,F[n]).replace(/\{1\}/gi,"15%").replace(/\{2\}/gi,f).replace(/\{3\}/gi,"3").replace(/\{4\}/gi,"5")}));w.splice(0,1,"Depressd"),Ee.push(w);break;case"BleedXDescr":var C=e.map((function(e,n){return e.replace(/\{0\}/gi,"1%").replace(/\{1\}/gi,L).replace(/\{2\}/gi,"4").replace(/\{3\}/gi,"7")}));C.splice(0,1,"Bleeding"),Ee.push(C);break;case"InjuryXDescr":var R=e.map((function(e,n){return e.replace(/\{0\}/gi,"3%").replace(/\{1\}/gi,"8").replace(/\{2\}/gi,"15")}));R.splice(0,1,"Injured"),Ee.push(R);break;case"VRIXDescr":xe.map((function(n){var r=e.map((function(e){return e.replace("{0}","10%").replace("{2}","25").replace("{3}","40")}));"Venom"==n[0]&&(r=r.map((function(e,n){return e.replace("{1}",x)}))).splice(0,1,"Venomed"),"Restrain"==n[0]&&(r=r.map((function(e,n){return e.replace("{1}",G)}))).splice(0,1,"Restrained"),"Insane"==n[0]&&(r=r.map((function(e,n){return e.replace("{1}",J)}))).splice(0,1,"Insane"),Ee.push(r)}));break;case"ProtectXDescr":var T=e.map((function(e,n){return e.replace(/\{0\}/gi,"50%").replace(/\{1\}/gi,L).replace(/\{2\}/gi,"80%")}));T.splice(0,1,"Protect"),Ee.push(T);break;case"SecondChanceXDescr":var V=e.map((function(e,n){return e.replace(/\{0\}/gi,"10%").replace(/\{1\}/gi,"2")}));V.splice(0,1,"Second Chance"),Ee.push(V);break;case"StatVulnXDescr":Fe.map((function(n,r){var t=Ge.filter((function(e){return e.includes(n)||e==n}))[0],a=e.map((function(e,n){return e.replace("{0}","5%")}));(a=(a=a.map((function(e,n){return e.replace("{1}",t[n])}))).map((function(e,n){return e.replace("{2}","10")}))).splice(0,1,n+" Vulnerable"),Ee.push(a)}));break;case"ProtectPierceXDescr":var M=e.map((function(e,n){return e.replace(/\{0\}/gi,"10%").replace(/\{1\}/gi,F[n]).replace("{2}","10")}));M.splice(0,1,"Protect Pirece"),Ee.push(M);break;case"FTEWLDVulnXDescr":var W;Ne.map((function(n){if("Water"!=n){switch(n){case"Fire":W=h;break;case"Water":W=d;break;case"Earth":W=b;break;case"Thunder":W=v;break;case"Wind":W=g;break;case"Light":W=D;break;case"Dark":W=k}var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Vulnerable",a=e.map((function(e,n){return e.replaceAll(/\{0\}/gi,"5%").replaceAll(/\{1\}/gi,r[n]).replaceAll(/\{2\}/gi,W).replaceAll(/\{3\}/gi,"5%").replaceAll(/\{4\}/gi,"10")}));a.splice(0,1,t),Ee.push(a)}}));break;case"WaterVulnXDescr":var N=e.map((function(e,n){return e.replace(/\{0\}/gi,"5%").replace(/\{1\}/gi,l).replace("{2}",d).replace("{3}","2")}));N.splice(0,1,"Water Vulnerable"),Ee.push(N);break;case"BleedVulnXDescr":var _=e.map((function(e,n){return e.replace(/\{0\}/gi,B).replace(/\{1\}/gi,"3")}));_.splice(0,1,"Bleed Vulnerable"),Ee.push(_);break;case"InjuryVulnXDescr":var j=e.map((function(e,n){return e.replaceAll(/\{0\}/gi,S).replace(/\{1\}/gi,"3")}));j.splice(0,1,"Injury Vulnerable"),Ee.push(j);break;case"InvulnerableXDescrB":var O=e.map((function(e,n){return e.replace(/\{0\}/gi,"X")}));O.splice(0,1,"Invulnerable"),Ee.push(O);break;case"SuddenDeathDescr":var z=e.map((function(e,n){return e.replace(/\{0\}/gi,F[n])}));z.splice(0,1,"Sudden Death"),Ee.push(z)}}))}))},passives:function(){return ge.raw(ve,3).then((function(e){return e.data})).then((function(e){Me.skills(),F=je(Ce,"Protect")[0],A=je(Ce,"Venom")[0],y=je(Ce,"Insane")[0],P=je(Ce,"Restrain")[0],Te.map((function(e){switch(null==qe[0]||qe[0].jobon,e[0]){case"JobIsOn":qe.push({jobon:e});break;case"DamageMitigateXDescrP":var n=e.map((function(e){return e.replace("{0}","10X%")}));(n=n.map((function(e){return e.replace("{1}","")}))).splice(0,1,"Damage Mitigate"),qe.push(n);break;case"GainXPassiveJoin":Fe.map((function(n){var r=Ge.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Boost",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+O[n])}));a.splice(0,1,t),qe.push(a);var c=r[1]+" Drain",u=e.map((function(e,n){return e.replace("{0}","X "+r[n]+q[n])}));u.splice(0,1,c),qe.push(u)})),Fe.map((function(n){var r=Ge.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Nerf",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+U[n])}));a.splice(0,1,t),qe.push(a)})),xe.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Absorb",a=e.map((function(e,n){return e.replace("{0}",r[n]+K[n])}));a.splice(0,1,t),qe.push(a)}));var r=["Protective Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+ee[n])})),t=["Aggressive Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+ne[n])})),c=["Rage",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+V[n])})),u=["Instinct",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+M[n])}));qe.push(r,t,c,u);break;case"ApplyXReflectJoin":Le.map((function(n){var r=Le.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Reflect",a=e.map((function(e,n){return e.replace("{0}",r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),qe.push(a)}));var i=["Protect Reflect",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+ee[n])})),l=["Status Effects Reflect",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+Y[n])}));qe.push(i,l);break;case"ApplyXCounterJoin":Fe.map((function(n){var r=Ge.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Reflect",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),qe.push(a)})),xe.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Reflect",a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),qe.push(a)}));break;case"ImmuneToXJoin":Le.map((function(n){var r=Le.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Immune",a=e.map((function(e,n){return e.replace("{0}",r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),qe.push(a)})),xe.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Immune",a=e.map((function(e,n){return e.replace("{0}",r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),qe.push(a)}));var p=["Debuff Immnue",e[1],e[2],e[3]];p=(p=p.map((function(e,n){return e.replace("{0}",$[n])}))).map((function(e,n){return e.replace("{1}","")}));var s=["Element Status Immnue",e[1],e[2],e[3]];s=(s=s.map((function(e,n){return e.replace("{0}",Y[n])}))).map((function(e,n){return e.replace("{1}","")})),qe.push(p,s);break;case"StartCombatXJoin":var o=["Second Chance",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+ce[n])})),f=["Start Charge",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}",H[n]+", "+C[n])})),m=["Start Guard",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}",w[n]+", "+R[n])})),h=["Rage",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+V[n])})),d=["Instinct",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+M[n])}));qe.push(o,f,m,h,d),Fe.map((function(n){var r=Ge.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Start Buff",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+" "+_[n])}));a.splice(0,1,t),qe.push(a)})),Ne.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Element",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+" "+X[n])}));a.splice(0,1,t),qe.push(a)})),Fe.map((function(n){var r=Ge.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Protect",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n]+" "+F[n])}));a.splice(0,1,t),qe.push(a)})),Fe.map((function(n){var r=Ge.filter((function(e){return e.includes(n)||e==n}))[0],t="Weak "+r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+" "+z[n])}));a.splice(0,1,t),qe.push(a)})),Le.map((function(n){var r=Le.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));a.splice(0,1,t),qe.push(a)})),xe.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));a.splice(0,1,t),qe.push(a)}));var b=ze("Cursed",e,"X",te).map((function(e,n){return e.replace("X","X "+a[n]+" "+Y[n])}));qe.push(b);break;case"TurnDamageXJoin":Fe.map((function(n){var r=Ge.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Turn Attack",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),qe.push(a)}));var g=["Protect Turn Attack",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+F[n])}));g=g.map((function(e){return e.replace("{1}","")})),qe.push(g);break;case"TurnHealXJoin":Fe.map((function(n){var r=Ge.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Turn Heal",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),qe.push(a)}));var v=["Protect Turn Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+F[n])}));v=v.map((function(e){return e.replace("{1}","")})),qe.push(v);break;case"AfterActionDamageXJoin":Fe.map((function(n){var r=Ge.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Attack",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),qe.push(a)}));var k=["Protect Action Attack",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+F[n])}));k=k.map((function(e){return e.replace("{1}","")})),qe.push(k);break;case"AfterActionHealXJoin":Fe.map((function(n){var r=Ge.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Heal",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),qe.push(a)}));var D=["Protect Action Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+F[n])}));D=D.map((function(e){return e.replace("{1}","")})),qe.push(D);break;case"AfterActionBuffXJoin":Fe.map((function(n){var r=Ge.filter((function(e){return e.includes(n)||e==n}))[0],t="Stack "+r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));a.splice(0,1,t),qe.push(a)}));break;case"AfterActionDebuffXJoin":var S=["After Action Venom",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+A[n])})),B=["After Action Insane",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+y[n])})),I=["After Action Restrain",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+P[n])}));qe.push(S,B,I)}}));var n=je(Ce,"XDigger")[0].map((function(e){return e.replace("{0}","")})),r=je(Ce,"Crystal")[0],t=je(Ce,"Gold")[0],c=Ve.filter((function(e){return"AutoProtectDescr"==e[0]}))[0].map((function(e,n){return e.replace("{0}",F[n])}));(c=c.map((function(e,n){return e.replace("{1}","10X%")}))).splice(0,1,"Auto Protect");var i=Ve.filter((function(e){return"InvulnXFullStartDescr"==e[0]}))[0].map((function(e,n){return e.replace("{0}",ue[n])}));i.splice(0,1,"Invulnerable");var l=["Add Draw","X","X","X"].map((function(e,n){return e.replace("X",u[n]+" +X")})),p=["Reduce Draw","X","X","-X"].map((function(e,n){return e.replace("X",u[n]+" -X")})),s=["Gold Digger","X","X","X"].map((function(e,r){return e.replace("X",t[r]+n[r])})),o=["Crystal Digger","X","X","X"].map((function(e,t){return e.replace("X",r[t]+n[t])}));qe.push(["Add Action","AP +X","AP +X","AP +X"],["Reduce Action","AP -X","AP -X","AP -X"],l,p,s,o,c,i),Je.map((function(e){var n=Je.filter((function(n){return n.includes(e)||n==e}))[0],r=n.map((function(e,n){return e+fe[n]}));"Humanoid"==n[0]||"Creature"==n[0]||"Spirit"==n[0]||"Matter"==n[0]?r.splice(0,1,n[0]+" Expert"):"Reflect"==n[0]?r.splice(0,1,n[0]+fe[1]):r.splice(0,1,n[1]+fe[1]),qe.push(r)})),se.splice(0,1,"Skill Stack Master"),oe.splice(0,1,"Jack-of-all-Trades"),qe.push(oe,se),console.log(qe)}))}}},26535:(e,n,r)=>{"use strict";e.exports=r.p+"ab25a53533fa074274e1.png"},75657:(e,n,r)=>{"use strict";e.exports=r.p+"bf99e92bf3dcd527df8f.png"},74069:(e,n,r)=>{"use strict";e.exports=r.p+"c4517d24cb0e60530c58.png"},52798:(e,n,r)=>{"use strict";e.exports=r.p+"b2e23163716139708c80.png"},37947:(e,n,r)=>{"use strict";e.exports=r.p+"b2145416ec62da90cdab.png"}}]);