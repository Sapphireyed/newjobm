(self.webpackChunklrnwebpack=self.webpackChunklrnwebpack||[]).push([[850,257],{12850:(e,n,r)=>{"use strict";r.d(n,{Zs:()=>Ve,J_:()=>ge,Wu:()=>ke,Tl:()=>De,Xx:()=>Pe,Ve:()=>Se,VH:()=>ye,wP:()=>Re,Ps:()=>Ie,MG:()=>Oe,qj:()=>we,Ei:()=>He,T4:()=>Ke,LN:()=>_e,vF:()=>Xe,X_:()=>Ue,ur:()=>i,e4:()=>l,QZ:()=>f,tE:()=>p,E:()=>o,pH:()=>s,mY:()=>X,eX:()=>h,zb:()=>b,Bf:()=>v,KI:()=>d,L6:()=>A,zd:()=>g,UE:()=>k,OR:()=>D,JN:()=>S,Vg:()=>R,g_:()=>P,gT:()=>y,lR:()=>W,CC:()=>F,dJ:()=>M,a9:()=>G,wC:()=>O,w_:()=>t}),r.g.fetch=r(83300);var t,a,u,c,i,l,p,f,o,s,X,m,h,b,v,d,A,g,k,D,P,S,y,R,w,H,I,B,C,E,V,T,J,x,W,F,G,M,O,N,L,j,z,_,U,K,Q,Z,q,Y,$,ee,ne,re,te,ae,ue,ce,ie,le,pe,fe,oe,se,Xe,me,he,be,ve,de=r(62538),Ae="1B2olPb1sTgFSskGBC68czBBt1ICh2jGmQkIKOi_c39w",ge=[],ke=[],De=[],Pe=[],Se=[],ye=[],Re=[],we=[],He=[],Ie=[],Be=[],Ce=[],Ee=[],Ve={wiki:function(){return de.raw(Ae,15).then((function(e){return e.data})).then((function(e){e.shift(),e.shift();var n=e.map((function(e,n){if("Sentences"==e[0])return n}));n=n.find((function(e){return null!=e})),t=e.slice(0,n)}))},skills:function(){return de.raw(Ae,3).then((function(e){return e.data})).then((function(e){e.shift(),e.shift();var n=e.map((function(e,n){if("Skills Titles"==e[0])return n}));n=n.find((function(e){return null!=e}));var r=e.map((function(e,n){if("Skills Descriptions"==e[0])return n}));r=r.find((function(e){return null!=e}));var t=e.map((function(e,n){if("Buffs, Debuffs, Applies & Passives Descriptions"==e[0])return n}));t=t.find((function(e){return null!=e}));var a=e.map((function(e,n){if("Ability's Skill Unit Term/Descriptions"==e[0])return n}));a=a.find((function(e){return null!=e}));var u=e.map((function(e,n){if("Passive's Skill Unit Term/Desciptions"==e[0])return n}));u=u.find((function(e){return null!=e})),Ie=e.slice(0,r),e.slice(r,t),Ee=e.slice(t,a),(Be=e.slice(a,u)).shift(),(Ce=e.slice(u)).shift()}))},characters:function(){return de.raw(Ae,9).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),ye=e}))},chapters:function(){return de.raw(Ae,11).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),Re=e,console.log(Re)}))},rules:function(){return de.raw(Ae,13).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),we=e}))},traits:function(){return de.raw(Ae,12).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),He=e}))},materials:function(){return de.raw(Ae,7).then((function(e){return e.data})).then((function(e){e.shift(),e.shift();var n=e.map((function(e,n){if("Description"==e[0])return n}));n=n.find((function(e){return null!=e})),(ge=e).length=n}))},words:function(){return de.raw(Ae,1).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),ke=e}))},jobs:function(){return de.raw(Ae,8).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),De=e}))},abils:function(){return de.raw(Ae,5).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),Pe=e}))},passives:function(){return de.raw(Ae,6).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),e.pop(),Se=e}))}},Te=[],Je=[],xe=[],We=[],Fe=[],Ge=["Max HP","Strength","Agility","Intelligence"],Me=["Fire","Water","Earth","Wind","Thunder","Dark","Light"],Oe=[];function Ne(e,n){return e.filter((function(e){return e[0]==n}))}function Le(e,n,r,t,a,u,c,i){return(e=(e=(e=(e=(e=(e=0!=n?(e=e.replace(/\{0\}/g,n)).replace(/\{1\}/g,r):e.replace(/\{0\}/g,r)).replace(/\{1\}/g,r)).replace(/\{2\}/g,t)).replace(/\{3\}/g,a)).replace(/\{4\}/g,u)).replace(/\{5\}/g,c)).replace(/\{6\}/g,i)}function je(e,n,r,t){return[e,Le(n[1],r[1]||r,"X%",(r[1]||r)+" "+(t[1]||t)),Le(n[2],r[2]||r,"X%",(r[2]||r)+" "+(t[2]||t)),Le(n[3],r[3]||r,"X%",(r[3]||r)+" "+(t[3]||t))]}function ze(e,n,r,t){var a=[e];return n.map((function(e,n){a.push(e.replace(r,t[n]||t))})),a.splice(1,1),a}var _e=[],Ue=[],Ke={abilities:function(){return de.raw(Ae,3).then((function(e){return e.data})).then((function(e){a=ke.filter((function(e){return"Random"==e[0]}))[0],u=ke.filter((function(e){return"All"==e[0]}))[0],c=ke.filter((function(e){return"HandDraw"==e[0]}))[0];var n=Ne(Ie,"Combo")[0];switch(fe=Ne(Ie,"SkillStackMaster")[0],oe=Ne(Ie,"NormalMaster")[0],se=null==Ne(Ie,"XMaster")[0]?"":Ne(Ie,"XMaster")[0].map((function(e){return e.replace(/\{0\}/g,"")})),i=Ne(Ie,"Fire")[0],l=Ne(Ie,"Water")[0],p=Ne(Ie,"Earth")[0],f=Ne(Ie,"Wind")[0],o=Ne(Ie,"Thunder")[0],s=Ne(Ie,"Dark")[0],X=Ne(Ie,"Light")[0],m=Ne(Ie,"Element")[0],Te=[i,l,p,f,o,s,X,m],h=Ne(Ie,"Burn")[0],b=Ne(Ie,"Chill")[0],v=Ne(Ie,"Seed")[0],d=Ne(Ie,"Dizzy")[0],A=Ne(Ie,"Paralysis")[0],g=Ne(Ie,"Depress")[0],k=Ne(Ie,"Blind")[0],D=Ne(Ie,"Venom")[0],P=Ne(Ie,"Restrain")[0],S=Ne(Ie,"Insane")[0],y=Ne(Ie,"Injury")[0],R=Ne(Ie,"Bleed")[0],w=Ne(Ie,"Confuse")[0],H=Ne(Ie,"Slack")[0],Je=[h,b,v,d,A,g,k,y,R,w,H],xe=[D,S,P],Y=Ne(Ie,"EStatusEffect")[0],$=Ne(Ie,"StatDebuff")[0],I=Ne(Ie,"Charge")[0],B=Ne(Ie,"Guard")[0],C=Ne(Ie,"StackCharge")[0],E=Ne(Ie,"StackGuard")[0],T=Ne(Ie,"Rage")[0],J=Ne(Ie,"Instinct")[0],V=Ne(Ie,"Certain")[0],W=Ne(Ie,"MaxHP")[0],F=Ne(Ie,"Strength")[0],G=Ne(Ie,"Agility")[0],M=Ne(Ie,"Intelligence")[0],We.push(W,F,G,M),L=Ne(Ie,"Buff")[0],j=null==Ne(Ie,"XActBuff")[0]?"":Ne(Ie,"XActBuff")[0].map((function(e){return e.replace(/\{0\}/g,"")})),z=null==Ne(Ie,"XStatBoost")[0]?"":Ne(Ie,"XStatBoost")[0].map((function(e){return e.replace(/\{0\}/g,"")})),_=Ne(Ie,"Debuff")[0],U=null==Ne(Ie,"XActDebuff")[0]?"":Ne(Ie,"XActDebuff")[0].map((function(e){return e.replace(/\{0\}/g,"")})),K=null==Ne(Ie,"XStatNerf")[0]?"":Ne(Ie,"XStatNerf")[0].map((function(e){return e.replace(/\{0\}/g,"")})),Q=null==Ne(Ie,"XStatDrain")[0]?"":Ne(Ie,"XStatDrain")[0].map((function(e){return e.replace(/\{0\}/g,"")})),Z=null==Ne(Ie,"XAbsorb")[0]?"":Ne(Ie,"XAbsorb")[0].map((function(e){return e.replace(/\{0\}/g,"")})),q=Ne(Ie,"Reflect")[0],null==Ne(Ie,"XImmune")[0]||Ne(Ie,"XImmune")[0].map((function(e){return e.replace(/\{0\}/g,"")})),ee=Ne(Ie,"ProtectiveHeal")[0],ne=Ne(Ie,"AggressiveHeal")[0],re=null==Ne(Ie,"XVulnerable")[0]?"":Ne(Ie,"XVulnerable")[0].map((function(e){return e.replace(/\{0\}/g,"")})),te=Ne(Ie,"XProtectEnhance")[0],ue=Ne(Ie,"SecondChance")[0],O=Ne(Ie,"Protect")[0],ce=Ne(Ie,"Invulnerable")[0],ie=null==Ne(Ie,"XActionPoint")[0]?"":Ne(Ie,"XActionPoint")[0].map((function(e){return e.replace(/\{0\}/g,"")})),le=null==Ne(Ie,"XActionPointNext")[0]?"":Ne(Ie,"XActionPointNext")[0].map((function(e){return e.replace(/\{0\}/g,"")})),pe=null==Ne(Ie,"XDrawNext")[0]?"":Ne(Ie,"XDrawNext")[0].map((function(e){return e.replace(/\{0\}/g,"")})),N=null==Ne(Ie,"XFinale")[0]?"":Ne(Ie,"XFinale")[0].map((function(e){return e.replace(/\{0\}/g,"")})),null==Ne(Ie,"XEnchant")[0]||Ne(Ie,"XEnchant")[0].map((function(e){return e.replace(/\{0\}/g,"")})),x=Ne(Ie,"LifeSteal")[0],ae=Ne(Ie,"Curse")[0],me=Ne(Ie,"Humanoid")[0],he=Ne(Ie,"Creature")[0],be=Ne(Ie,"Spirit")[0],ve=Ne(Ie,"Matter")[0],Oe=[me,he,be,ve],Fe=[F,G,M,W,O,i,l,p,o,f,s,X,m,me,he,be,ve,_,n,ae,I,B,x,q,R,y],function(){Xe=["Humanoid","Creature","Spirit","Matter","LifeSteal","TurnCharge","PracticePerfect","FocusEnergy","NegativePower","ComboBlend","Scheduled","AutoFire","Overloaded","LastResort","Gamble","Exhaust","Curse"];var e=null==Ne(Ie,"XSynergy")[0]?"":Ne(Ie,"XSynergy")[0].map((function(e){return e.replace(/\{0\}/g,"").replace("X","")}));Xe=Xe.map((function(e){return Ne(Ie,e)[0]})),We.map((function(n,r){var t=n.map((function(n,r){return n+" "+e[r]}));Xe.push(t)}))}(),Xe=Xe.map((function(e){return["ComboBlend"==e[0]?e[0]="Combo Blend":e[0],e[1],e[2],e[3]]})),console.log(Xe),Be.map((function(e){switch(e[0]){case"EElementXAttackDescr":var n=je("Fire Attack",e,i,N),r=je("Water Attack",e,l,N),t=je("Earth Attack",e,p,N),c=je("Wind Attack",e,f,N),T=je("Thunder Attack",e,o,N),J=je("Dark Attack",e,s,N),x=je("Light Attack",e,X,N),z=je("Element Attack",e,m,N);_e.push(n,r,t,c,T,J,x,z);break;case"VRIDamageXDescr":var K=je("Venom Explode",e,D,"20%"),Q=je("Restrain Explode",e,P,"20%"),Z=je("Insane Explode",e,S,"20%");_e.push(K,Q,Z);break;case"DebuffRemoveXAttackDescr":var q=["Removal attack",e[1],e[2],e[3]].map((function(e){return e.replace("{0}","X%")}));_e.push(q);break;case"EElementXHealDescr":var $=je("Fire Heal",e,i,"X%"),ee=je("Water Heal",e,l,"X%"),ne=je("Earth Heal",e,p,"X%"),ae=je("Wind Heal",e,f,"X%"),fe=je("Thunder Heal",e,o,"X%"),oe=je("Dark Heal",e,s,"X%"),se=je("Light Heal",e,X,"X%"),Xe=je("Elemental Heal",e,m,"X%");_e.push($,ee,ne,ae,fe,oe,se,Xe);break;case"BuffRemoveXHealDescr":var me=je("Removal heal",e,O,ue);_e.push(me);break;case"DrawXAbilityDescr":var he=["Draw Ability",e[1],e[2],e[3]].map((function(e){return e.replace("{0}","X")}));_e.push(he);break;case"ForceXTurnPassDescr":var be=["Pass Turn",e[1],e[2],e[3]].map((function(e){return e.replace("{0}","X")}));_e.push(be);break;case"DoubleActionBuffDescr":var ve=["Double Action Buff",e[1],e[2],e[3]];_e.push(ve);break;case"DoubleBuffDescr":var de=["Double Buff",e[1],e[2],e[3]];_e.push(de);break;case"DoubleDebuffDescr":var Ae=["Double Debuffs",e[1],e[2],e[3]];_e.push(Ae);break;case"DoubleVulnDescr":var ge=["Double Vulnerable",e[1],e[2],e[3]];_e.push(ge);break;case"StatVuln":case"ElementVuln":break;case"RecoverXAbilityDescr":var ke=ze("Recover skill",e,"{0}","1");_e.push(ke);break;case"LoseXMaxHPDescr":var De=ze("Sacrifice HP",e,"{1}",W).map((function(e){return e.replace("{0}","10x%")}));_e.push(De);break;case"DiscardXDescr":var Pe=ze("Discard hand",e,"{0}","1");_e.push(Pe);break;case"FarewellXDescr":var Se=ze("Fare Well",e,"{0}","99999");_e.push(Se);break;case"BuffSwapXDescr":var ye=ze("Swap Buffs",e,"{0}",O).map((function(e,n){return e.replace("{1}",ce[n])}));ye=ye.map((function(e,n){return e.replace("{2}",ue[n])})),_e.push(ye);break;case"DebuffSwapDescr":var Re=["Swap Debuffs",e[1],e[2],e[3]];_e.push(Re);break;case"CurseStartXDebuffDescr":var we=je("Weak MaxHP (Ability become Passive)",e,"X",W).map((function(e,n){return e.replace("X%",W[n]+" Debuff")})),He=je("Weak Strength (Ability become Passive)",e,"X",F).map((function(e,n){return e.replace("X%",F[n]+" Debuff")})),Ie=je("Weak Agility (Ability become Passive)",e,"X",G).map((function(e,n){return e.replace("X%",G[n]+" Debuff")})),Be=je("Weak Intelligence (Ability become Passive)",e,"X",M).map((function(e,n){return e.replace("X%",M[n]+" Debuff")})),Ce=je("Burned (Ability become Passive)",e,"X",h).map((function(e,n){return e.replace("X%",h[n])})),Ee=je("Chill (Ability become Passive)",e,"X",b).map((function(e,n){return e.replace("X%",b[n])})),Ve=je("Seeded (Ability become Passive)",e,"X",v).map((function(e,n){return e.replace("X%",v[n])})),Fe=je("Dizzy (Ability become Passive)",e,"X",d).map((function(e,n){return e.replace("X%",d[n])})),Oe=je("Paralysed (Ability become Passive)",e,"X",A).map((function(e,n){return e.replace("X%",A[n])})),Ne=je("Depress (Ability become Passive)",e,"X",g).map((function(e,n){return e.replace("X%",g[n])})),Le=je("Blinded (Ability become Passive)",e,"X",k).map((function(e,n){return e.replace("X%",k[n])})),Ue=je("Bleeding (Ability become Passive)",e,"X",R).map((function(e,n){return e.replace("X%",R[n])})),Ke=je("Injured (Ability become Passive)",e,"X",y).map((function(e,n){return e.replace("X%",y[n])})),Qe=je("Insane (Ability become Passive)",e,"X",S).map((function(e,n){return e.replace("X%",S[n])})),Ze=je("Restrained (Ability become Passive)",e,"X",P).map((function(e,n){return e.replace("X%",P[n])})),qe=je("Venomed (Ability become Passive)",e,"X",D).map((function(e,n){return e.replace("X%",D[n])})),Ye=je("Venomed (Ability become Passive)",e,"X",w).map((function(e,n){return e.replace("X%",w[n])})),$e=je("Venomed (Ability become Passive)",e,"X",H).map((function(e,n){return e.replace("X%",H[n])})),en=je("Cursed (Ability become Passive)",e,"X",a).map((function(e,n){return e.replace("X%",a[n]+" "+Y[n])}));_e.push(Ce,Ee,Ve,Fe,Oe,Ne,Le,en,Ue,Ke,Qe,Ze,qe,Ye,$e,we,He,Ie,Be);break;case"DiscardAbilityXAttackDescr":var nn=je("Discard HP Attack",e,W,"X"),rn=je("Discard Str Attack",e,F,"X"),tn=je("Discard Agi Attack",e,G,"X"),an=je("Discard Int Attack",e,M,"X");_e.push(nn,rn,tn,an);break;case"RemoveXDebuffsJoin":var un=je("Burn Remove",e,h,N),cn=je("Chill Remove",e,b,N),ln=je("Seed Remove",e,v,N),pn=je("Dizzy Remove",e,d,N),fn=je("Paralysis Remove",e,A,N),on=je("Depress Remove",e,g,N),sn=je("Blind Remove",e,k,N),Xn=je("Bleed Remove",e,R,N),mn=je("Injury Remove",e,y,N),hn=je("Insane Remove",e,S,N),bn=je("Restrain Remove",e,P,N),vn=je("Venom Remove",e,D,N),dn=je("All Elemental Status Effect Remove",e,m,N),An=je("Debuff Remove",e,"X",N).map((function(e,n){return e.replace("X",u[n]+" "+_[n]+", "+re[n])}));_e.push(un,cn,ln,pn,fn,on,sn,Xn,mn,hn,bn,vn,dn,An);break;case"ApplyXSelfJoin":var gn=je("Charge",e,I,N),kn=je("Guard",e,B,N),Dn=je("Stack Charge",e,C,N),Pn=je("Stack Guard",e,E,N),Sn=je("Apply Certain",e,"X",N).map((function(e,n){return e.replace("X","X "+V[n])})),yn=je("Pure Element",e,m,N),Rn=je("Protect Enhance",e,O,te);_e.push(gn,kn,Dn,Pn,Sn,yn,Rn),Me.map((function(n,r){var t=Te.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" Element",u=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+m[n])}));u.splice(0,1,a),_e.push(u)}));var wn=je("Paralyed On Self",e,"X",te).map((function(e,n){return e.replace("X","X "+A[n])})),Hn=je("Burned On Self",e,"X",te).map((function(e,n){return e.replace("X","X "+h[n])})),In=je("Seeded On Self",e,"X",te).map((function(e,n){return e.replace("X","X "+v[n])})),Bn=je("Bleeding On Self",e,"X",te).map((function(e,n){return e.replace("X","X "+R[n])})),Cn=je("Blinded On Self",e,"X",te).map((function(e,n){return e.replace("X","X "+k[n])})),En=je("Injured On Self",e,"X",te).map((function(e,n){return e.replace("X","X "+y[n])}));_e.push(wn,Hn,In,Bn,Cn,En),Je.map((function(n,r){var t=Je.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" On Self",u=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+m[n])}));u.splice(0,1,a),_e.push(u)})),xe.map((function(n,r){var t=xe.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" On Self",u=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+m[n])}));u.splice(0,1,a),_e.push(u)})),Ge.map((function(n,r){if(r>0){var t=We.filter((function(e){return e.includes(n)||e==n}))[0],a="Debuff "+t[1]+" On Self",u=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+_[n])}));u.splice(0,1,a),_e.push(u)}}));var Vn=je("Cursed On Self",e,"X",te).map((function(e,n){return e.replace("X","X "+a[n]+" "+Y[n])}));_e.push(Vn);break;case"ApplyXOpponentJoin":var Tn=ze("HP Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+W[n]+" Vulnerable")})),Jn=ze("Strength Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+F[n]+" "+re[n])})),xn=ze("Agility Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+G[n]+" "+re[n])})),Wn=ze("Intelligence Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+M[n]+" "+re[n])})),Fn=ze("Protect Pierce",e,"{0}","X").map((function(e,n){return e.replace("X","X "+O[n]+" "+re[n])})),Gn=ze("Fire Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+i[n]+" "+re[n])})),Mn=ze("Water Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+l[n]+" "+re[n])})),On=ze("Earth Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+p[n]+" "+re[n])})),Nn=ze("Wind Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+f[n]+" "+re[n])})),Ln=ze("Thunder Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+o[n]+" "+re[n])})),jn=ze("Dark Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+s[n]+" "+re[n])})),zn=ze("Light Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+X[n]+" "+re[n])})),_n=ze("Injury Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+y[n]+" "+re[n])})),Un=ze("Bleed Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+R[n]+" "+re[n])})),Kn=ze("Inflict Random status effects",e,"{0}","X").map((function(e,n){return e.replace("X","X "+a[n]+" "+Y[n])}));_e.push(Gn,Mn,On,Nn,Ln,jn,zn,_n,Un,Kn,Tn,Jn,xn,Wn,Fn),Ge.map((function(n,r){var t=We.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" Debuff",u=e.map((function(e,n){return e.replace("{0}","X "+t[n]+" "+_[n])}));u.splice(0,1,a),_e.push(u)})),Je.map((function(n,r){var t=Je.filter((function(e){return e.includes(n)||e==n}))[0],a="Inflict "+t[1],u=e.map((function(e,n){return e.replace("{0}","X "+t[n])}));u.splice(0,1,a),_e.push(u)})),xe.map((function(n,r){var t=xe.filter((function(e){return e.includes(n)||e==n}))[0],a="Inflict "+t[1],u=e.map((function(e,n){return e.replace("{0}","X "+t[n]+" "+_[n])}));u.splice(0,1,a),_e.push(u)}));break;case"GainXProtectJoin":var Qn=je("HP Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+W[n]+" "+O[n]).replace("{1}","")})),Zn=je("Strength Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+F[n]+" "+O[n]).replace("{1}","")})),qn=je("Agility Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+G[n]+" "+O[n]).replace("{1}","")})),Yn=je("Intelligence Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+M[n]+" "+O[n]).replace("{1}","")})),$n=je("Raw Protect",e,!1,"X").map((function(e,n){return e.replace("X","X  "+O[n]).replace("{1}","")})),er=ze("Second Chance",e,"{0}","X").map((function(e,n){return e.replace("{1}",ue[n])})),nr=ze("Invulnerable",e,"{0}","X").map((function(e,n){return e.replace("{1}",ce[n])})),rr=ze("Gain AP",e,"{0}","X").map((function(e,n){return e.replace("{1}",ie[n])})),tr=ze("Gain AP Next",e,"{0}","X").map((function(e,n){return e.replace("{1}",le[n])})),ar=ze("Draw Ability Next",e,"{0}","X").map((function(e,n){return e.replace("{1}",pe[n])}));_e.push(Qn,Zn,qn,Yn,rr,tr,ar,$n,er,nr),Ge.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Buff",a=e.map((function(e,n){return e.replace("{0}","X").replace("{1}",r[n]+" "+L[n])}));a.splice(0,1,t),_e.push(a)})),Ge.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Buff",a=e.map((function(e,n){return e.replace("{0}","X").replace("{1}",r[n]+" "+j[n])}));a.splice(0,1,t),_e.push(a)})),Ge.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Debuff",a=e.map((function(e,n){return e.replace("{0}","X").replace("{1}",r[n]+" "+U[n])}));a.splice(0,1,t),_e.push(a)})),Me.map((function(n){var r=Te.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Buff",a=e.map((function(e,n){return e.replace(/\{0\}/g,"X").replace("{1}",r[n]+" "+j[n])}));a.splice(0,1,t),_e.push(a)}));break;case"DealXDamageJoin":var ur=je("Raw Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X")})),cr=je("HP Attack",e,!1,"X% ").map((function(e,n){return e.replace("X%","X% "+W[n])})),ir=je("Strength Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+F[n])})),lr=je("Agility Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+G[n])})),pr=je("Intelligence Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+M[n])})),fr=je("Protect Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+O[n])}));_e.push(ur,cr,ir,lr,pr,fr);break;case"HealXJoin":var or=je("Raw Heal",e,!1,"X"),sr=je("HP Heal",e,!1,"X% ").map((function(e,n){return e.replace("X%","X% "+W[n])})),Xr=je("Strength Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+F[n])})),mr=je("Agility Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+G[n])})),hr=je("Intelligence Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+M[n])})),br=je("Protect Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+O[n])}));_e.push(or,sr,Xr,mr,hr,br,["Do nothing","Do nothing","Do nothing","Do nothing"])}})),document.getElementById("langSel").value){case"English":W=W[1],F=F[1],G=G[1],M=M[1],O=O[1],i=i[1],l=l[1],p=p[1],f=f[1],o=o[1],s=s[1],X=X[1],h=h[1],b=b[1],v=v[1],d=d[1],A=A[1],g=g[1],k=k[1],D=D[1],S=S[1],R=R[1],P=P[1],y=y[1];break;case"Chinese":W=W[2],F=F[2],G=G[2],M=M[2],O=O[2],i=i[2],l=l[2],p=p[2],f=f[2],o=o[2],s=s[2],X=X[2],h=h[2],b=b[2],v=v[2],d=d[2],A=A[2],g=g[2],k=k[2],D=D[2],S=S[2],R=R[2],P=P[2],y=y[2];break;case"Chinese(Trad)":W=W[3],F=F[3],G=G[3],M=M[3],O=O[3],i=i[3],l=l[3],p=p[3],f=f[3],o=o[3],s=s[3],X=X[3],h=h[3],b=b[3],v=v[3],d=d[3],A=A[3],g=g[3],k=k[3],D=D[3],S=S[3],R=R[3],P=P[3],y=y[3]}}))},passives:function(){return de.raw(Ae,3).then((function(e){return e.data})).then((function(e){Ve.skills(),O=Ne(Ie,"Protect")[0],D=Ne(Ie,"Venom")[0],S=Ne(Ie,"Insane")[0],P=Ne(Ie,"Restrain")[0],Ce.map((function(e){switch(null==Ue[0]||Ue[0].jobon,e[0]){case"JobIsOn":Ue.push({jobon:e});break;case"DamageMitigateXDescrP":var n=e.map((function(e){return e.replace("{0}","10X%")}));(n=n.map((function(e){return e.replace("{1}","")}))).splice(0,1,"Damage Mitigate"),Ue.push(n);break;case"GainXPassiveJoin":Ge.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Boost",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+z[n])}));a.splice(0,1,t),Ue.push(a);var u=r[1]+" Drain",c=e.map((function(e,n){return e.replace("{0}","X "+r[n]+Q[n])}));c.splice(0,1,u),Ue.push(c)})),Ge.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Nerf",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+K[n])}));a.splice(0,1,t),Ue.push(a)})),xe.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Absorb",a=e.map((function(e,n){return e.replace("{0}",r[n]+Z[n])}));a.splice(0,1,t),Ue.push(a)}));var r=["Protective Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+ee[n])})),t=["Aggressive Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+ne[n])})),u=["Rage",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+T[n])})),c=["Instinct",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+J[n])}));Ue.push(r,t,u,c);break;case"ApplyXReflectJoin":Je.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Reflect",a=e.map((function(e,n){return e.replace("{0}",r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),Ue.push(a)}));var i=["Protect Reflect",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+ee[n])})),l=["Status Effects Reflect",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+Y[n])}));Ue.push(i,l);break;case"ApplyXCounterJoin":Ge.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Reflect",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),Ue.push(a)})),xe.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Reflect",a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),Ue.push(a)}));break;case"ImmuneToXJoin":Je.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Immune",a=e.map((function(e,n){return e.replace("{0}",r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),Ue.push(a)})),xe.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Immune",a=e.map((function(e,n){return e.replace("{0}",r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),Ue.push(a)}));var p=["Debuff Immnue",e[1],e[2],e[3]];p=(p=p.map((function(e,n){return e.replace("{0}",$[n])}))).map((function(e,n){return e.replace("{1}","")}));var f=["Element Status Immnue",e[1],e[2],e[3]];f=(f=f.map((function(e,n){return e.replace("{0}",Y[n])}))).map((function(e,n){return e.replace("{1}","")})),Ue.push(p,f);break;case"StartCombatXJoin":var o=["Second Chance",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+ue[n])})),s=["Start Charge",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}",I[n]+", "+C[n])})),X=["Start Guard",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}",B[n]+", "+E[n])})),h=["Rage",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+T[n])})),b=["Instinct",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+J[n])}));Ue.push(o,s,X,h,b),Ge.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Start Buff",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+" "+L[n])}));a.splice(0,1,t),Ue.push(a)})),Me.map((function(n){var r=Te.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Element",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+" "+m[n])}));a.splice(0,1,t),Ue.push(a)})),Ge.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Protect",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n]+" "+O[n])}));a.splice(0,1,t),Ue.push(a)})),Ge.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t="Weak "+r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+" "+_[n])}));a.splice(0,1,t),Ue.push(a)})),Je.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));a.splice(0,1,t),Ue.push(a)})),xe.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));a.splice(0,1,t),Ue.push(a)}));var v=je("Cursed",e,"X",te).map((function(e,n){return e.replace("X","X "+a[n]+" "+Y[n])}));Ue.push(v);break;case"TurnDamageXJoin":Ge.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Turn Attack",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),Ue.push(a)}));var d=["Protect Turn Attack",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+O[n])}));d=d.map((function(e){return e.replace("{1}","")})),Ue.push(d);break;case"TurnHealXJoin":Ge.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Turn Heal",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),Ue.push(a)}));var A=["Protect Turn Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+O[n])}));A=A.map((function(e){return e.replace("{1}","")})),Ue.push(A);break;case"AfterActionDamageXJoin":Ge.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Attack",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),Ue.push(a)}));var g=["Protect Action Attack",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+O[n])}));g=g.map((function(e){return e.replace("{1}","")})),Ue.push(g);break;case"AfterActionHealXJoin":Ge.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Heal",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),Ue.push(a)}));var k=["Protect Action Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+O[n])}));k=k.map((function(e){return e.replace("{1}","")})),Ue.push(k);break;case"AfterActionBuffXJoin":Ge.map((function(n){var r=We.filter((function(e){return e.includes(n)||e==n}))[0],t="Stack "+r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));a.splice(0,1,t),Ue.push(a)}));break;case"AfterActionDebuffXJoin":var y=["After Action Venom",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+D[n])})),R=["After Action Insane",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+S[n])})),w=["After Action Restrain",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+P[n])}));Ue.push(y,R,w)}}));var n=Ne(Ie,"XDigger")[0].map((function(e){return e.replace("{0}","")})),r=Ne(Ie,"Crystal")[0],t=Ne(Ie,"Gold")[0],u=Ee.filter((function(e){return"AutoProtectDescr"==e[0]}))[0].map((function(e,n){return e.replace("{0}",O[n])}));(u=u.map((function(e,n){return e.replace("{1}","10X%")}))).splice(0,1,"Auto Protect");var i=Ee.filter((function(e){return"InvulnXFullStartDescr"==e[0]}))[0].map((function(e,n){return e.replace("{0}",ce[n])}));i.splice(0,1,"Invulnerable");var l=["Add Draw","X","X","X"].map((function(e,n){return e.replace("X",c[n]+" +X")})),p=["Reduce Draw","X","X","-X"].map((function(e,n){return e.replace("X",c[n]+" -X")})),f=["Gold Digger","X","X","X"].map((function(e,r){return e.replace("X",t[r]+n[r])})),o=["Crystal Digger","X","X","X"].map((function(e,t){return e.replace("X",r[t]+n[t])}));Ue.push(["Add Action","AP +X","AP +X","AP +X"],["Reduce Action","AP -X","AP -X","AP -X"],l,p,f,o,u,i),Fe.map((function(e){var n=Fe.filter((function(n){return n.includes(e)||n==e}))[0],r=n.map((function(e,n){return e+se[n]}));"Humanoid"==n[0]||"Creature"==n[0]||"Spirit"==n[0]||"Matter"==n[0]?r.splice(0,1,n[0]+" Expert"):"Reflect"==n[0]?r.splice(0,1,n[0]+se[1]):r.splice(0,1,n[1]+se[1]),Ue.push(r)})),fe.splice(0,1,"Skill Stack Master"),oe.splice(0,1,"Jack-of-all-Trades"),Ue.push(oe,fe),console.log(Ue)}))}}}}]);