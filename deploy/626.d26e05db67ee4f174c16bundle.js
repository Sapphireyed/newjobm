(self.webpackChunklrnwebpack=self.webpackChunklrnwebpack||[]).push([[626,82],{12850:(e,n,r)=>{"use strict";r.d(n,{Zs:()=>Ee,J_:()=>Ae,Wu:()=>ge,Tl:()=>ke,Xx:()=>De,Ve:()=>Pe,VH:()=>Se,wP:()=>ye,Ps:()=>Ie,MG:()=>Me,qj:()=>Re,Ei:()=>He,T4:()=>Ue,LN:()=>ze,vF:()=>se,X_:()=>_e,ur:()=>c,e4:()=>i,QZ:()=>p,tE:()=>l,E:()=>o,pH:()=>f,mY:()=>s,eX:()=>m,zb:()=>h,Bf:()=>b,KI:()=>d,L6:()=>v,zd:()=>A,UE:()=>g,OR:()=>k,JN:()=>P,Vg:()=>y,g_:()=>D,gT:()=>S,lR:()=>J,CC:()=>W,dJ:()=>G,a9:()=>F,wC:()=>M}),r.g.fetch=r(83300);var t,a,u,c,i,l,p,o,f,s,X,m,h,b,d,v,A,g,k,D,P,S,y,R,H,I,B,C,w,E,V,T,x,J,W,F,G,M,O,N,L,j,z,_,U,K,Q,Z,q,Y,$,ee,ne,re,te,ae,ue,ce,ie,le,pe,oe,fe,se,Xe,me,he,be,de=r(62538),ve="1B2olPb1sTgFSskGBC68czBBt1ICh2jGmQkIKOi_c39w",Ae=[],ge=[],ke=[],De=[],Pe=[],Se=[],ye=[],Re=[],He=[],Ie=[],Be=[],Ce=[],we=[],Ee={skills:function(){return de.raw(ve,3).then((function(e){return e.data})).then((function(e){e.shift(),e.shift();var n=e.map((function(e,n){if("Skills Titles"==e[0])return n}));n=n.find((function(e){return null!=e}));var r=e.map((function(e,n){if("Skills Descriptions"==e[0])return n}));r=r.find((function(e){return null!=e}));var t=e.map((function(e,n){if("Buffs, Debuffs, Applies & Passives Descriptions"==e[0])return n}));t=t.find((function(e){return null!=e}));var a=e.map((function(e,n){if("Ability's Skill Unit Term/Descriptions"==e[0])return n}));a=a.find((function(e){return null!=e}));var u=e.map((function(e,n){if("Passive's Skill Unit Term/Desciptions"==e[0])return n}));u=u.find((function(e){return null!=e})),Ie=e.slice(0,r),e.slice(r,t),we=e.slice(t,a),(Be=e.slice(a,u)).shift(),(Ce=e.slice(u)).shift()}))},characters:function(){return de.raw(ve,9).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),Se=e}))},chapters:function(){return de.raw(ve,11).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),ye=e,console.log(ye)}))},rules:function(){return de.raw(ve,13).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),Re=e}))},traits:function(){return de.raw(ve,12).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),He=e}))},materials:function(){return de.raw(ve,7).then((function(e){return e.data})).then((function(e){e.shift(),e.shift();var n=e.map((function(e,n){if("Description"==e[0])return n}));n=n.find((function(e){return null!=e})),(Ae=e).length=n}))},words:function(){return de.raw(ve,1).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),ge=e}))},jobs:function(){return de.raw(ve,8).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),ke=e}))},abils:function(){return de.raw(ve,5).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),De=e}))},passives:function(){return de.raw(ve,6).then((function(e){return e.data})).then((function(e){e.shift(),e.shift(),e.pop(),Pe=e}))}},Ve=[],Te=[],xe=[],Je=[],We=[],Fe=["Max HP","Strength","Agility","Intelligence"],Ge=["Fire","Water","Earth","Wind","Thunder","Dark","Light"],Me=[];function Oe(e,n){return e.filter((function(e){return e[0]==n}))}function Ne(e,n,r,t,a,u,c,i){return(e=(e=(e=(e=(e=(e=0!=n?(e=e.replace(/\{0\}/g,n)).replace(/\{1\}/g,r):e.replace(/\{0\}/g,r)).replace(/\{1\}/g,r)).replace(/\{2\}/g,t)).replace(/\{3\}/g,a)).replace(/\{4\}/g,u)).replace(/\{5\}/g,c)).replace(/\{6\}/g,i)}function Le(e,n,r,t){return[e,Ne(n[1],r[1]||r,"X%",(r[1]||r)+" "+(t[1]||t)),Ne(n[2],r[2]||r,"X%",(r[2]||r)+" "+(t[2]||t)),Ne(n[3],r[3]||r,"X%",(r[3]||r)+" "+(t[3]||t))]}function je(e,n,r,t){var a=[e];return n.map((function(e,n){a.push(e.replace(r,t[n]||t))})),a.splice(1,1),a}var ze=[],_e=[],Ue={abilities:function(){return de.raw(ve,3).then((function(e){return e.data})).then((function(e){t=ge.filter((function(e){return"Random"==e[0]}))[0],a=ge.filter((function(e){return"All"==e[0]}))[0],u=ge.filter((function(e){return"HandDraw"==e[0]}))[0];var n=Oe(Ie,"Combo")[0];switch(pe=Oe(Ie,"SkillStackMaster")[0],oe=Oe(Ie,"NormalMaster")[0],fe=null==Oe(Ie,"XMaster")[0]?"":Oe(Ie,"XMaster")[0].map((function(e){return e.replace(/\{0\}/g,"")})),c=Oe(Ie,"Fire")[0],i=Oe(Ie,"Water")[0],l=Oe(Ie,"Earth")[0],p=Oe(Ie,"Wind")[0],o=Oe(Ie,"Thunder")[0],f=Oe(Ie,"Dark")[0],s=Oe(Ie,"Light")[0],X=Oe(Ie,"Element")[0],Ve=[c,i,l,p,o,f,s,X],m=Oe(Ie,"Burn")[0],h=Oe(Ie,"Chill")[0],b=Oe(Ie,"Seed")[0],d=Oe(Ie,"Dizzy")[0],v=Oe(Ie,"Paralysis")[0],A=Oe(Ie,"Depress")[0],g=Oe(Ie,"Blind")[0],k=Oe(Ie,"Venom")[0],D=Oe(Ie,"Restrain")[0],P=Oe(Ie,"Insane")[0],S=Oe(Ie,"Injury")[0],y=Oe(Ie,"Bleed")[0],R=Oe(Ie,"Confuse")[0],H=Oe(Ie,"Slack")[0],Te=[m,h,b,d,v,A,g,S,y,R,H],xe=[k,P,D],q=Oe(Ie,"EStatusEffect")[0],Y=Oe(Ie,"StatDebuff")[0],I=Oe(Ie,"Charge")[0],B=Oe(Ie,"Guard")[0],C=Oe(Ie,"StackCharge")[0],w=Oe(Ie,"StackGuard")[0],V=Oe(Ie,"Rage")[0],T=Oe(Ie,"Instinct")[0],E=Oe(Ie,"Certain")[0],J=Oe(Ie,"MaxHP")[0],W=Oe(Ie,"Strength")[0],F=Oe(Ie,"Agility")[0],G=Oe(Ie,"Intelligence")[0],Je.push(J,W,F,G),N=Oe(Ie,"Buff")[0],L=null==Oe(Ie,"XActionBuff")[0]?"":Oe(Ie,"XActionBuff")[0].map((function(e){return e.replace(/\{0\}/g,"")})),j=null==Oe(Ie,"XStatBoost")[0]?"":Oe(Ie,"XStatBoost")[0].map((function(e){return e.replace(/\{0\}/g,"")})),z=Oe(Ie,"Debuff")[0],_=null==Oe(Ie,"XActionDebuff")[0]?"":Oe(Ie,"XActionDebuff")[0].map((function(e){return e.replace(/\{0\}/g,"")})),U=null==Oe(Ie,"XNerf")[0]?"":Oe(Ie,"XNerf")[0].map((function(e){return e.replace(/\{0\}/g,"")})),K=null==Oe(Ie,"XStatDrain")[0]?"":Oe(Ie,"XStatDrain")[0].map((function(e){return e.replace(/\{0\}/g,"")})),Q=null==Oe(Ie,"XAbsorb")[0]?"":Oe(Ie,"XAbsorb")[0].map((function(e){return e.replace(/\{0\}/g,"")})),Z=Oe(Ie,"Reflect")[0],null==Oe(Ie,"XImmune")[0]||Oe(Ie,"XImmune")[0].map((function(e){return e.replace(/\{0\}/g,"")})),$=Oe(Ie,"ProtectiveHeal")[0],ee=Oe(Ie,"AggressiveHeal")[0],ne=null==Oe(Ie,"XVulnerable")[0]?"":Oe(Ie,"XVulnerable")[0].map((function(e){return e.replace(/\{0\}/g,"")})),re=Oe(Ie,"XProtectEnhance")[0],ae=Oe(Ie,"SecondChance")[0],M=Oe(Ie,"Protect")[0],ue=Oe(Ie,"Invulnerable")[0],ce=null==Oe(Ie,"XActionPoint")[0]?"":Oe(Ie,"XActionPoint")[0].map((function(e){return e.replace(/\{0\}/g,"")})),ie=null==Oe(Ie,"XActionPointNext")[0]?"":Oe(Ie,"XActionPointNext")[0].map((function(e){return e.replace(/\{0\}/g,"")})),le=null==Oe(Ie,"XDrawNext")[0]?"":Oe(Ie,"XDrawNext")[0].map((function(e){return e.replace(/\{0\}/g,"")})),O=null==Oe(Ie,"XFinale")[0]?"":Oe(Ie,"XFinale")[0].map((function(e){return e.replace(/\{0\}/g,"")})),null==Oe(Ie,"XEnchant")[0]||Oe(Ie,"XEnchant")[0].map((function(e){return e.replace(/\{0\}/g,"")})),x=Oe(Ie,"LifeSteal")[0],te=Oe(Ie,"Curse")[0],Xe=Oe(Ie,"Humanoid")[0],me=Oe(Ie,"Creature")[0],he=Oe(Ie,"Spirit")[0],be=Oe(Ie,"Matter")[0],Me=[Xe,me,he,be],We=[W,F,G,J,M,c,i,l,o,p,f,s,X,Xe,me,he,be,z,n,te,I,B,x,Z,y,S],function(){se=["Humanoid","Creature","Spirit","Matter","LifeSteal","TurnCharge","PracticePerfect","FocusEnergy","NegativePower","ComboBlend","Scheduled","AutoFire","Overloaded","LastResort","Gamble","Exhaust","Curse"];var e=null==Oe(Ie,"XSynergy")[0]?"":Oe(Ie,"XSynergy")[0].map((function(e){return e.replace(/\{0\}/g,"").replace("X","")}));se=se.map((function(e){return Oe(Ie,e)[0]})),Je.map((function(n,r){var t=n.map((function(n,r){return n+" "+e[r]}));se.push(t)}))}(),se=se.map((function(e){return["ComboBlend"==e[0]?e[0]="Combo Blend":e[0],e[1],e[2],e[3]]})),console.log(se),Be.map((function(e){switch(e[0]){case"EElementXAttackDescr":var n=Le("Fire Attack",e,c,O),r=Le("Water Attack",e,i,O),u=Le("Earth Attack",e,l,O),V=Le("Wind Attack",e,p,O),T=Le("Thunder Attack",e,o,O),x=Le("Dark Attack",e,f,O),j=Le("Light Attack",e,s,O),U=Le("Element Attack",e,X,O);ze.push(n,r,u,V,T,x,j,U);break;case"VRIDamageXDescr":var K=Le("Venom Explode",e,k,"20%"),Q=Le("Restrain Explode",e,D,"20%"),Z=Le("Insane Explode",e,P,"20%");ze.push(K,Q,Z);break;case"DebuffRemoveXAttackDescr":var Y=["Removal attack",e[1],e[2],e[3]].map((function(e){return e.replace("{0}","X%")}));ze.push(Y);break;case"EElementXHealDescr":var $=Le("Fire Heal",e,c,"X%"),ee=Le("Water Heal",e,i,"X%"),te=Le("Earth Heal",e,l,"X%"),pe=Le("Wind Heal",e,p,"X%"),oe=Le("Thunder Heal",e,o,"X%"),fe=Le("Dark Heal",e,f,"X%"),se=Le("Light Heal",e,s,"X%"),Xe=Le("Elemental Heal",e,X,"X%");ze.push($,ee,te,pe,oe,fe,se,Xe);break;case"BuffRemoveXHealDescr":var me=Le("Removal heal",e,M,ae);ze.push(me);break;case"DrawXAbilityDescr":var he=["Draw Ability",e[1],e[2],e[3]].map((function(e){return e.replace("{0}","X")}));ze.push(he);break;case"ForceXTurnPassDescr":var be=["Pass Turn",e[1],e[2],e[3]].map((function(e){return e.replace("{0}","X")}));ze.push(be);break;case"DoubleActionBuffDescr":var de=["Double Action Buff",e[1],e[2],e[3]];ze.push(de);break;case"DoubleBuffDescr":var ve=["Double Buff",e[1],e[2],e[3]];ze.push(ve);break;case"DoubleDebuffDescr":var Ae=["Double Debuffs",e[1],e[2],e[3]];ze.push(Ae);break;case"DoubleVulnDescr":var ge=["Double Vulnerable",e[1],e[2],e[3]];ze.push(ge);break;case"StatVuln":case"ElementVuln":break;case"RecoverXAbilityDescr":var ke=je("Recover skill",e,"{0}","1");ze.push(ke);break;case"LoseXMaxHPDescr":var De=je("Sacrifice HP",e,"{1}",J).map((function(e){return e.replace("{0}","10x%")}));ze.push(De);break;case"DiscardXDescr":var Pe=je("Discard hand",e,"{0}","1");ze.push(Pe);break;case"FarewellXDescr":var Se=je("Fare Well",e,"{0}","99999");ze.push(Se);break;case"BuffSwapXDescr":var ye=je("Swap Buffs",e,"{0}",M).map((function(e,n){return e.replace("{1}",ue[n])}));ye=ye.map((function(e,n){return e.replace("{2}",ae[n])})),ze.push(ye);break;case"DebuffSwapDescr":var Re=["Swap Debuffs",e[1],e[2],e[3]];ze.push(Re);break;case"CurseStartXDebuffDescr":var He=Le("Weak MaxHP (Ability become Passive)",e,"X",J).map((function(e,n){return e.replace("X%",J[n]+" Debuff")})),Ie=Le("Weak Strength (Ability become Passive)",e,"X",W).map((function(e,n){return e.replace("X%",W[n]+" Debuff")})),Be=Le("Weak Agility (Ability become Passive)",e,"X",F).map((function(e,n){return e.replace("X%",F[n]+" Debuff")})),Ce=Le("Weak Intelligence (Ability become Passive)",e,"X",G).map((function(e,n){return e.replace("X%",G[n]+" Debuff")})),we=Le("Burned (Ability become Passive)",e,"X",m).map((function(e,n){return e.replace("X%",m[n])})),Ee=Le("Chill (Ability become Passive)",e,"X",h).map((function(e,n){return e.replace("X%",h[n])})),We=Le("Seeded (Ability become Passive)",e,"X",b).map((function(e,n){return e.replace("X%",b[n])})),Me=Le("Dizzy (Ability become Passive)",e,"X",d).map((function(e,n){return e.replace("X%",d[n])})),Oe=Le("Paralysed (Ability become Passive)",e,"X",v).map((function(e,n){return e.replace("X%",v[n])})),Ne=Le("Depress (Ability become Passive)",e,"X",A).map((function(e,n){return e.replace("X%",A[n])})),_e=Le("Blinded (Ability become Passive)",e,"X",g).map((function(e,n){return e.replace("X%",g[n])})),Ue=Le("Bleeding (Ability become Passive)",e,"X",y).map((function(e,n){return e.replace("X%",y[n])})),Ke=Le("Injured (Ability become Passive)",e,"X",S).map((function(e,n){return e.replace("X%",S[n])})),Qe=Le("Insane (Ability become Passive)",e,"X",P).map((function(e,n){return e.replace("X%",P[n])})),Ze=Le("Restrained (Ability become Passive)",e,"X",D).map((function(e,n){return e.replace("X%",D[n])})),qe=Le("Venomed (Ability become Passive)",e,"X",k).map((function(e,n){return e.replace("X%",k[n])})),Ye=Le("Venomed (Ability become Passive)",e,"X",R).map((function(e,n){return e.replace("X%",R[n])})),$e=Le("Venomed (Ability become Passive)",e,"X",H).map((function(e,n){return e.replace("X%",H[n])})),en=Le("Cursed (Ability become Passive)",e,"X",t).map((function(e,n){return e.replace("X%",t[n]+" "+q[n])}));ze.push(we,Ee,We,Me,Oe,Ne,_e,en,Ue,Ke,Qe,Ze,qe,Ye,$e,He,Ie,Be,Ce);break;case"DiscardAbilityXAttackDescr":var nn=Le("Discard HP Attack",e,J,"X"),rn=Le("Discard Str Attack",e,W,"X"),tn=Le("Discard Agi Attack",e,F,"X"),an=Le("Discard Int Attack",e,G,"X");ze.push(nn,rn,tn,an);break;case"RemoveXDebuffsJoin":var un=Le("Burn Remove",e,m,O),cn=Le("Chill Remove",e,h,O),ln=Le("Seed Remove",e,b,O),pn=Le("Dizzy Remove",e,d,O),on=Le("Paralysis Remove",e,v,O),fn=Le("Depress Remove",e,A,O),sn=Le("Blind Remove",e,g,O),Xn=Le("Bleed Remove",e,y,O),mn=Le("Injury Remove",e,S,O),hn=Le("Insane Remove",e,P,O),bn=Le("Restrain Remove",e,D,O),dn=Le("Venom Remove",e,k,O),vn=Le("All Elemental Status Effect Remove",e,X,O),An=Le("Debuff Remove",e,"X",O).map((function(e,n){return e.replace("X",a[n]+" "+z[n]+", "+ne[n])}));ze.push(un,cn,ln,pn,on,fn,sn,Xn,mn,hn,bn,dn,vn,An);break;case"ApplyXSelfJoin":var gn=Le("Charge",e,I,O),kn=Le("Guard",e,B,O),Dn=Le("Stack Charge",e,C,O),Pn=Le("Stack Guard",e,w,O),Sn=Le("Apply Certain",e,"X",O).map((function(e,n){return e.replace("X","X "+E[n])})),yn=Le("Pure Element",e,X,O),Rn=Le("Protect Enhance",e,M,re);ze.push(gn,kn,Dn,Pn,Sn,yn,Rn),Ge.map((function(n,r){var t=Ve.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" Element",u=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+X[n])}));u.splice(0,1,a),ze.push(u)}));var Hn=Le("Paralyed On Self",e,"X",re).map((function(e,n){return e.replace("X","X "+v[n])})),In=Le("Burned On Self",e,"X",re).map((function(e,n){return e.replace("X","X "+m[n])})),Bn=Le("Seeded On Self",e,"X",re).map((function(e,n){return e.replace("X","X "+b[n])})),Cn=Le("Bleeding On Self",e,"X",re).map((function(e,n){return e.replace("X","X "+y[n])})),wn=Le("Blinded On Self",e,"X",re).map((function(e,n){return e.replace("X","X "+g[n])})),En=Le("Injured On Self",e,"X",re).map((function(e,n){return e.replace("X","X "+S[n])}));ze.push(Hn,In,Bn,Cn,wn,En),Te.map((function(n,r){var t=Te.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" On Self",u=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+X[n])}));u.splice(0,1,a),ze.push(u)})),xe.map((function(n,r){var t=xe.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" On Self",u=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+X[n])}));u.splice(0,1,a),ze.push(u)})),Fe.map((function(n,r){if(r>0){var t=Je.filter((function(e){return e.includes(n)||e==n}))[0],a="Debuff "+t[1]+" On Self",u=e.map((function(e,n){return e.replace(/\{0\}/g,"X "+t[n]+" "+z[n])}));u.splice(0,1,a),ze.push(u)}}));var Vn=Le("Cursed On Self",e,"X",re).map((function(e,n){return e.replace("X","X "+t[n]+" "+q[n])}));ze.push(Vn);break;case"ApplyXOpponentJoin":var Tn=je("HP Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+J[n]+" Vulnerable")})),xn=je("Strength Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+W[n]+" "+ne[n])})),Jn=je("Agility Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+F[n]+" "+ne[n])})),Wn=je("Intelligence Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+G[n]+" "+ne[n])})),Fn=je("Protect Pierce",e,"{0}","X").map((function(e,n){return e.replace("X","X "+M[n]+" "+ne[n])})),Gn=je("Fire Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+c[n]+" "+ne[n])})),Mn=je("Water Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+i[n]+" "+ne[n])})),On=je("Earth Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+l[n]+" "+ne[n])})),Nn=je("Wind Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+p[n]+" "+ne[n])})),Ln=je("Thunder Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+o[n]+" "+ne[n])})),jn=je("Dark Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+f[n]+" "+ne[n])})),zn=je("Light Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+s[n]+" "+ne[n])})),_n=je("Injury Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+S[n]+" "+ne[n])})),Un=je("Bleed Vulnerable",e,"{0}","X").map((function(e,n){return e.replace("X","X "+y[n]+" "+ne[n])})),Kn=je("Inflict Random status effects",e,"{0}","X").map((function(e,n){return e.replace("X","X "+t[n]+" "+q[n])}));ze.push(Gn,Mn,On,Nn,Ln,jn,zn,_n,Un,Kn,Tn,xn,Jn,Wn,Fn),Fe.map((function(n,r){var t=Je.filter((function(e){return e.includes(n)||e==n}))[0],a=t[1]+" Debuff",u=e.map((function(e,n){return e.replace("{0}","X "+t[n]+" "+z[n])}));u.splice(0,1,a),ze.push(u)})),Te.map((function(n,r){var t=Te.filter((function(e){return e.includes(n)||e==n}))[0],a="Inflict "+t[1],u=e.map((function(e,n){return e.replace("{0}","X "+t[n])}));u.splice(0,1,a),ze.push(u)})),xe.map((function(n,r){var t=xe.filter((function(e){return e.includes(n)||e==n}))[0],a="Inflict "+t[1],u=e.map((function(e,n){return e.replace("{0}","X "+t[n]+" "+z[n])}));u.splice(0,1,a),ze.push(u)}));break;case"GainXProtectJoin":var Qn=Le("HP Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+J[n]+" "+M[n]).replace("{1}","")})),Zn=Le("Strength Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+W[n]+" "+M[n]).replace("{1}","")})),qn=Le("Agility Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+F[n]+" "+M[n]).replace("{1}","")})),Yn=Le("Intelligence Protect",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+G[n]+" "+M[n]).replace("{1}","")})),$n=Le("Raw Protect",e,!1,"X").map((function(e,n){return e.replace("X","X  "+M[n]).replace("{1}","")})),er=je("Second Chance",e,"{0}","X").map((function(e,n){return e.replace("{1}",ae[n])})),nr=je("Invulnerable",e,"{0}","X").map((function(e,n){return e.replace("{1}",ue[n])})),rr=je("Gain AP",e,"{0}","X").map((function(e,n){return e.replace("{1}",ce[n])})),tr=je("Gain AP Next",e,"{0}","X").map((function(e,n){return e.replace("{1}",ie[n])})),ar=je("Draw Ability Next",e,"{0}","X").map((function(e,n){return e.replace("{1}",le[n])}));ze.push(Qn,Zn,qn,Yn,rr,tr,ar,$n,er,nr),Fe.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Buff",a=e.map((function(e,n){return e.replace("{0}","X").replace("{1}",r[n]+" "+N[n])}));a.splice(0,1,t),ze.push(a)})),Fe.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Buff",a=e.map((function(e,n){return e.replace("{0}","X").replace("{1}",r[n]+" "+L[n])}));a.splice(0,1,t),ze.push(a)})),Fe.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Debuff",a=e.map((function(e,n){return e.replace("{0}","X").replace("{1}",r[n]+" "+_[n])}));a.splice(0,1,t),ze.push(a)})),Ge.map((function(n){var r=Ve.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Buff",a=e.map((function(e,n){return e.replace(/\{0\}/g,"X").replace("{1}",r[n]+" "+L[n])}));a.splice(0,1,t),ze.push(a)}));break;case"DealXDamageJoin":var ur=Le("Raw Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X")})),cr=Le("HP Attack",e,!1,"X% ").map((function(e,n){return e.replace("X%","X% "+J[n])})),ir=Le("Strength Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+W[n])})),lr=Le("Agility Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+F[n])})),pr=Le("Intelligence Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+G[n])})),or=Le("Protect Attack",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+M[n])}));ze.push(ur,cr,ir,lr,pr,or);break;case"HealXJoin":var fr=Le("Raw Heal",e,!1,"X"),sr=Le("HP Heal",e,!1,"X% ").map((function(e,n){return e.replace("X%","X% "+J[n])})),Xr=Le("Strength Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+W[n])})),mr=Le("Agility Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+F[n])})),hr=Le("Intelligence Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+G[n])})),br=Le("Protect Heal",e,!1,"X%").map((function(e,n){return e.replace("X%","X% "+M[n])}));ze.push(fr,sr,Xr,mr,hr,br,["Do nothing","Do nothing","Do nothing","Do nothing"])}})),document.getElementById("langSel").value){case"English":J=J[1],W=W[1],F=F[1],G=G[1],M=M[1],c=c[1],i=i[1],l=l[1],p=p[1],o=o[1],f=f[1],s=s[1],m=m[1],h=h[1],b=b[1],d=d[1],v=v[1],A=A[1],g=g[1],k=k[1],P=P[1],y=y[1],D=D[1],S=S[1];break;case"Chinese":J=J[2],W=W[2],F=F[2],G=G[2],M=M[2],c=c[2],i=i[2],l=l[2],p=p[2],o=o[2],f=f[2],s=s[2],m=m[2],h=h[2],b=b[2],d=d[2],v=v[2],A=A[2],g=g[2],k=k[2],P=P[2],y=y[2],D=D[2],S=S[2];break;case"Chinese(Trad)":J=J[3],W=W[3],F=F[3],G=G[3],M=M[3],c=c[3],i=i[3],l=l[3],p=p[3],o=o[3],f=f[3],s=s[3],m=m[3],h=h[3],b=b[3],d=d[3],v=v[3],A=A[3],g=g[3],k=k[3],P=P[3],y=y[3],D=D[3],S=S[3]}}))},passives:function(){return de.raw(ve,3).then((function(e){return e.data})).then((function(e){Ee.skills(),M=Oe(Ie,"Protect")[0],k=Oe(Ie,"Venom")[0],P=Oe(Ie,"Insane")[0],D=Oe(Ie,"Restrain")[0],Ce.map((function(e){switch(null==_e[0]||_e[0].jobon,e[0]){case"JobIsOn":_e.push({jobon:e});break;case"DamageMitigateXDescrP":var n=e.map((function(e){return e.replace("{0}","10X%")}));(n=n.map((function(e){return e.replace("{1}","")}))).splice(0,1,"Damage Mitigate"),_e.push(n);break;case"GainXPassiveJoin":Fe.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Boost",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+j[n])}));a.splice(0,1,t),_e.push(a);var u=r[1]+" Drain",c=e.map((function(e,n){return e.replace("{0}","X "+r[n]+K[n])}));c.splice(0,1,u),_e.push(c)})),Fe.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Nerf",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+U[n])}));a.splice(0,1,t),_e.push(a)})),xe.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Absorb",a=e.map((function(e,n){return e.replace("{0}",r[n]+Q[n])}));a.splice(0,1,t),_e.push(a)}));var r=["Protective Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+$[n])})),a=["Aggressive Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+ee[n])})),u=["Rage",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+V[n])})),c=["Instinct",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+T[n])}));_e.push(r,a,u,c);break;case"ApplyXReflectJoin":Te.map((function(n){var r=Te.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Reflect",a=e.map((function(e,n){return e.replace("{0}",r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)}));var i=["Protect Reflect",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+$[n])})),l=["Status Effects Reflect",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+q[n])}));_e.push(i,l);break;case"ApplyXCounterJoin":Fe.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Reflect",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)})),xe.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Reflect",a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)}));break;case"ImmuneToXJoin":Te.map((function(n){var r=Te.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Immune",a=e.map((function(e,n){return e.replace("{0}",r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)})),xe.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Immune",a=e.map((function(e,n){return e.replace("{0}",r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)}));var p=["Debuff Immnue",e[1],e[2],e[3]];p=(p=p.map((function(e,n){return e.replace("{0}",Y[n])}))).map((function(e,n){return e.replace("{1}","")}));var o=["Element Status Immnue",e[1],e[2],e[3]];o=(o=o.map((function(e,n){return e.replace("{0}",q[n])}))).map((function(e,n){return e.replace("{1}","")})),_e.push(p,o);break;case"StartCombatXJoin":var f=["Second Chance",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+ae[n])})),s=["Start Charge",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}",I[n]+", "+C[n])})),m=["Start Guard",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}",B[n]+", "+w[n])})),h=["Rage",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+V[n])})),b=["Instinct",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+T[n])}));_e.push(f,s,m,h,b),Fe.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Start Buff",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+" "+N[n])}));a.splice(0,1,t),_e.push(a)})),Ge.map((function(n){var r=Ve.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Element",a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+" "+X[n])}));a.splice(0,1,t),_e.push(a)})),Fe.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Protect",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n]+" "+M[n])}));a.splice(0,1,t),_e.push(a)})),Fe.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t="Weak "+r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n]+" "+z[n])}));a.splice(0,1,t),_e.push(a)})),Te.map((function(n){var r=Te.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));a.splice(0,1,t),_e.push(a)})),xe.map((function(n){var r=xe.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));a.splice(0,1,t),_e.push(a)}));var d=Le("Cursed",e,"X",re).map((function(e,n){return e.replace("X","X "+t[n]+" "+q[n])}));_e.push(d);break;case"TurnDamageXJoin":Fe.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Turn Attack",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)}));var v=["Protect Turn Attack",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+M[n])}));v=v.map((function(e){return e.replace("{1}","")})),_e.push(v);break;case"TurnHealXJoin":Fe.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Turn Heal",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)}));var A=["Protect Turn Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+M[n])}));A=A.map((function(e){return e.replace("{1}","")})),_e.push(A);break;case"ActionDamageXJoin":Fe.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Attack",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)}));var g=["Protect Action Attack",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+M[n])}));g=g.map((function(e){return e.replace("{1}","")})),_e.push(g);break;case"ActionHealXJoin":Fe.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t=r[1]+" Action Heal",a=e.map((function(e,n){return e.replace("{0}","X% "+r[n])}));(a=a.map((function(e,n){return e.replace("{1}","")}))).splice(0,1,t),_e.push(a)}));var S=["Protect Action Heal",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X% "+M[n])}));S=S.map((function(e){return e.replace("{1}","")})),_e.push(S);break;case"ActionBuffXJoin":Fe.map((function(n){var r=Je.filter((function(e){return e.includes(n)||e==n}))[0],t="Stack "+r[1],a=e.map((function(e,n){return e.replace("{0}","X "+r[n])}));a.splice(0,1,t),_e.push(a)}));break;case"ActionDebuffXJoin":var y=["After Action Venom",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+k[n])})),R=["After Action Insane",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+P[n])})),H=["After Action Restrain",e[1],e[2],e[3]].map((function(e,n){return e.replace("{0}","X "+D[n])}));_e.push(y,R,H)}}));var n=Oe(Ie,"XDigger")[0].map((function(e){return e.replace("{0}","")})),r=Oe(Ie,"Crystal")[0],a=Oe(Ie,"Gold")[0],c=we.filter((function(e){return"AutoProtectDescr"==e[0]}))[0].map((function(e,n){return e.replace("{0}",M[n])}));(c=c.map((function(e,n){return e.replace("{1}","10X%")}))).splice(0,1,"Auto Protect");var i=we.filter((function(e){return"InvulnXFullStartDescr"==e[0]}))[0].map((function(e,n){return e.replace("{0}",ue[n])}));i.splice(0,1,"Invulnerable");var l=["Add Draw","X","X","X"].map((function(e,n){return e.replace("X",u[n]+" +X")})),p=["Reduce Draw","X","X","-X"].map((function(e,n){return e.replace("X",u[n]+" -X")})),o=["Gold Digger","X","X","X"].map((function(e,r){return e.replace("X",a[r]+n[r])})),f=["Crystal Digger","X","X","X"].map((function(e,t){return e.replace("X",r[t]+n[t])}));_e.push(["Add Action","AP +X","AP +X","AP +X"],["Reduce Action","AP -X","AP -X","AP -X"],l,p,o,f,c,i),We.map((function(e){var n=We.filter((function(n){return n.includes(e)||n==e}))[0],r=n.map((function(e,n){return e+fe[n]}));"Humanoid"==n[0]||"Creature"==n[0]||"Spirit"==n[0]||"Matter"==n[0]?r.splice(0,1,n[0]+" Expert"):"Reflect"==n[0]?r.splice(0,1,n[0]+fe[1]):r.splice(0,1,n[1]+fe[1]),_e.push(r)})),pe.splice(0,1,"Skill Stack Master"),oe.splice(0,1,"Jack-of-all-Trades"),_e.push(oe,pe),console.log(_e)}))}}},26535:(e,n,r)=>{"use strict";e.exports=r.p+"ab25a53533fa074274e1.png"},75657:(e,n,r)=>{"use strict";e.exports=r.p+"bf99e92bf3dcd527df8f.png"},74069:(e,n,r)=>{"use strict";e.exports=r.p+"c4517d24cb0e60530c58.png"},52798:(e,n,r)=>{"use strict";e.exports=r.p+"b2e23163716139708c80.png"},37947:(e,n,r)=>{"use strict";e.exports=r.p+"b2145416ec62da90cdab.png"}}]);