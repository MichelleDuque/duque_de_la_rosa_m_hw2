import {Football_Team} from './Football_Team.js';
import {Football_Player, Goalkeeper, Defender, Midfielder, Forward} from './Football_Player.js';
import { gsapanimation } from './modules/gsapanimation.js';


// Create players for Arsenal
const ramsdale = new Goalkeeper("Ramsdale", "Goalkeeper", "images/ramsdale.png", 9, 30, 2);
const saliba = new Defender("Saliba", "Centre Back", "images/saliba.png", 28, 26, 50)
const gabriel = new Defender("Gabriel", "Centre Back", "images/gabriel.png", 26, 31, 57)
const odegaard = new Midfielder("Odegaard", "Attacking Midfielder", "images/odegaard.png", 25, 1364, 6)
const rice = new Midfielder("Rice", "Defensive Midfielder", "images/rice.png", 28, 1763, 6)
const saka = new Forward("Saka", "Right Winger", "images/saka.png", 27, 13, 7)
const martinelli = new Forward("Martinelli", "Left Winger", "images/martinelli.png", 25, 6, 4)
const jesus = new Forward("Gabriel Jesus", "Forward", "images/jesus.png", 19, 4, 3)

// Create players for Aston Villa
const dibu = new Goalkeeper("Martinez", "Goalkeeper", "images/dibu.png", 27, 6, 74);
const cash = new Defender("Cash", "Full Back", "images/cash.png", 25, 41, 14)
const digne = new Defender("Digne", "Full Back", "images/digne.png", 28, 1240, 3)
const douglas = new Midfielder("Douglas", "Central Midfielder", "images/douglas.png", 17, 846, 1)
const mcginn = new Midfielder("McGinn", "Central Midfielder", "images/mcginn.png", 21, 920, 4)
const tielemans = new Midfielder("Tielemans", "Central Midfielder", "images/tielemans.png", 23, 113, 2)
const duran = new Forward("Duran", "Striker", "images/duran.png", 20, 5, 7)
const watkins = new Forward("Watkins", "Striker", "images/watkins.png", 22, 7, 9)

// Create players for Manchester City
const ederson = new Goalkeeper("Ederson", "Goalkeeper", "images/ederson.png", 24, 10, 120);
const dias = new Defender("Dias", "Centre Back", "images/dias.png", 20, 60, 40)
const ake = new Defender("Ake", "Centre Back", "images/ake.png", 23, 33, 80)
const foden = new Midfielder("Foden", "Right Winger", "images/foden.png", 22, 1143, 6)
const deBruyne = new Midfielder("De Bruyne", "Attacking Midfielder", "images/debruyne.png", 22, 1540, 8)
const silva = new Midfielder("Silva", "Attacking Midfielder", "images/silva.png", 21, 1142, 4)
const haaland = new Forward("Haaland", "Striker", "images/haaland.png", 22, 18, 5)
const alvarez = new Forward("Alvarez", "Striker", "images/alvarez.png", 28, 8, 9)



// Create players for Liverpool
const alisson = new Goalkeeper("Alisson", "Goalkeeper", "images/alisson.png", 24, 9, 68);
const joeGomez = new Defender("Gomez", "Centre Back", "images/joe.png", 39, 66, 62)
const vanDijk = new Defender("Van Dijk", "Centre Back", "images/vandijk.png", 34, 39, 168) 
const trent = new Defender("Trent", "Right Back", "images/trent.png", 29, 37, 17)  
const szoboszlai = new Midfielder("szoboszlai", "Central Midfielder", "images/szoboszlai.png", 31, 1361, 6)
const macallister = new Midfielder("Mac Allister", "Central Midfielder", "images/alexis.png", 33, 1716, 4)
const diaz = new Forward("Luis Diaz", "Left Winger", "images/luisdiaz.png", 38, 11, 3)
const salah = new Forward("Mohamed Salah", "Right Winger", "images/salah.png", 30, 19, 9)

// Create players for Manchester United
const onana = new Goalkeeper("Onana", "Goalkeeper", "images/onana.png", 38, 12, 135);
const victor = new Defender("Victor Lindelöf", "Centre Back", "images/lindelof.png", 25, 10, 27);
const maguire = new Defender("Maguire", "Centre Back", "images/maguire.png", 23, 15, 72);
const casemiro = new Midfielder("Casemiro", "Defensive Midfielder", "images/casemiro.png", 21, 431, 5);
const mount = new Midfielder("Mason Mount", " Attacking Midfielder", "images/mount.png", 12, 158, 2);
const bruno = new Midfielder("Bruno Fernandes", " Attacking Midfielder", "images/bruno.png", 37, 1058, 8);
const garnacho = new Forward("Garnacho", "Left Winger","images/garnacho.png", 37, 7, 5)
const rashford = new Forward("Rashford", "Forward","images/rashford.png", 34, 7, 10)


// Create players for Tottenham
const vicario = new Goalkeeper("Vicario", "Goalkeeper", "images/vicario.png", 27, 6, 78);
const romero = new Defender("Cuti Romero", "Centre Back", "images/romero.png", 22, 42, 47);
const porro = new Defender("Porro", " Right Back", "images/porro.png", 24, 69, 13);
const bissouma = new Midfielder("Bissouma", " Defensive Midfielder", "images/bissouma.png", 19, 1217, 0);
const maddison = new Midfielder("James Maddison", " Attacking Midfielder", "images/maddison.png", 17, 772, 4);
const kulusevski = new Midfielder("Kulusevski", " Right Winger", "images/kulusevski.png", 25, 827, 6);
const son = new Forward("Son", " Forward", "images/son.png", 24, 14, 8);
const richarlison = new Forward("Richarlison", "Striker","images/richarlison.png", 22, 10, 3)

// Create players for West Ham
const fabianski = new Goalkeeper("Fabianski", "Goalkeeper", "images/fabianski.png", 23, 6, 41);
const zouma = new Defender("Zouma", "Centre Back", "images/zouma.png", 25, 30, 38);
const cresswell = new Defender("Cresswell", "Left Back", "images/cresswell.png", 23,50, 44);
const wardprowse = new Midfielder("Ward-Prowse", " Central Midfielder", "images/wardprowse.png", 22, 760, 7);
const paqueta = new Midfielder("Paqueta", " Attacking Midfielder", "images/paqueta.png", 19, 562, 2);
const soucek = new Midfielder("Soucek", " Defensive Midfielder", "images/soucek.png", 21, 451, 3);
const bowen = new Forward("Bowen", "Right Winger","images/bowen.png", 23, 5, 7)
const antonio = new Forward("Antonio", "Forward","images/antonio.png", 26, 8, 4)

// Create players for Wolverhampton
const sa = new Goalkeeper("Jose Sa", "Goalkeeper", "images/sa.png", 28, 6, 77);
const dawson = new Defender("Dawson", "Centre Back", "images/dawson.png", 15, 26, 43);
const doherty = new Defender("Doherty", "Full Back", "images/doherty.png", 12, 23, 25);
const lemina = new Midfielder("Lemina", "Defensive Midfielder", "images/lemina.png", 24, 881, 5);
const traore = new Midfielder("Traore", "Defensive Midfielder", "images/traore.png", 21, 1291, 5);
const neto = new Forward("Neto", "Right Winger","images/neto.png", 21, 4, 10)
const cunha = new Forward("Cunha", "Forward","images/cunha.png", 17, 6, 4)
const hwang = new Forward("Hee Chan", "Forward","images/hwang.png", 25, 9, 5)

// Create players for Newcastle
const dubravka = new Goalkeeper("Dubravka", "Goalkeeper", "images/dubravka.png", 27, 7, 34);
const botman = new Defender("Botman", "Centre Back", "images/botman.png", 21, 45, 23);
const trippier = new Defender("Trippier", "Right Back", "images/trippier.png", 24, 35, 45);
const joelinton = new Midfielder("Joelinton", "Central Midfielder", "images/joelinton.png", 21, 1342, 6);
const guimaraes = new Midfielder("Guimaraes", "Central Midfielder", "images/guimaraes.png", 19, 698, 5);
const almiron = new Midfielder("Almiron", "Attacking Midfielder", "images/almiron.png", 15, 439, 2);
const barnes = new Forward("Barnes", "Left Winger","images/barnes.png", 21, 4, 14)
const isak = new Forward("Isak", "Forward","images/isak.png", 23, 11, 3)

// Create players for Brighton
const steele = new Goalkeeper("Steele", "Goalkeeper", "images/steele.png", 22, 4, 120);
const dunk = new Defender("Dunk", "Centre Back", "images/dunk.png", 24, 34, 56);
const estupinan = new Defender("Estupiñan", "Left Back", "images/estupinan.png", 22, 30, 66);
const milner = new Midfielder("Milner", "Central Midfielder", "images/milner.png", 19, 490, 1);
const grob = new Midfielder("Groß", "Defensive Midfielder", "images/gross.png", 25, 672, 4);
const mitoma = new Forward("Mitoma", "Left Winger","images/mitoma.png", 18, 5, 2);
const march = new Forward("March", "Right Winger","images/march.png", 21, 3, 4);
const welbeck = new Forward("Welbeck", "Forward","images/welbeck.png", 23, 6, 9)

// Create players for Chelsea
const sanchez = new Goalkeeper("Sanchez", "Goalkeeper", "images/sanchez.png", 28, 8, 94);
const reece = new Defender("Reece", "Centre Back", "images/reece.png", 21, 34, 56);
const chilwell = new Defender("Chilwell", "Right Back", "images/chilwell.png", 18, 23, 47);
const enzo = new Midfielder("Enzo", "Central Midfielder", "images/enzo.png", 20, 7, 4);
const gallagher = new Midfielder("Gallagher", "Central Midfielder", "images/gallagher.png", 20, 7, 4);
const caicedo = new Midfielder("Caicedo", "Defensive Midfielder", "images/caicedo.png", 20, 7, 4);
const sterling = new Forward("Sterling", "Left Winger","images/sterling.png", 26, 12, 4)
const jackson = new Forward("Jackson", "Striker","images/jackson.png", 20, 6, 9)

// Create players for Fulham
const leno = new Goalkeeper("Leno", "Goalkeeper", "images/leno.png", 22, 7, 80);
const adarabioyo = new Defender("Adarabioyo", "Centre Back", "images/adarabioyo.png", 19, 27, 43);
const castagne = new Defender("Castagne", "Full Back", "images/castagne.png", 24, 35, 47);
const lukic = new Midfielder("Lukic", "Defensive Midfielder", "images/lukic.png", 21, 732, 2);
const pereira = new Midfielder("Pereira", "Attacking Midfielder", "images/pereira.png", 25, 750, 1);
const iwobi = new Midfielder("Iwobi", "Attacking Midfielder", "images/iwobi.png", 19, 689, 2);
const wilson = new Forward("Wilson", "Right Winger", "images/wilson.png", 17, 7, 4);
const muniz = new Forward("Muniz", "Forward", "images/muniz.png", 15, 3, 5);

// Create players for Bournemouth
const netob = new Goalkeeper("Neto", "Goalkeeper", "images/netob.png", 26, 8, 75);
const mepham = new Defender("Mepham", "Centre Back", "images/mepham.png", 14, 21, 27);
const zabarnyi = new Defender("Zabarnyi", "Centre Back", "images/zabarnyi.png", 26, 35, 49);
const smith = new Defender("Smith", "Full Back", "images/smith.png", 22, 71, 45);
const christie = new Midfielder("Christie", "Attacking Midfielder", "images/christie.png", 25, 689, 8);
const hamed = new Midfielder("Traore", "Attacking Midfielder", "images/hamed.png", 21, 876, 6);
const kluivert = new Forward("Kluivert", "Right Winger", "images/kluivert.png", 23, 5, 9);
const solanke = new Forward("Solanke", "Striker", "images/solanke.png", 27, 14, 3);

// Create players for Crystal Palace
const johnstone = new Goalkeeper("Johnstone", "Goalkeeper", "images/johnstone.png", 25, 6, 64);
const ward = new Defender("Ward", "Full Back", "images/ward.png", 24, 65, 20);
const mitchell = new Defender("Left Back", "Left Back", "images/mitchell.png", 13, 19, 22);
const doucoure = new Midfielder("Doucoure", "Defensive Midfielder", "images/doucoure.png", 21, 792, 2);
const lerma = new Midfielder("Lerma", "Central Midfielder", "images/lerma.png", 25, 925, 5);
const olise = new Midfielder("Olise", "Attacking Midfielder", "images/olise.png", 18, 602, 2);
const ayew = new Forward("Ayew", "Forward", "images/ayew.png", 24, 7, 9);
const edouard = new Forward("Edouard", "Striker", "images/edouard.png", 23, 11, 4);

// Create players for Brentford
const flekken = new Goalkeeper("Flekken", "Goalkeeper", "images/flekken.png", 21, 7, 40);
const ajer = new Defender("Ajer", "Centre Back", "images/ajer.png", 18, 42, 50);
const pinnock = new Defender("Pinnock", "Centre Back", "images/pinnock.png", 16, 33, 41);
const norgaard = new Midfielder("Norgaard", "Defensive Midfielder", "images/norgaard.png", 25, 878, 2);
const janelt = new Midfielder("Janelt", "Defensive Midfielder", "images/janelt.png", 27, 1202, 0);
const lewisPotter = new Midfielder("Lewis-Potter", "Defensive Midfielder", "images/lewispotter.png", 23, 679, 2);
const wissa = new Forward("Wissa", "Left Winger", "images/wissa.png", 18, 3, 6);
const toney = new Forward("Toney", "Forward", "images/toney.png", 14, 4, 5);


// Create players for Everton
const pickford = new Goalkeeper("Pickford", "Goalkeeper", "images/pickford.png", 28, 3, 90);
const tarkowski = new Defender("Tarkowski", "Centre Back", "images/tarkowski.png", 27, 73, 35);
const young = new Defender("Young", "Full Back", "images/young.png", 17, 40, 44);
const onanae = new Midfielder("Onana", "Defensive Midfielder", "images/onanae.png", 23, 790, 1);
const garner = new Midfielder("Garner", "Central Midfielder", "images/garner.png", 18, 490, 3);
const doucouree = new Midfielder("Doucoure", "Central Midfielder", "images/doucouree.png", 25, 768, 4);
const mcneil = new Forward("McNeil", "Left Winger", "images/mcneil.png", 23, 10, 5);
const harrison = new Forward("Harrison", "Right Winger", "images/harrison.png", 26, 7, 8);

// Create players for Nottingham Forest
const sels = new Goalkeeper("Sels", "Goalkeeper", "images/sels.png", 24, 4, 65);
const murillo = new Defender("Murillo", "Centre Back", "images/murillo.png", 23, 71, 30);
const toffolo = new Defender("Toffolo", "Left Back", "images/toffolo.png", 18, 32, 45);
const yates = new Midfielder("Yates", "Defensive Midfielder", "images/yates.png", 22, 632, 4);
const dominguez = new Midfielder("Dominguez", "Central Midfielder", "images/dominguez.png", 17, 450, 2);
const gibbswhite = new Midfielder("Gibbs-White", "Attacking Midfielder", "images/gibbswhite.png", 26, 689, 9);
const hudsonodoi = new Forward("Hudson-Odoi", "Left Winger", "images/hudsonodoi.png", 25, 12, 3);
const elanga = new Forward("Elanga", "Left Winger", "images/elanga.png", 20, 5, 10);

// Create players for Luton Town
const kaminski = new Goalkeeper("Kaminski", "Goalkeeper", "images/kaminski.png", 28, 3, 78);
const mengi = new Defender("Mengi", "Centre Back", "images/mengi.png", 21, 34, 47);
const burke = new Defender("Burke", "Centre Back", "images/burke.png", 24, 39, 32);
const clark = new Midfielder("Clark", "Central Midfielder", "images/clark.png", 26, 783, 6);
const barkley = new Midfielder("Barkley", "Central Midfielder", "images/barkley.png", 17, 693, 3);
const ogbene = new Forward("Ogbene", "Right Winger", "images/ogbene.png", 19, 4, 2);
const chong = new Forward("Chong", "Right Winger", "images/chong.png", 25, 14, 2);
const morris = new Forward("Morris", "Striker", "images/morris.png", 21, 3, 7);

// Create players for Sheffield United
const adam = new Goalkeeper("Adam", "Goalkeeper", "images/adam.png", 20, 6, 42);
const trusty = new Defender("Trusty", "Centre Back", "images/trusty.png", 20, 76, 45);
const robinson = new Defender("Robinson", "Centre Back", "images/robinson.png", 23, 32, 46);
const osborn = new Midfielder("Osborn", "Central Midfielder", "images/osborn.png", 20, 7, 4);
const hammer = new Midfielder("Hammer", "Attacking Midfielder", "images/hammer.png", 20, 7, 4);
const bogle = new Midfielder("Bogle", "Right Midfielder", "images/bogle.png", 14, 2, 6);
const brereton = new Forward("Brereton", "Left Winger", "images/brereton.png", 12, 4, 1);
const mcburnie = new Forward("McBurnie", "Striker", "images/mcburnie.png", 25, 11, 3);

// Create players for Burnley
const trafford = new Goalkeeper("Trafford", "Goalkeeper", "images/trafford.png", 25, 3, 56);
const oshea = new Defender("O'Shea", "Centre Back", "images/oshea.png", 28, 85, 41);
const esteve = new Defender("Esteve", "Centre Back", "images/esteve.png", 12, 29, 22);
const berge = new Midfielder("Berge", "Defensive Midfielder", "images/berge.png", 25, 892, 1);
const cullen = new Midfielder("Cullen", "Defensive Midfielder", "images/cullen.png", 17, 623, 0);
const odobert = new Midfielder("Odobert", "Attacking Midfielder", "images/odobert.png", 19, 535, 3);
const larsen = new Forward("Larsen", "Left Winger", "images/larsen.png", 22, 4, 8);
const rodriguez = new Forward("Rodriguez", "Striker", "images/rodriguez.png", 24, 7, 3);


//Add players to the team

const burnley = new Football_Team("Burnley", "images/burnley.png");
burnley.addPlayer(trafford);
burnley.addPlayer(oshea);
burnley.addPlayer(esteve);
burnley.addPlayer(berge);
burnley.addPlayer(cullen);
burnley.addPlayer(odobert);
burnley.addPlayer(larsen);
burnley.addPlayer(rodriguez);

const sheffield = new Football_Team("Sheffield United", "images/sheffield.png");
sheffield.addPlayer(adam);
sheffield.addPlayer(trusty);
sheffield.addPlayer(robinson);
sheffield.addPlayer(osborn);
sheffield.addPlayer(hammer);
sheffield.addPlayer(bogle);
sheffield.addPlayer(brereton);
sheffield.addPlayer(mcburnie);


const luton = new Football_Team("Luton Town", "images/luton.png");
luton.addPlayer(kaminski);
luton.addPlayer(mengi);
luton.addPlayer(burke);
luton.addPlayer(clark);
luton.addPlayer(barkley);
luton.addPlayer(ogbene);
luton.addPlayer(chong);
luton.addPlayer(morris);


const forest = new Football_Team("Nottingham Forest", "images/forest.png");
forest.addPlayer(sels);
forest.addPlayer(murillo);
forest.addPlayer(toffolo);
forest.addPlayer(yates);
forest.addPlayer(dominguez);
forest.addPlayer(gibbswhite);
forest.addPlayer(hudsonodoi);
forest.addPlayer(elanga);


const everton = new Football_Team("Everton", "images/everton.png");
everton.addPlayer(pickford);
everton.addPlayer(tarkowski);
everton.addPlayer(young);
everton.addPlayer(onanae);
everton.addPlayer(garner);
everton.addPlayer(doucouree);
everton.addPlayer(mcneil);
everton.addPlayer(harrison);


const brentford = new Football_Team("Brentford", "images/brentford.png");
brentford.addPlayer(flekken);
brentford.addPlayer(ajer);
brentford.addPlayer(pinnock);
brentford.addPlayer(norgaard);
brentford.addPlayer(janelt);
brentford.addPlayer(lewisPotter);
brentford.addPlayer(wissa);
brentford.addPlayer(toney);

const palace = new Football_Team("Crystal Palace", "images/palace.png");
palace.addPlayer(johnstone);
palace.addPlayer(ward);
palace.addPlayer(mitchell);
palace.addPlayer(doucoure);
palace.addPlayer(lerma);
palace.addPlayer(olise);
palace.addPlayer(ayew);
palace.addPlayer(edouard);

const bournemouth = new Football_Team("Bournemouth", "images/bournemouth.png");
bournemouth.addPlayer(netob);
bournemouth.addPlayer(mepham);
bournemouth.addPlayer(zabarnyi);
bournemouth.addPlayer(smith);
bournemouth.addPlayer(christie);
bournemouth.addPlayer(hamed);
bournemouth.addPlayer(kluivert);
bournemouth.addPlayer(solanke);

const fulham = new Football_Team("Fulham", "images/fulham.png");
fulham.addPlayer(leno);
fulham.addPlayer(adarabioyo);
fulham.addPlayer(castagne);
fulham.addPlayer(lukic);
fulham.addPlayer(pereira);
fulham.addPlayer(iwobi);
fulham.addPlayer(wilson);
fulham.addPlayer(muniz);


const chelsea = new Football_Team("Chelsea", "images/chelsea.png");
chelsea.addPlayer(sanchez);
chelsea.addPlayer(reece);
chelsea.addPlayer(chilwell);
chelsea.addPlayer(enzo);
chelsea.addPlayer(gallagher);
chelsea.addPlayer(caicedo);
chelsea.addPlayer(sterling);
chelsea.addPlayer(jackson);

const brighton = new Football_Team("Brighton", "images/brighton.png");
brighton.addPlayer(steele);
brighton.addPlayer(dunk);
brighton.addPlayer(estupinan);
brighton.addPlayer(milner);
brighton.addPlayer(grob);
brighton.addPlayer(mitoma);
brighton.addPlayer(march);
brighton.addPlayer(welbeck);


const newcastle = new Football_Team("Newcastle", "images/newcastle.png");
newcastle.addPlayer(dubravka);
newcastle.addPlayer(botman);
newcastle.addPlayer(trippier);
newcastle.addPlayer(joelinton);
newcastle.addPlayer(guimaraes);
newcastle.addPlayer(almiron);
newcastle.addPlayer(barnes);
newcastle.addPlayer(isak);



const wolves = new Football_Team("Wolverhampton", "images/wolves.png");
wolves.addPlayer(sa);
wolves.addPlayer(dawson);
wolves.addPlayer(doherty);
wolves.addPlayer(lemina);
wolves.addPlayer(traore);
wolves.addPlayer(neto);
wolves.addPlayer(cunha);
wolves.addPlayer(hwang);



const westham = new Football_Team("West Ham", "images/westham.png");
westham.addPlayer(fabianski);
westham.addPlayer(zouma);
westham.addPlayer(cresswell);
westham.addPlayer(wardprowse);
westham.addPlayer(paqueta);
westham.addPlayer(soucek);
westham.addPlayer(bowen);
westham.addPlayer(antonio);



const arsenal = new Football_Team("Arsenal", "images/arsenal.png");
arsenal.addPlayer(ramsdale)
arsenal.addPlayer(saliba)
arsenal.addPlayer(gabriel)
arsenal.addPlayer(odegaard)
arsenal.addPlayer(rice)
arsenal.addPlayer(saka)
arsenal.addPlayer(martinelli)
arsenal.addPlayer(jesus)


const astonVilla = new Football_Team("Aston Villa", "images/villa.png");
astonVilla.addPlayer(dibu)
astonVilla.addPlayer(cash)
astonVilla.addPlayer(digne)
astonVilla.addPlayer(douglas)
astonVilla.addPlayer(mcginn)
astonVilla.addPlayer(tielemans)
astonVilla.addPlayer(duran)
astonVilla.addPlayer(watkins)


const liverpool = new Football_Team("Liverpool", "images/liverpool.png");
liverpool.addPlayer(alisson);
liverpool.addPlayer(joeGomez);
liverpool.addPlayer(vanDijk);
liverpool.addPlayer(trent);
liverpool.addPlayer(szoboszlai);
liverpool.addPlayer(macallister);
liverpool.addPlayer(diaz);
liverpool.addPlayer(salah);

const united = new Football_Team("Manchester United", "images/manchester.png");
united.addPlayer(onana);
united.addPlayer(victor);
united.addPlayer(maguire);
united.addPlayer(casemiro);
united.addPlayer(mount);
united.addPlayer(bruno);
united.addPlayer(garnacho);
united.addPlayer(rashford);

const city = new Football_Team("Manchester City", "images/city.png");
city.addPlayer(ederson);
city.addPlayer(dias)
city.addPlayer(ake);
city.addPlayer(foden);
city.addPlayer(deBruyne);
city.addPlayer(silva);
city.addPlayer(haaland);
city.addPlayer(alvarez);


const tottenham = new Football_Team("Tottenham", "images/tottenham.png");
tottenham.addPlayer(vicario);
tottenham.addPlayer(romero);
tottenham.addPlayer(porro);
tottenham.addPlayer(bissouma);
tottenham.addPlayer(maddison);
tottenham.addPlayer(kulusevski);
tottenham.addPlayer(son);
tottenham.addPlayer(richarlison);


// Get the team select dropdown element
const teamSelect = document.querySelector("#team-select");

const teams = [liverpool, united, tottenham, arsenal, astonVilla, city, westham, wolves, newcastle, brighton, chelsea, fulham, bournemouth, palace, brentford, everton, forest, luton, sheffield, burnley]

// Populate the dropdown options with team names
teams.forEach(team => {
    team.addToDropdown(teamSelect);
});


// Get the list-players container element
const listPlayersContainer = document.querySelector("#list-players");

// Render initial team Liverpool
liverpool.renderTeamPlayers(listPlayersContainer);

function changeTeam(){
    const selectedTeamName = teamSelect.value;
    let selectedTeam;

    if (selectedTeamName === "Liverpool") {
        selectedTeam = liverpool;
    } else if (selectedTeamName === "Manchester United") {
        selectedTeam = united;
    }else if (selectedTeamName === "Tottenham") {
        selectedTeam = tottenham;
    }else if (selectedTeamName === "Arsenal") {
        selectedTeam = arsenal;
    }else if (selectedTeamName === "Aston Villa") {
        selectedTeam = astonVilla;
    }else if (selectedTeamName === "Manchester City") {
        selectedTeam = city;
    }else if (selectedTeamName === "West Ham") {
        selectedTeam = westham;
    }else if (selectedTeamName === "Wolverhampton") {
        selectedTeam = wolves;
    }else if (selectedTeamName === "Newcastle") {
        selectedTeam = newcastle;
    }else if (selectedTeamName === "Brighton") {
        selectedTeam = brighton;
    }else if (selectedTeamName === "Chelsea") {
        selectedTeam = chelsea;
    }else if (selectedTeamName === "Fulham") {
        selectedTeam = fulham;
    }else if (selectedTeamName === "Bournemouth") {
        selectedTeam = bournemouth;
    }else if (selectedTeamName === "Crystal Palace") {
        selectedTeam = palace;
    }else if (selectedTeamName === "Brentford") {
        selectedTeam = brentford;
    }else if (selectedTeamName === "Everton") {
        selectedTeam = everton;
    }else if (selectedTeamName === "Nottingham Forest") {
        selectedTeam = forest;
    }else if (selectedTeamName === "Luton Town") {
        selectedTeam = luton;
    }else if (selectedTeamName === "Sheffield United") {
        selectedTeam = sheffield;
    }else if (selectedTeamName === "Burnley") {
        selectedTeam = burnley;
    }

    if (selectedTeam) {
        selectedTeam.renderTeamPlayers(listPlayersContainer);
        gsapanimation();
    }
}

// Handle team select change
teamSelect.addEventListener("change", changeTeam);

gsapanimation();


