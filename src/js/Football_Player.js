class Football_Player {
    constructor(
        name, 
        position, 
        image,
        appearances
        ) {
        this.name = name;
        this.position = position;
        this.image = image;
        this.appearances = appearances;
    }

    infoPlayers() {
        const playerItem = document.createElement("li");
        const div_image = document.createElement("div");
        playerItem.appendChild(div_image);
        playerItem.classList.add("player-box")
        div_image.classList.add("image_box")
    
        const div_name = document.createElement("div");
        const playerName = document.createElement("h3");
        playerName.textContent = this.name;
        playerItem.appendChild(div_name);
        div_name.classList.add("box-name")
    
        const div_stats = document.createElement("div");
        const positionSpan = document.createElement("span");
        div_stats.classList.add("stats-list")
        positionSpan.textContent = `${this.position}`;

        const appearancesSpan = document.createElement("span");
        appearancesSpan.textContent = `Appearances: ${this.appearances}`;

        const imagePlayer = document.createElement("img");
        imagePlayer.classList.add("image-player");
        imagePlayer.src = this.image;
        playerItem.appendChild(div_stats);
    
    
        div_image.appendChild(imagePlayer);
        div_name.appendChild(playerName);
        div_stats.appendChild(positionSpan);
        div_stats.appendChild(appearancesSpan);

    
        return playerItem;
    }
}


class Goalkeeper extends Football_Player {
    constructor(
        name, 
        position, 
        image,
        appearances,
        cleansheet,
        saves
    ) {
        super(name, position, image, appearances);
        this.cleansheet = cleansheet;
        this.saves = saves;
    }

    infoPlayers() {
        const playerItem = super.infoPlayers();
        const div_stats = playerItem.querySelector(".stats-list");

        const cleansheetSpan = document.createElement("span");
        cleansheetSpan.textContent = `Clean Sheet: ${this.cleansheet}`;
        const saveSpan = document.createElement("span");
        saveSpan.textContent = `Saves Made: ${this.saves}`;

        div_stats.appendChild(cleansheetSpan);
        div_stats.appendChild(saveSpan);

        return playerItem;
    }
}


class Defender extends Football_Player {
    constructor(
        name, 
        position, 
        image,
        appearances,
        tackles,
        duels
    ) {
        super(name, position, image, appearances);
        this.tackles = tackles;
        this.duels = duels;
    }

    infoPlayers() {
        const playerItem = super.infoPlayers();
        const div_stats = playerItem.querySelector(".stats-list");

        const tacklesSpan = document.createElement("span");
        tacklesSpan.textContent = `Total Tackles: ${this.tackles}`;
        const duelsSpan = document.createElement("span");
        duelsSpan.textContent = `Aerial Duels: ${this.duels}`;

        div_stats.appendChild(tacklesSpan);
        div_stats.appendChild(duelsSpan);

        return playerItem;
    }
}

class Midfielder extends Football_Player {
    constructor(
        name, 
        position, 
        image,
        appearances,
        passes,
        goals
    ) {
        super(name, position, image, appearances);
        this.passes = passes;
        this.goals = goals;
    }

    infoPlayers() {
        const playerItem = super.infoPlayers();
        const div_stats = playerItem.querySelector(".stats-list");

        const passesSpan = document.createElement("span");
        passesSpan.textContent = `Total Passes: ${this.passes}`;
        const goalsSpan = document.createElement("span");
        goalsSpan.textContent = `Total Goals: ${this.goals}`;

        div_stats.appendChild(passesSpan);
        div_stats.appendChild(goalsSpan);

        return playerItem;
    }
}

class Forward extends Football_Player {
    constructor(
        name, 
        position, 
        image,
        appearances,
        goals,
        assists
    ) {
        super(name, position, image, appearances);
        this.goals = goals;
        this.assists = assists;
    }

    infoPlayers() {
        const playerItem = super.infoPlayers();
        const div_stats = playerItem.querySelector(".stats-list");

        const goalsSpan = document.createElement("span");
        goalsSpan.textContent = `Total Goals: ${this.goals}`;
        const assistsSpan = document.createElement("span");
        assistsSpan.textContent = `Total Assits: ${this.assists}`;

        div_stats.appendChild(goalsSpan);
        div_stats.appendChild(assistsSpan);

        return playerItem;
    }
}

export {Football_Player, Goalkeeper, Defender, Midfielder, Forward};