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

        gsap.fromTo('#list-players', {
            y: 40,
            opacity: 0,
          },
          {
          delay: 0.6, 
          duration: 1, 
          y: 0,
          opacity: 1,
          ease: 'power2.easeOut',
          stagger: {
            from: 'start', 
            amount: 0.6, 
          },
        })

        teamBox.innerHTML = ''; 

        const teamDiv = document.createElement('div');
        const teamName = document.createElement('h2');
        const imgTeam = document.createElement('img');
        const playerList = document.createElement('ul');

        teamName.textContent = this.name;
        teamDiv.classList.add('team');
        playerList.classList.add('players');

        imgTeam.src = this.image;
        imgTeam.classList.add("image-team")


        this.players.forEach(player => {
            const playerItem = player.infoPlayers();
            playerList.appendChild(playerItem);
        });

        teamDiv.appendChild(imgTeam);
        teamDiv.appendChild(playerList);
        
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








