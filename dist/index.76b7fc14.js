class e{constructor(e,a){this.name=e,this.image=a,this.players=[]}addPlayer(e){this.players.push(e)}renderTeamPlayers(){let e=document.querySelector("#list-players");gsap.fromTo("#list-players",{y:40,opacity:0},{delay:.6,duration:1,y:0,opacity:1,ease:"power2.easeOut",stagger:{from:"start",amount:.6}}),e.innerHTML="";let a=document.createElement("div"),n=document.createElement("h2"),r=document.createElement("img"),i=document.createElement("ul");n.textContent=this.name,a.classList.add("team"),i.classList.add("players"),r.src=this.image,r.classList.add("image-team"),this.players.forEach(e=>{let a=e.infoPlayers();i.appendChild(a)}),a.appendChild(r),a.appendChild(i),e.appendChild(a)}addToDropdown(e){let a=document.createElement("option");a.text=this.name,a.value=this.name,e.add(a)}}class a{constructor(e,a,n,r){this.name=e,this.position=a,this.image=n,this.appearances=r}infoPlayers(){let e=document.createElement("li"),a=document.createElement("div");e.appendChild(a),e.classList.add("player-box"),a.classList.add("image_box");let n=document.createElement("div"),r=document.createElement("h3");r.textContent=this.name,e.appendChild(n),n.classList.add("box-name");let i=document.createElement("div"),d=document.createElement("span");i.classList.add("stats-list"),d.textContent=`${this.position}`;let s=document.createElement("span");s.textContent=`Appearances: ${this.appearances}`;let l=document.createElement("img");return l.classList.add("image-player"),l.src=this.image,e.appendChild(i),a.appendChild(l),n.appendChild(r),i.appendChild(d),i.appendChild(s),e}}class n extends a{constructor(e,a,n,r,i,d){super(e,a,n,r),this.cleansheet=i,this.saves=d}infoPlayers(){let e=super.infoPlayers(),a=e.querySelector(".stats-list"),n=document.createElement("span");n.textContent=`Clean Sheet: ${this.cleansheet}`;let r=document.createElement("span");return r.textContent=`Saves Made: ${this.saves}`,a.appendChild(n),a.appendChild(r),e}}class r extends a{constructor(e,a,n,r,i,d){super(e,a,n,r),this.tackles=i,this.duels=d}infoPlayers(){let e=super.infoPlayers(),a=e.querySelector(".stats-list"),n=document.createElement("span");n.textContent=`Total Tackles: ${this.tackles}`;let r=document.createElement("span");return r.textContent=`Aerial Duels: ${this.duels}`,a.appendChild(n),a.appendChild(r),e}}class i extends a{constructor(e,a,n,r,i,d){super(e,a,n,r),this.passes=i,this.goals=d}infoPlayers(){let e=super.infoPlayers(),a=e.querySelector(".stats-list"),n=document.createElement("span");n.textContent=`Total Passes: ${this.passes}`;let r=document.createElement("span");return r.textContent=`Total Goals: ${this.goals}`,a.appendChild(n),a.appendChild(r),e}}class d extends a{constructor(e,a,n,r,i,d){super(e,a,n,r),this.goals=i,this.assists=d}infoPlayers(){let e=super.infoPlayers(),a=e.querySelector(".stats-list"),n=document.createElement("span");n.textContent=`Total Goals: ${this.goals}`;let r=document.createElement("span");return r.textContent=`Total Assits: ${this.assists}`,a.appendChild(n),a.appendChild(r),e}}function s(){document.querySelectorAll(".player-box").forEach(e=>{let a=gsap.to(e,{scale:1.1,duration:.3,paused:!0});e.addEventListener("mouseenter",function(){a.play()}),e.addEventListener("mouseleave",function(){a.reverse()})})}const l=new n("Ramsdale","Goalkeeper","images/ramsdale.png",9,30,2),t=new r("Saliba","Centre Back","images/saliba.png",28,26,50),g=new r("Gabriel","Centre Back","images/gabriel.png",26,31,57),o=new i("Odegaard","Attacking Midfielder","images/odegaard.png",25,1364,6),m=new i("Rice","Defensive Midfielder","images/rice.png",28,1763,6),p=new d("Saka","Right Winger","images/saka.png",27,13,7),c=new d("Martinelli","Left Winger","images/martinelli.png",25,6,4),w=new d("Gabriel Jesus","Forward","images/jesus.png",19,4,3),y=new n("Martinez","Goalkeeper","images/dibu.png",27,6,74),P=new r("Cash","Full Back","images/cash.png",25,41,14),u=new r("Digne","Full Back","images/digne.png",28,1240,3),h=new i("Douglas","Central Midfielder","images/douglas.png",17,846,1),k=new i("McGinn","Central Midfielder","images/mcginn.png",21,920,4),f=new i("Tielemans","Central Midfielder","images/tielemans.png",23,113,2),C=new d("Duran","Striker","images/duran.png",20,5,7),M=new d("Watkins","Striker","images/watkins.png",22,7,9),B=new n("Ederson","Goalkeeper","images/ederson.png",24,10,120),v=new r("Dias","Centre Back","images/dias.png",20,60,40),b=new r("Ake","Centre Back","images/ake.png",23,33,80),L=new i("Foden","Right Winger","images/foden.png",22,1143,6),S=new i("De Bruyne","Attacking Midfielder","images/debruyne.png",22,1540,8),E=new i("Silva","Attacking Midfielder","images/silva.png",21,1142,4),W=new d("Haaland","Striker","images/haaland.png",22,18,5),A=new d("Alvarez","Striker","images/alvarez.png",28,8,9),D=new n("Alisson","Goalkeeper","images/alisson.png",24,9,68),G=new r("Gomez","Centre Back","images/joe.png",39,66,62),T=new r("Van Dijk","Centre Back","images/vandijk.png",34,39,168),F=new r("Trent","Right Back","images/trent.png",29,37,17),R=new i("szoboszlai","Central Midfielder","images/szoboszlai.png",31,1361,6),x=new i("Mac Allister","Central Midfielder","images/alexis.png",33,1716,4),z=new d("Luis Diaz","Left Winger","images/luisdiaz.png",38,11,3),j=new d("Mohamed Salah","Right Winger","images/salah.png",30,19,9),q=new n("Onana","Goalkeeper","images/onana.png",38,12,135),O=new r("Victor Lindelöf","Centre Back","images/lindelof.png",25,10,27),$=new r("Maguire","Centre Back","images/maguire.png",23,15,72),H=new i("Casemiro","Defensive Midfielder","images/casemiro.png",21,431,5),N=new i("Mason Mount"," Attacking Midfielder","images/mount.png",12,158,2),J=new i("Bruno Fernandes"," Attacking Midfielder","images/bruno.png",37,1058,8),V=new d("Garnacho","Left Winger","images/garnacho.png",37,7,5),U=new d("Rashford","Forward","images/rashford.png",34,7,10),K=new n("Vicario","Goalkeeper","images/vicario.png",27,6,78),I=new r("Cuti Romero","Centre Back","images/romero.png",22,42,47),Y=new r("Porro"," Right Back","images/porro.png",24,69,13),Z=new i("Bissouma"," Defensive Midfielder","images/bissouma.png",19,1217,0),_=new i("James Maddison"," Attacking Midfielder","images/maddison.png",17,772,4),Q=new i("Kulusevski"," Right Winger","images/kulusevski.png",25,827,6),X=new d("Son"," Forward","images/son.png",24,14,8),ee=new d("Richarlison","Striker","images/richarlison.png",22,10,3),ea=new n("Fabianski","Goalkeeper","images/fabianski.png",23,6,41),en=new r("Zouma","Centre Back","images/zouma.png",25,30,38),er=new r("Cresswell","Left Back","images/cresswell.png",23,50,44),ei=new i("Ward-Prowse"," Central Midfielder","images/wardprowse.png",22,760,7),ed=new i("Paqueta"," Attacking Midfielder","images/paqueta.png",19,562,2),es=new i("Soucek"," Defensive Midfielder","images/soucek.png",21,451,3),el=new d("Bowen","Right Winger","images/bowen.png",23,5,7),et=new d("Antonio","Forward","images/antonio.png",26,8,4),eg=new n("Jose Sa","Goalkeeper","images/sa.png",28,6,77),eo=new r("Dawson","Centre Back","images/dawson.png",15,26,43),em=new r("Doherty","Full Back","images/doherty.png",12,23,25),ep=new i("Lemina","Defensive Midfielder","images/lemina.png",24,881,5),ec=new i("Traore","Defensive Midfielder","images/traore.png",21,1291,5),ew=new d("Neto","Right Winger","images/neto.png",21,4,10),ey=new d("Cunha","Forward","images/cunha.png",17,6,4),eP=new d("Hee Chan","Forward","images/hwang.png",25,9,5),eu=new n("Dubravka","Goalkeeper","images/dubravka.png",27,7,34),eh=new r("Botman","Centre Back","images/botman.png",21,45,23),ek=new r("Trippier","Right Back","images/trippier.png",24,35,45),ef=new i("Joelinton","Central Midfielder","images/joelinton.png",21,1342,6),eC=new i("Guimaraes","Central Midfielder","images/guimaraes.png",19,698,5),eM=new i("Almiron","Attacking Midfielder","images/almiron.png",15,439,2),eB=new d("Barnes","Left Winger","images/barnes.png",21,4,14),ev=new d("Isak","Forward","images/isak.png",23,11,3),eb=new n("Steele","Goalkeeper","images/steele.png",22,4,120),eL=new r("Dunk","Centre Back","images/dunk.png",24,34,56),eS=new r("Estupiñan","Left Back","images/estupinan.png",22,30,66),eE=new i("Milner","Central Midfielder","images/milner.png",19,490,1),eW=new i("Groß","Defensive Midfielder","images/gross.png",25,672,4),eA=new d("Mitoma","Left Winger","images/mitoma.png",18,5,2),eD=new d("March","Right Winger","images/march.png",21,3,4),eG=new d("Welbeck","Forward","images/welbeck.png",23,6,9),eT=new n("Sanchez","Goalkeeper","images/sanchez.png",28,8,94),eF=new r("Reece","Centre Back","images/reece.png",21,34,56),eR=new r("Chilwell","Right Back","images/chilwell.png",18,23,47),ex=new i("Enzo","Central Midfielder","images/enzo.png",20,7,4),ez=new i("Gallagher","Central Midfielder","images/gallagher.png",20,7,4),ej=new i("Caicedo","Defensive Midfielder","images/caicedo.png",20,7,4),eq=new d("Sterling","Left Winger","images/sterling.png",26,12,4),eO=new d("Jackson","Striker","images/jackson.png",20,6,9),e$=new n("Leno","Goalkeeper","images/leno.png",22,7,80),eH=new r("Adarabioyo","Centre Back","images/adarabioyo.png",19,27,43),eN=new r("Castagne","Full Back","images/castagne.png",24,35,47),eJ=new i("Lukic","Defensive Midfielder","images/lukic.png",21,732,2),eV=new i("Pereira","Attacking Midfielder","images/pereira.png",25,750,1),eU=new i("Iwobi","Attacking Midfielder","images/iwobi.png",19,689,2),eK=new d("Wilson","Right Winger","images/wilson.png",17,7,4),eI=new d("Muniz","Forward","images/muniz.png",15,3,5),eY=new n("Neto","Goalkeeper","images/netob.png",26,8,75),eZ=new r("Mepham","Centre Back","images/mepham.png",14,21,27),e_=new r("Zabarnyi","Centre Back","images/zabarnyi.png",26,35,49),eQ=new r("Smith","Full Back","images/smith.png",22,71,45),eX=new i("Christie","Attacking Midfielder","images/christie.png",25,689,8),e2=new i("Traore","Attacking Midfielder","images/hamed.png",21,876,6),e1=new d("Kluivert","Right Winger","images/kluivert.png",23,5,9),e4=new d("Solanke","Striker","images/solanke.png",27,14,3),e3=new n("Johnstone","Goalkeeper","images/johnstone.png",25,6,64),e7=new r("Ward","Full Back","images/ward.png",24,65,20),e5=new r("Left Back","Left Back","images/mitchell.png",13,19,22),e6=new i("Doucoure","Defensive Midfielder","images/doucoure.png",21,792,2),e0=new i("Lerma","Central Midfielder","images/lerma.png",25,925,5),e8=new i("Olise","Attacking Midfielder","images/olise.png",18,602,2),e9=new d("Ayew","Forward","images/ayew.png",24,7,9),ae=new d("Edouard","Striker","images/edouard.png",23,11,4),aa=new n("Flekken","Goalkeeper","images/flekken.png",21,7,40),an=new r("Ajer","Centre Back","images/ajer.png",18,42,50),ar=new r("Pinnock","Centre Back","images/pinnock.png",16,33,41),ai=new i("Norgaard","Defensive Midfielder","images/norgaard.png",25,878,2),ad=new i("Janelt","Defensive Midfielder","images/janelt.png",27,1202,0),as=new i("Lewis-Potter","Defensive Midfielder","images/lewispotter.png",23,679,2),al=new d("Wissa","Left Winger","images/wissa.png",18,3,6),at=new d("Toney","Forward","images/toney.png",14,4,5),ag=new n("Pickford","Goalkeeper","images/pickford.png",28,3,90),ao=new r("Tarkowski","Centre Back","images/tarkowski.png",27,73,35),am=new r("Young","Full Back","images/young.png",17,40,44),ap=new i("Onana","Defensive Midfielder","images/onanae.png",23,790,1),ac=new i("Garner","Central Midfielder","images/garner.png",18,490,3),aw=new i("Doucoure","Central Midfielder","images/doucouree.png",25,768,4),ay=new d("McNeil","Left Winger","images/mcneil.png",23,10,5),aP=new d("Harrison","Right Winger","images/harrison.png",26,7,8),au=new n("Sels","Goalkeeper","images/sels.png",24,4,65),ah=new r("Murillo","Centre Back","images/murillo.png",23,71,30),ak=new r("Toffolo","Left Back","images/toffolo.png",18,32,45),af=new i("Yates","Defensive Midfielder","images/yates.png",22,632,4),aC=new i("Dominguez","Central Midfielder","images/dominguez.png",17,450,2),aM=new i("Gibbs-White","Attacking Midfielder","images/gibbswhite.png",26,689,9),aB=new d("Hudson-Odoi","Left Winger","images/hudsonodoi.png",25,12,3),av=new d("Elanga","Left Winger","images/elanga.png",20,5,10),ab=new n("Kaminski","Goalkeeper","images/kaminski.png",28,3,78),aL=new r("Mengi","Centre Back","images/mengi.png",21,34,47),aS=new r("Burke","Centre Back","images/burke.png",24,39,32),aE=new i("Clark","Central Midfielder","images/clark.png",26,783,6),aW=new i("Barkley","Central Midfielder","images/barkley.png",17,693,3),aA=new d("Ogbene","Right Winger","images/ogbene.png",19,4,2),aD=new d("Chong","Right Winger","images/chong.png",25,14,2),aG=new d("Morris","Striker","images/morris.png",21,3,7),aT=new n("Adam","Goalkeeper","images/adam.png",20,6,42),aF=new r("Trusty","Centre Back","images/trusty.png",20,76,45),aR=new r("Robinson","Centre Back","images/robinson.png",23,32,46),ax=new i("Osborn","Central Midfielder","images/osborn.png",20,7,4),az=new i("Hammer","Attacking Midfielder","images/hammer.png",20,7,4),aj=new i("Bogle","Right Midfielder","images/bogle.png",14,2,6),aq=new d("Brereton","Left Winger","images/brereton.png",12,4,1),aO=new d("McBurnie","Striker","images/mcburnie.png",25,11,3),a$=new n("Trafford","Goalkeeper","images/trafford.png",25,3,56),aH=new r("O'Shea","Centre Back","images/oshea.png",28,85,41),aN=new r("Esteve","Centre Back","images/esteve.png",12,29,22),aJ=new i("Berge","Defensive Midfielder","images/berge.png",25,892,1),aV=new i("Cullen","Defensive Midfielder","images/cullen.png",17,623,0),aU=new i("Odobert","Attacking Midfielder","images/odobert.png",19,535,3),aK=new d("Larsen","Left Winger","images/larsen.png",22,4,8),aI=new d("Rodriguez","Striker","images/rodriguez.png",24,7,3),aY=new e("Burnley","images/burnley.png");aY.addPlayer(a$),aY.addPlayer(aH),aY.addPlayer(aN),aY.addPlayer(aJ),aY.addPlayer(aV),aY.addPlayer(aU),aY.addPlayer(aK),aY.addPlayer(aI);const aZ=new e("Sheffield United","images/sheffield.png");aZ.addPlayer(aT),aZ.addPlayer(aF),aZ.addPlayer(aR),aZ.addPlayer(ax),aZ.addPlayer(az),aZ.addPlayer(aj),aZ.addPlayer(aq),aZ.addPlayer(aO);const a_=new e("Luton Town","images/luton.png");a_.addPlayer(ab),a_.addPlayer(aL),a_.addPlayer(aS),a_.addPlayer(aE),a_.addPlayer(aW),a_.addPlayer(aA),a_.addPlayer(aD),a_.addPlayer(aG);const aQ=new e("Nottingham Forest","images/forest.png");aQ.addPlayer(au),aQ.addPlayer(ah),aQ.addPlayer(ak),aQ.addPlayer(af),aQ.addPlayer(aC),aQ.addPlayer(aM),aQ.addPlayer(aB),aQ.addPlayer(av);const aX=new e("Everton","images/everton.png");aX.addPlayer(ag),aX.addPlayer(ao),aX.addPlayer(am),aX.addPlayer(ap),aX.addPlayer(ac),aX.addPlayer(aw),aX.addPlayer(ay),aX.addPlayer(aP);const a2=new e("Brentford","images/brentford.png");a2.addPlayer(aa),a2.addPlayer(an),a2.addPlayer(ar),a2.addPlayer(ai),a2.addPlayer(ad),a2.addPlayer(as),a2.addPlayer(al),a2.addPlayer(at);const a1=new e("Crystal Palace","images/palace.png");a1.addPlayer(e3),a1.addPlayer(e7),a1.addPlayer(e5),a1.addPlayer(e6),a1.addPlayer(e0),a1.addPlayer(e8),a1.addPlayer(e9),a1.addPlayer(ae);const a4=new e("Bournemouth","images/bournemouth.png");a4.addPlayer(eY),a4.addPlayer(eZ),a4.addPlayer(e_),a4.addPlayer(eQ),a4.addPlayer(eX),a4.addPlayer(e2),a4.addPlayer(e1),a4.addPlayer(e4);const a3=new e("Fulham","images/fulham.png");a3.addPlayer(e$),a3.addPlayer(eH),a3.addPlayer(eN),a3.addPlayer(eJ),a3.addPlayer(eV),a3.addPlayer(eU),a3.addPlayer(eK),a3.addPlayer(eI);const a7=new e("Chelsea","images/chelsea.png");a7.addPlayer(eT),a7.addPlayer(eF),a7.addPlayer(eR),a7.addPlayer(ex),a7.addPlayer(ez),a7.addPlayer(ej),a7.addPlayer(eq),a7.addPlayer(eO);const a5=new e("Brighton","images/brighton.png");a5.addPlayer(eb),a5.addPlayer(eL),a5.addPlayer(eS),a5.addPlayer(eE),a5.addPlayer(eW),a5.addPlayer(eA),a5.addPlayer(eD),a5.addPlayer(eG);const a6=new e("Newcastle","images/newcastle.png");a6.addPlayer(eu),a6.addPlayer(eh),a6.addPlayer(ek),a6.addPlayer(ef),a6.addPlayer(eC),a6.addPlayer(eM),a6.addPlayer(eB),a6.addPlayer(ev);const a0=new e("Wolverhampton","images/wolves.png");a0.addPlayer(eg),a0.addPlayer(eo),a0.addPlayer(em),a0.addPlayer(ep),a0.addPlayer(ec),a0.addPlayer(ew),a0.addPlayer(ey),a0.addPlayer(eP);const a8=new e("West Ham","images/westham.png");a8.addPlayer(ea),a8.addPlayer(en),a8.addPlayer(er),a8.addPlayer(ei),a8.addPlayer(ed),a8.addPlayer(es),a8.addPlayer(el),a8.addPlayer(et);const a9=new e("Arsenal","images/arsenal.png");a9.addPlayer(l),a9.addPlayer(t),a9.addPlayer(g),a9.addPlayer(o),a9.addPlayer(m),a9.addPlayer(p),a9.addPlayer(c),a9.addPlayer(w);const ne=new e("Aston Villa","images/villa.png");ne.addPlayer(y),ne.addPlayer(P),ne.addPlayer(u),ne.addPlayer(h),ne.addPlayer(k),ne.addPlayer(f),ne.addPlayer(C),ne.addPlayer(M);const na=new e("Liverpool","images/liverpool.png");na.addPlayer(D),na.addPlayer(G),na.addPlayer(T),na.addPlayer(F),na.addPlayer(R),na.addPlayer(x),na.addPlayer(z),na.addPlayer(j);const nn=new e("Manchester United","images/manchester.png");nn.addPlayer(q),nn.addPlayer(O),nn.addPlayer($),nn.addPlayer(H),nn.addPlayer(N),nn.addPlayer(J),nn.addPlayer(V),nn.addPlayer(U);const nr=new e("Manchester City","images/city.png");nr.addPlayer(B),nr.addPlayer(v),nr.addPlayer(b),nr.addPlayer(L),nr.addPlayer(S),nr.addPlayer(E),nr.addPlayer(W),nr.addPlayer(A);const ni=new e("Tottenham","images/tottenham.png");ni.addPlayer(K),ni.addPlayer(I),ni.addPlayer(Y),ni.addPlayer(Z),ni.addPlayer(_),ni.addPlayer(Q),ni.addPlayer(X),ni.addPlayer(ee);const nd=document.querySelector("#team-select");[na,nn,ni,a9,ne,nr,a8,a0,a6,a5,a7,a3,a4,a1,a2,aX,aQ,a_,aZ,aY].forEach(e=>{e.addToDropdown(nd)});const ns=document.querySelector("#list-players");na.renderTeamPlayers(ns),nd.addEventListener("change",function(){let e;let a=nd.value;"Liverpool"===a?e=na:"Manchester United"===a?e=nn:"Tottenham"===a?e=ni:"Arsenal"===a?e=a9:"Aston Villa"===a?e=ne:"Manchester City"===a?e=nr:"West Ham"===a?e=a8:"Wolverhampton"===a?e=a0:"Newcastle"===a?e=a6:"Brighton"===a?e=a5:"Chelsea"===a?e=a7:"Fulham"===a?e=a3:"Bournemouth"===a?e=a4:"Crystal Palace"===a?e=a1:"Brentford"===a?e=a2:"Everton"===a?e=aX:"Nottingham Forest"===a?e=aQ:"Luton Town"===a?e=a_:"Sheffield United"===a?e=aZ:"Burnley"===a&&(e=aY),e&&(e.renderTeamPlayers(ns),s())}),s();
//# sourceMappingURL=index.76b7fc14.js.map