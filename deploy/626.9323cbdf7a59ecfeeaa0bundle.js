(self.webpackChunklrnwebpack=self.webpackChunklrnwebpack||[]).push([[626,82],{12850:(e,n,r)=>{"use strict";r.d(n,{Zs:()=>Ee,J_:()=>Ae,Wu:()=>ge,Tl:()=>ke,Xx:()=>De,Ve:()=>Pe,VH:()=>Se,wP:()=>ye,MG:()=>Fe,qj:()=>Re,Ei:()=>He,T4:()=>Ue,LN:()=>ze,vF:()=>se,X_:()=>_e,ur:()=>u,e4:()=>i,QZ:()=>l,tE:()=>p,E:()=>f,pH:()=>o,mY:()=>s,eX:()=>m,zb:()=>h,Bf:()=>b,KI:()=>v,L6:()=>d,zd:()=>A,UE:()=>g,OR:()=>k,JN:()=>P,Vg:()=>y,g_:()=>D,gT:()=>S,lR:()=>x,CC:()=>W,dJ:()=>O,a9:()=>G,wC:()=>F}),r.g.fetch=r(83300);var t,a,c,u,i,p,l,f,o,s,X,m,h,b,v,d,A,g,k,D,P,S,y,R,H,I,w,C,B,E,V,T,J,x,W,G,O,F,M,L,j,N,z,_,U,K,Q,Z,q,Y,$,ee,ne,re,te,ae,ce,ue,ie,pe,le,fe,oe,se,Xe,me,he,be,ve=r(62538),de="1B2olPb1sTgFSskGBC68czBBt1ICh2jGmQkIKOi_c39w",Ae=[],ge=[],ke=[],De=[],Pe=[],Se=[],ye=[],Re=[],He=[],Ie=[],we=[],Ce=[],Be=[],Ee={skills:function(){return ve.raw(de,3).then((function(e){return e.data})).then((function(e){e.shift(),e.shift();var n=e.map((function(e,n){if("Skills Titles"==e[0])return n}));n=n.find((function(e){return null!=e}));var r=e.map((function(e,n){if("Skills Descriptions"==e[0])return n}));r=r.find((function(e){return null!=e}));var t=e.map((function(e,n){if("Buffs, Debuffs, Applies & Passives Descriptions"==e[0])return n}));t=t.find((function(e){return null!=e}));var a=e.map((function(e,n){if("Ability's Skill Unit Term/Descriptions"==e[0])return n}));a=a.find((function(e){return null!=e}));var c=e.map((function(e,n){if("Passive's Skill Unit Term/Desciptions"==e[0])return n}));c=c.find((function(e){return null!=e})),Ie=e.slice(0,r),e.slice(r,t),Be=e.slice(t,a),(we=e.slice(a,c)).shift(),(Ce=e.slice(c)).shift()}))},characters:function(){return ve.raw(de,9).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),Se=e}))},chapters:function(){return ve.raw(de,10).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),ye=e}))},rules:function(){return ve.raw(de,12).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),Re=e}))},traits:function(){return ve.raw(de,11).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),He=e}))},materials:function(){return ve.raw(de,7).then((function(e){return e.data})).then((function(e){e.shift(),e.shift();var n=e.map((function(e,n){if("Description"==e[0])return n}));n=n.find((function(e){return null!=e})),(Ae=e).length=n}))},words:function(){return ve.raw(de,1).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),ge=e}))},jobs:function(){return ve.raw(de,8).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),ke=e}))},abils:function(){return ve.raw(de,5).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),De=e}))},passives:function(){return ve.raw(de,6).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),e.pop(),Pe=e}))}},Ve=[],Te=[],Je=[],xe=[],We=[],Ge=["Max HP","Strength","Agility","Intelligence"],Oe=["Fire","Water","Earth","Wind","Thunder","Dark","Light"],Fe=[];function Me(e,n){return e.filter((function(e){return e[0]==n}))}function Le(e,n,r,t,a,c,u,i){return(e=(e=(e=(e=(e=(e=0!=n?(e=e.replace(/\{0\}/g,n)).replace(/\{1\}/g,r):e.replace(/\{0\}/g,r)).replace(/\{1\}/g,r)).replace(/\{2\}/g,t)).replace(/\{3\}/g,a)).replace(/\{4\}/g,c)).replace(/\{5\}/g,u)).replace(/\{6\}/g,i)}function je(e,n,r,t){return[e,Le(n[1],r[1]||r,"X%",(r[1]||r)+" "+(t[1]||t)),Le(n[2],r[2]||r,"X%",(r[2]||r)+" "+(t[2]||t)),Le(n[3],r[3]||r,"X%",(r[3]||r)+" "+(t[3]||t))]}function Ne(e,n,r,t){var a=[e];return n.map((function(e,n){a.push(e.replace(r,t[n]||t))})),a.splice(1,1),a}var ze=[],_e=[],Ue={abilities:function(){return ve.raw(de,3).then((function(e){return e.data})).then((function(e){t=ge.filter((function(e){return"Random"==e[0]}))[0],a=ge.filter((function(e){return"All"==e[0]}))[0],c=ge.filter((function(e){return"HandDraw"==e[0]}))[0];var n=Me(Ie,"Combo")[0];switch(le=Me(Ie,"SkillStackMaster")[0],fe=Me(Ie,"NormalMaster")[0],oe=Me(Ie,"XMaster")[0].map((function(e){return e.replace(/\{0\}/g,"")})),u=Me(Ie,"Fire")[0],i=Me(Ie,"Water")[0],p=Me(Ie,"Earth")[0],l=Me(Ie,"Wind")[0],f=Me(Ie,"Thunder")[0],o=Me(Ie,"Dark")[0],s=Me(Ie,"Light")[0],X=Me(Ie,"Element")[0],Ve=[u,i,p,l,f,o,s,X],m=Me(Ie,"Burn")[0],h=Me(Ie,"Chill")[0],b=Me(Ie,"Seed")[0],v=Me(Ie,"Dizzy")[0],d=Me(Ie,"Paralysis")[0],A=Me(Ie,"Depress")[0],g=Me(Ie,"Blind")[0],k=Me(Ie,"Venom")[0],D=Me(Ie,"Restrain")[0],P=Me(Ie,"Insane")[0],S=Me(Ie,"Injury")[0],y=Me(Ie,"Bleed")[0],R=Me(Ie,"Confuse")[0],H=Me(Ie,"Slack")[0],Te=[m,h,b,v,d,A,g,S,y,R,H],Je=[k,P,D],q=Me(Ie,"EStatusEffect")[0],Y=Me(Ie,"StatDebuff")[0],I=Me(Ie,"Charge")[0],w=Me(Ie,"Guard")[0],C=Me(Ie,"StackCharge")[0],B=Me(Ie,"StackGuard")[0],V=Me(Ie,"Rage")[0],T=Me(Ie,"Instinct")[0],E=Me(Ie,"Certain")[0],x=Me(Ie,"MaxHP")[0],W=Me(Ie,"Strength")[0],G=Me(Ie,"Agility")[0],O=Me(Ie,"Intelligence")[0],xe.push(x,W,G,O),L=Me(Ie,"Buff")[0],j=Me(Ie,"XActionBuff")[0].map((function(e){return e.replace(/\{0\}/g,"")})),N=Me(Ie,"XStatBoost")[0].map((function(e){return e.replace(/\{0\}/g,"")})),z=Me(Ie,"Debuff")[0],_=Me(Ie,"XActionDebuff")[0].map((function(e){return e.replace(/\{0\}/g,"")})),U=Me(Ie,"XNerf")[0].map((function(e){return e.replace(/\{0\}/g,"")})),K=Me(Ie,"XStatDrain")[0].map((function(e){return e.replace(/\{0\}/g,"")})),Q=Me(Ie,"XAbsorb")[0].map((function(e){return e.replace(/\{0\}/g,"")})),Z=Me(Ie,"Reflect")[0],Me(Ie,"XImmune")[0].map((function(e){return e.replace(/\{0\}/g,"")})),$=Me(Ie,"ProtectiveHeal")[0],ee=Me(Ie,"AggressiveHeal")[0],ne=Me(Ie,"XVulnerable")[0].map((function(e){return e.replace(/\{0\}/g,"")})),re=Me(Ie,"XProtectEnhance")[0],ae=Me(Ie,"SecondChance")[0],F=Me(Ie,"Protect")[0],ce=Me(Ie,"Invulnerable")[0],ue=Me(Ie,"XActionPoint")[0].map((function(e){return e.replace(/\{0\}/g,"")})),ie=Me(Ie,"XActionPointNext")[0].map((function(e){return e.replace(/\{0\}/g,"")})),pe=Me(Ie,"XDrawNext")[0].map((function(e){return e.replace(/\{0\}/g,"")})),M=Me(Ie,"XFinale")[0].map((function(e){return e.replace(/\{0\}/g,"")})),Me(Ie,"XEnchant")[0].map((function(e){return e.replace(/\{0\}/g,"")})),J=Me(Ie,"LifeSteal")[0],te=Me(Ie,"Curse")[0],Xe=Me(Ie,"Humanoid")[0],me=Me(Ie,"Creature")[0],he=Me(Ie,"Spirit")[0],be=Me(Ie,"Matter")[0],Fe=[Xe,me,he,be],We=[W,G,O,x,F,u,i,p,f,l,o,s,X,Xe,me,he,be,z,n,te,I,w,J,Z,y,S],function(){se=["Humanoid","Creature","Spirit","Matter","LifeSteal","TurnCharge","PracticePerfect","FocusEnergy","NegativePower","ComboBlend","Scheduled","AutoFire","Overloaded","LastResort","Gamble","Exhaust","Curse"];var e=Me(Ie,"XSynergy")[0].map((function(e){return e.replace(/\{0\}/g,"")}));se=se.map((function(e){return Me(Ie,e)[0]})),xe.map((function(n,r){var t=n.map((function(n,r){return n+" "+e[r]}));se.push(t)}))}(),we.map((function(e){switch(e[0]){case"EElementXAttackDescr":var n=je("Fire Attack",e,u,M),r=je("Water Attack",e,i,M),c=je("Earth Attack",e,p,M),V=je("Wind Attack",e,l,M),T=je("Thunder Attack",e,f,M),J=je("Dark Attack",e,o,M),N=je("Light Attack",e,s,M),U=je("Element Attack",e,X,M);ze.push(n,r,c,V,T,J,N,U);break;case"VRIDamageXDescr":var K=je("Venom Explode",e,k,"20%"),Q=je("Restrain Explode",e,D,"20%"),Z=je("Insane Explode",e,P,"20%");ze.push(K,Q,Z);break;case"DebuffRemoveXAttackDescr":var Y=["Removal attack",e[1],e[2],e[3]].map((function(e){return e.replace("{0}","X%")}));ze.push(Y);break;case"EElementXHealDescr":var $=je("Fire Heal",e,u,"X%"),ee=je("Water Heal",e,i,"X%"),te=je("Earth Heal",e,p,"X%"),le=je("Wind Heal",e,l,"X%"),fe=je("Thunder Heal",e,f,"X%"),oe=je("Dark Heal",e,o,"X%"),se=je("Light Heal",e,s,"X%"),Xe=je("Elemental Heal",e,X,"X%");ze.push($,ee,te,le,fe,oe,se,Xe);break;case"BuffRemoveXHealDescr":var me=je("Removal heal",e,F,ae);ze.push(me);break;case"DrawXAbilityDescr":var he=["Draw Ability",e[1],e[2],e[3]].map((function(e){return e.replace("{0}","X")}));ze.push(he);break;case"ForceXTurnPassDescr":var be=["Pass Turn",e[1],e[2],e[3]].map((function(e){return e.replace("{0}","X")}));ze.push(be);break;case"DoubleActionBuffDescr":var ve=["Double Action Buff",e[1],e[2],e[3]];ze.push(ve);break;case"DoubleBuffDescr":var de=["Double Buff",e[1],e[2],e[3]];ze.push(de);break;case"DoubleDebuffDescr":var Ae=["Double Debuffs",e[1],e[2],e[3]];ze.push(Ae);break;case"DoubleVulnDescr":var ge=["Double Vulnerable",e[1],e[2],e[3]];ze.push(ge);break;case"StatVuln":case"ElementVuln":break;case"RecoverXAbilityDescr":var ke=Ne("Recover skill",e,"{0}","1");ze.push(ke);break;case"LoseXMaxHPDescr":var De=Ne("Sacrifice HP",e,"{1}",x).map((function(e){return e.replace("{0}","10x%")}));ze.push(De);break;case"DiscardXDescr":var Pe=Ne("Discard hand",e,"{0}","1");ze.push(Pe);break;case"FarewellXDescr":var Se=Ne("Fare Well",e,"{0}","99999");ze.push(Se);break;case"BuffSwapXDescr":var ye=Ne("Swap Buffs",e,"{0}",F).map((function(e,n){return e.replace("{1}",ce[n])}));ye=ye.map((function(e,n){return e.replace("{2}",ae[n])})),ze.push(ye);break;case"DebuffSwapDescr":var Re=["Swap Debuffs",e[1],e[2],e[3]];ze.push(Re);break;case"CurseStartXDebuffDescr":var He=je("Weak MaxHP (Ability become Passive)",e,"X",x).map((function(e,n){return e.replace("X%",x[n]+" Debuff")})),Ie=je("Weak Strength (Ability become Passive)",e,"X",W).map((function(e,n){return e.replace("X%",W[n]+" Debuff")})),we=je("Weak Agility (Ability become Passive)",e,"X",G).map((function(e,n){return e.replace("X%",G[n]+" Debuff")})),Ce=je("Weak Intelligence (Ability become Passive)",e,"X",O).map((function(e,n){return e.replace("X%",O[n]+" Debuff")})),Be=je("Burned (Ability become Passive)",e,"X",m).map((function(e,n){return e.replace("X%",m[n])})),Ee=je("Chill (Ability become Passive)",e,"X",h).map((function(e,n){return e.replace("X%",h[n])})),We=je("Seeded (Ability become Passive)",e,"X",b).map((function(e,n){return e.replace("X%",b[n])})),Fe=je("Dizzy (Ability become Passive)",e,"X",v).map((function(e,n){return e.replace("X%",v[n])})),Me=je("Paralysed (Ability become Passive)",e,"X",d).map((function(e,n){return e.replace("X%",d[n])})),Le=je("Depress (Ability become Passive)",e,"X",A).map((function(e,n){return e.replace("X%",A[n])})),_e=je("Blinded (Ability become Passive)",e,"X",g).map((function(e,n){return e.replace("X%",g[n])})),Ue=je("Bleeding (Ability become Passive)",e,"X",y).map((function(e,n){return e.replace("X%",y[n])})),Ke=je("Injured (Ability become Passive)",e,"X",S).map((function(e,n){return e.replace("X%",S[n])})),Qe=je("Insane (Ability become Passive)",e,"X",P).map((function(e,n){return e.replace("X%",P[n])})),Ze=je("Restrained (Ability become Passive)",e,"X",D).map((function(e,n){return e.replace("X%",D[n])})),qe=je("Venomed (Ability become Passive)",e,"X",k).map((function(e,n){return e.replace("X%",k[n])})),Ye=je("Venomed (Ability become Passive)",e,"X",R).map((function(e,n){return e.replace("X%",R[n])})),$e=je("Venomed (Ability become Passive)",e,"X",H).map((function(e,n){return e.replace("X%",H[n])})),en=je("Cursed (Ability become Passive)",e,"X",t).map((function(e,n){return e.replace("X%",t[n]+" "+q[n])}));ze.push(Be,Ee,We,Fe,Me,Le,_e,en,Ue,Ke,Qe,Ze,qe,Ye,$e,He,Ie,we,Ce);break;case"DiscardAbilityXAttackDescr":var nn=je("Discard HP Attack",e,x,"X"),rn=je("Discard Str Attack",e,W,"X"),tn=je("Discard Agi Attack",e,G,"X"),an=je("Discard Int Attack",e,O,"X");ze.push(nn,rn,tn,an);break;case"RemoveXDebuffsJoin":var cn=je("Burn Remove",e,m,M),un=je("Chill Remove",e,h,M),pn=je("Seed Remove",e,b,M),ln=je("Dizzy Remove",e,v,M),fn=je("Paralysis Remove",e,d,M),on=je("Depress Remove",e,A,M),sn=je("Blind Remove",e,g,M),Xn=je("Bleed Remove",e,y,M),mn=je("Injury Remove",e,S,M),hn=je("Insane Remove",e,P,M),bn=je("Restrain Remove",e,D,M),vn=je("Venom Remove",e,k,M),dn=je("All Elemental Status Effect Remove",e,X,M),An=je("Debuff Remove",e,"X",M).map((function(e,n){return e.replace("X",a[n]+" "+z[n]+", "+ne[n])}));ze.push(cn,un,pn,ln,fn,on,sn,Xn,mn,hn,bn,vn,dn,An);break;case"ApplyXSelfJoin":var gn=je("Charge",e,I,M),kn=je("Guard",e,w,M),Dn=je("Stack Charge",e,C,M),Pn=je("Stack Guard",e,B,M),Sn=je("Apply Certain",e,"X",M).map((function(e,n){return e.replace("X","X "+E[n])})),yn=je("Pure Element",e,X,M),Rn=je("Protect Enhance",e,F,re);ze.push(gn,kn,Dn,Pn,Sn,yn,Rn),Oe.map((function(n,r){var t=Ve.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" Element",c=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+X[n])}));c.splice(0,1,a),ze.push(c)}));var Hn=je("Paralyed On Self",e,"X",re).map((function(e,n){return e.replace("X","X "+d[n])})),In=je("Burned On Self",e,"X",re).map((function(e,n){return e.replace("X","X "+m[n])})),wn=je("Seeded On Self",e,"X",re).map((function(e,n){return e.replace("X","X "+b[n])})),Cn=je("Bleeding On Self",e,"X",re).map((function(e,n){return e.replace("X","X "+y[n])})),Bn=je("Blinded On Self",e,"X",re).map((function(e,n){return e.replace("X","X "+g[n])})),En=je("Injured On Self",e,"X",re).map((function(e,n){return e.replace("X","X "+S[n])}));ze.push(Hn,In,wn,Cn,Bn,En),Te.map((function(n,r){var t=Te.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" On Self",c=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+X[n])}));c.splice(0,1,a),ze.push(c)})),Je.map((function(n,r){var t=Je.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" On Self",c=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+X[n])}));c.splice(0,1,a),ze.push(c)})),Ge.map((function(n,r){if(r>0){var t=xe.filter((function(e){return e.includes(n)||e==n}))[0],a="Debuff "+t[1]+" On Self",c=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+z[n])}));c.splice(0,1,a),ze.push(c)}}));var Vn=je("Cursed On Self",e,"X",re).map((function(e,n){return e.replace("X","X "+t[n]+" "+q[n])}));ze.push(Vn);break;case"ApplyXOpponentJoin":var Tn=Ne("HP Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+x[n]+" Vulnerable")})),Jn=Ne("Strength Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+W[n]+" "+ne[n])})),xn=Ne("Agility Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+G[n]+" "+ne[n])})),Wn=Ne("Intelligence Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+O[n]+" "+ne[n])})),Gn=Ne("Protect Pierce",e,"{0}","X").map((function(e,n){return e.replace("X","X "+F[n]+" "+ne[n])})),On=Ne("Fire Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+u[n]+" "+ne[n])})),Fn=Ne("Water Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+i[n]+" "+ne[n])})),Mn=Ne("Earth Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+p[n]+" "+ne[n])})),Ln=Ne("Wind Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+l[n]+" "+ne[n])})),jn=Ne("Thunder Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+f[n]+" "+ne[n])})),Nn=Ne("Dark Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+o[n]+" "+ne[n])})),zn=Ne("Light Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+s[n]+" "+ne[n])})),_n=Ne("Injury Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+S[n]+" "+ne[n])})),Un=Ne("Bleed Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+y[n]+" "+ne[n])})),Kn=Ne("Inflict Random status effects",e,"{0}","X").map((function(e,n){return e.replace("X","X "+t[n]+" "+q[n])}));ze.push(On,Fn,Mn,Ln,jn,Nn,zn,_n,Un,Kn,Tn,Jn,xn,Wn,Gn),Ge.map((function(n,r){var t=xe.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" Debuff",c=e.map((function(e,n){return e.replace("{0}","X "+t[n]+" "+z[n])}));c.splice(0,1,a),ze.push(c)})),Te.map((function(n,r){var t=Te.filter((function(e){return e.includes(n)||e==n}))[0],a="Inflict "+t[1],c=e.map((function(e,n){return e.replace("{0}","X "+t[n])}));c.splice(0,1,a),ze.push(c)})),Je.map((function(n,r){var t=Je.filter((function(e){return e.includes(n)||e==n}))[0],a="Inflict "+t[1],c=e.map((function(e,n){return e.replace("{0}","X "+t[n]+" "+z[n])}));c.splice(0,1,a),ze.push(c)}));break;case"GainXProtectJoin":var Qn=je("HP Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+x[n]+" "+F[n]).replace("{1}","")})),Zn=je("Strength Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+W[n]+" "+F[n]).replace("{1}","")})),qn=je("Agility Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+G[n]+" "+F[n]).replace("{1}","")})),Yn=je("Intelligence Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+O[n]+" "+F[n]).replace("{1}","")})),$n=je("Raw Protect",e,!1,"X").map((function(e,n){return e.replace("X","X  "+F[n]).replace("{1}","")})),er=Ne("Second Chance",e,"{0}","X").map((function(e,n){return e.replace("{1}",ae[n])})),nr=Ne("Invulnerable",e,"{0}","X").map((function(e,n){return e.replace("{1}",ce[n])})),rr=Ne("Gain AP",e,"{0}","X").map((function(e,n){return e.replace("{1}",ue[n])})),tr=Ne("Gain AP Next",e,"{0}","X").map((function(e,n){return e.replace("{1}",ie[n])})),ar=Ne("Draw Ability Next",e,"{0}","X").map((function(e,n){return e.replace("{1}",pe[n])}));ze.push(Qn,Zn,qn,Yn,rr,tr,ar,$n,er,nr),Ge.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Buff",a=e.map((function(e,n){return e.replace("{0}","X").replace("{1}",r[n]+" "+L[n])}));a.splice(0,1,t),ze.push(a)})),Ge.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Buff",a=e.map((function(e,n){return e.replace("{0}","X").replace("{1}",r[n]+" "+j[n])}));a.splice(0,1,t),ze.push(a)})),Ge.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Debuff",a=e.map((function(e,n){return e.replace("{0}","X").replace("{1}",r[n]+" "+_[n])}));a.splice(0,1,t),ze.push(a)})),Oe.map((function(n){var r=Ve.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Buff",a=e.map((function(e,n){return e.replace(/\{0\}/g,"X").replace("{1}",r[n]+" "+j[n])}));a.splice(0,1,t),ze.push(a)}));break;case"DealXDamageJoin":var cr=je("Raw Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X")})),ur=je("HP Attack",e,!1,"X% ").map((function(e,n){return e.replace("X%","X% "+x[n])})),ir=je("Strength Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+W[n])})),pr=je("Agility Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+G[n])})),lr=je("Intelligence Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+O[n])})),fr=je("Protect Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+F[n])}));ze.push(cr,ur,ir,pr,lr,fr);break;case"HealXJoin":var or=je("Raw Heal",e,!1,"X"),sr=je("HP Heal",e,!1,"X% ").map((function(e,n){return e.replace("X%","X% "+x[n])})),Xr=je("Strength Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+W[n])})),mr=je("Agility Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+G[n])})),hr=je("Intelligence Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+O[n])})),br=je("Protect Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+F[n])}));ze.push(or,sr,Xr,mr,hr,br,["Do nothing","Do nothing","Do nothing","Do nothing"])}})),document.getElementById("langSel").value){case"English":x=x[1],W=W[1],G=G[1],O=O[1],F=F[1],u=u[1],i=i[1],p=p[1],l=l[1],f=f[1],o=o[1],s=s[1],m=m[1],h=h[1],b=b[1],v=v[1],d=d[1],A=A[1],g=g[1],k=k[1],P=P[1],y=y[1],D=D[1],S=S[1];break;case"Chinese":x=x[2],W=W[2],G=G[2],O=O[2],F=F[2],u=u[2],i=i[2],p=p[2],l=l[2],f=f[2],o=o[2],s=s[2],m=m[2],h=h[2],b=b[2],v=v[2],d=d[2],A=A[2],g=g[2],k=k[2],P=P[2],y=y[2],D=D[2],S=S[2];break;case"Chinese(Trad)":x=x[3],W=W[3],G=G[3],O=O[3],F=F[3],u=u[3],i=i[3],p=p[3],l=l[3],f=f[3],o=o[3],s=s[3],m=m[3],h=h[3],b=b[3],v=v[3],d=d[3],A=A[3],g=g[3],k=k[3],P=P[3],y=y[3],D=D[3],S=S[3]}}))},passives:function(){return ve.raw(de,3).then((function(e){return e.data})).then((function(e){Ee.skills(),F=Me(Ie,"Protect")[0],k=Me(Ie,"Venom")[0],P=Me(Ie,"Insane")[0],D=Me(Ie,"Restrain")[0],Ce.map((function(e){switch(null==_e[0]||_e[0].jobon,e[0]){case"JobIsOn":_e.push({jobon:e});break;case"DamageMitigateXDescrP":var n=e.map((function(e){return e.replace("{0}","10X%")}));(n=n.map((function(e){return e.replace("{1}","")}))).splice(0,1,"Damage Mitigate"),_e.push(n);break;case"GainXPassiveJoin":Ge.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Boost",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+N[n])}));a.splice(0,1,t),_e.push(a);var c=r[1]+" Drain",u=e.map((function(e,n){return e.replace("{0}","X "+r[n]+K[n])}));u.splice(0,1,c),_e.push(u)})),Ge.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Nerf",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+U[n])}));a.splice(0,1,t),_e.push(a)})),Je.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Absorb",a=e.map((function(e,n){return e.replace("{0}",r[n]+Q[n])}));a.splice(0,1,t),_e.push(a)}));var r=["Protective Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+$[n])})),a=["Aggressive Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+ee[n])})),c=["Rage",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+V[n])})),u=["Instinct",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+T[n])}));_e.push(r,a,c,u);break;case"ApplyXReflectJoin":Te.map((function(n){var r=Te.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Reflect",a=e.map((function(e,n){return e.replace("{0}",r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)}));var i=["Protect Reflect",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+$[n])})),p=["Status Effects Reflect",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+q[n])}));_e.push(i,p);break;case"ApplyXCounterJoin":Ge.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Reflect",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)})),Je.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Reflect",a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)}));break;case"ImmuneToXJoin":Te.map((function(n){var r=Te.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Immune",a=e.map((function(e,n){return e.replace("{0}",r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)})),Je.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Immune",a=e.map((function(e,n){return e.replace("{0}",r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)}));var l=["Debuff Immnue",e[1],e[2],e[3]];l=(l=l.map((function(e,n){return e.replace("{0}",Y[n])}))).map((function(e,n){return e.replace("{1}","")}));var f=["Element Status Immnue",e[1],e[2],e[3]];f=(f=f.map((function(e,n){return e.replace("{0}",q[n])}))).map((function(e,n){return e.replace("{1}","")})),_e.push(l,f);break;case"StartCombatXJoin":var o=["Second Chance",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+ae[n])})),s=["Start Charge",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}",I[n]+", "+C[n])})),m=["Start Guard",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}",w[n]+", "+B[n])})),h=["Rage",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+V[n])})),b=["Instinct",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+T[n])}));_e.push(o,s,m,h,b),Ge.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Start Buff",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+" "+L[n])}));a.splice(0,1,t),_e.push(a)})),Oe.map((function(n){var r=Ve.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Element",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+" "+X[n])}));a.splice(0,1,t),_e.push(a)})),Ge.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Protect",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n]+" "+F[n])}));a.splice(0,1,t),_e.push(a)})),Ge.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t="Weak "+r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+" "+z[n])}));a.splice(0,1,t),_e.push(a)})),Te.map((function(n){var r=Te.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));a.splice(0,1,t),_e.push(a)})),Je.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));a.splice(0,1,t),_e.push(a)}));var v=je("Cursed",e,"X",re).map((function(e,n){return e.replace("X","X "+t[n]+" "+q[n])}));_e.push(v);break;case"TurnDamageXJoin":Ge.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Turn Attack",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)}));var d=["Protect Turn Attack",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+F[n])}));d=d.map((function(e){return e.replace("{1}","")})),_e.push(d);break;case"TurnHealXJoin":Ge.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Turn Heal",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)}));var A=["Protect Turn Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+F[n])}));A=A.map((function(e){return e.replace("{1}","")})),_e.push(A);break;case"ActionDamageXJoin":Ge.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Attack",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)}));var g=["Protect Action Attack",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+F[n])}));g=g.map((function(e){return e.replace("{1}","")})),_e.push(g);break;case"ActionHealXJoin":Ge.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Heal",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)}));var S=["Protect Action Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+F[n])}));S=S.map((function(e){return e.replace("{1}","")})),_e.push(S);break;case"ActionBuffXJoin":Ge.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t="Stack "+r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));a.splice(0,1,t),_e.push(a)}));break;case"ActionDebuffXJoin":var y=["After Action Venom",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+k[n])})),R=["After Action Insane",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+P[n])})),H=["After Action Restrain",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+D[n])}));_e.push(y,R,H)}}));var n=Me(Ie,"XDigger")[0].map((function(e){return e.replace("{0}","")})),r=Me(Ie,"Crystal")[0],a=Me(Ie,"Gold")[0],u=Be.filter((function(e){return"AutoProtectDescr"==e[0]}))[0].map((function(e,n){return e.replace("{0}",F[n])}));(u=u.map((function(e,n){return e.replace("{1}","10X%")}))).splice(0,1,"Auto Protect");var i=Be.filter((function(e){return"InvulnXFullStartDescr"==e[0]}))[0].map((function(e,n){return e.replace("{0}",ce[n])}));i.splice(0,1,"Invulnerable");var p=["Add Draw","X","X","X"].map((function(e,n){return e.replace("X",c[n]+" +X")})),l=["Reduce Draw","X","X","-X"].map((function(e,n){return e.replace("X",c[n]+" -X")})),f=["Gold Digger","X","X","X"].map((function(e,r){return e.replace("X",a[r]+n[r])})),o=["Crystal Digger","X","X","X"].map((function(e,t){return e.replace("X",r[t]+n[t])}));_e.push(["Add Action","AP +X","AP +X","AP +X"],["Reduce Action","AP -X","AP -X","AP -X"],p,l,f,o,u,i),We.map((function(e){var n=We.filter((function(n){return n.includes(e)||n==e}))[0],r=n.map((function(e,n){return e+oe[n]}));"Humanoid"==n[0]||"Creature"==n[0]||"Spirit"==n[0]||"Matter"==n[0]?r.splice(0,1,n[0]+" Expert"):"Reflect"==n[0]?r.splice(0,1,n[0]+oe[1]):r.splice(0,1,n[1]+oe[1]),_e.push(r)})),le.splice(0,1,"Skill Stack Master"),fe.splice(0,1,"Jack-of-all-Trades"),_e.push(fe,le),console.log(_e)}))}}},26535:(e,n,r)=>{"use strict";e.exports=r.p+"ab25a53533fa074274e1.png"},75657:(e,n,r)=>{"use strict";e.exports=r.p+"bf99e92bf3dcd527df8f.png"},74069:(e,n,r)=>{"use strict";e.exports=r.p+"c4517d24cb0e60530c58.png"},52798:(e,n,r)=>{"use strict";e.exports=r.p+"b2e23163716139708c80.png"},37947:(e,n,r)=>{"use strict";e.exports=r.p+"b2145416ec62da90cdab.png"}}]);