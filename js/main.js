import {Football_Team} from './Football_Team.js';
import {Football_Player, Goalkeeper, Defender, Midfielder, Forward} from './Football_Player.js';


// Create players for Team A
const alisson = new Goalkeeper("Alisson", "Goalkeeper", "images/becker.webp", 70, 10, 66);
const joeGomez = new Defender("Joe Gomez", "Centre Back", "images/joe.png", 200, 30, 20)
const endo = new Midfielder("Wataru Endo", "Defensive Midfielder", "images/endo.png", 200, 30, 2)
const diaz = new Forward("Luis Diaz", "Winger", "images/luisdiaz.png", 200, 30, 20)

// Create players for Team B
const onana = new Goalkeeper("Onana", "Goalkeeper", "images/onana.png", 20, 7, 40);
const victor = new Defender("Victor Lindelöf", "Centre Back", "images/lindelof.png", 20, 7, 40);
const mount = new Midfielder("Mason Mount", " Attacking Midfielder", "images/mount.png", 20, 7, 4);
const garnacho = new Forward("Garnacho", "Winger","images/garnacho.png", 200, 30, 23)

// Create teams and add players
const liverpool = new Football_Team("Liverpool", "images/liverpool.png");
liverpool.addPlayer(alisson);
liverpool.addPlayer(joeGomez);
liverpool.addPlayer(endo);
liverpool.addPlayer(diaz);

const united = new Football_Team("Manchester United", "images/manchester.png");
united.addPlayer(onana)
united.addPlayer(victor);
united.addPlayer(mount);
united.addPlayer(garnacho);

// Get the team select dropdown element
const teamSelect = document.getElementById("team-select");

// Populate the dropdown options with team names
[liverpool, united].forEach(team => {
    team.addToDropdown(teamSelect);
});

// Get the list-players container element
const listPlayersContainer = document.getElementById("list-players");

// Render initial team (Team A)
liverpool.renderTeamPlayers(listPlayersContainer);

function changeTeam(){
    const selectedTeamName = teamSelect.value;
    let selectedTeam;

    if (selectedTeamName === "Liverpool") {
        selectedTeam = liverpool;
    } else if (selectedTeamName === "Manchester United") {
        selectedTeam = united;
    }

    if (selectedTeam) {
        selectedTeam.renderTeamPlayers(listPlayersContainer);
    }
}

// Handle team select change
teamSelect.addEventListener("change", changeTeam);