class Football_Team {
    constructor(
        name,
        image
        ) {
        this.name = name;
        this.image = image;
        this.players = [];
    }

    addPlayer(player) {
        this.players.push(player);
    }

    renderTeamPlayers() {
        const teamBox = document.querySelector("#list-players");
        teamBox.innerHTML = ''; 

        // Create a div element for the team
        const teamDiv = document.createElement('div');
        const teamName = document.createElement('h2');
        const imgTeam = document.createElement('img');
        const playerList = document.createElement('ul');

        teamName.textContent = this.name;
        teamDiv.classList.add('team');
        playerList.classList.add('players');

        imgTeam.src = this.image;
        imgTeam.classList.add("image-team")

        // Loop through the players and create li elements for each player
        this.players.forEach(player => {
            const playerItem = player.infoPlayers();
            playerList.appendChild(playerItem);
        });

        // Append the team name heading and player list to the team div
        // teamDiv.appendChild(teamName);
        teamDiv.appendChild(imgTeam);
        teamDiv.appendChild(playerList);
        

        // Append the team div to the team container
        teamBox.appendChild(teamDiv);

    }

    addToDropdown(selectTeam) {
        const optionTeam = document.createElement("option");
        optionTeam.text = this.name;
        optionTeam.value = this.name;
        selectTeam.add(optionTeam);
    }
}

export { Football_Team };








