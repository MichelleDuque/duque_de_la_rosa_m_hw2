# Premier League Stats Website


➡️ Welcome to the Premier League Stats Website! This website provides users with access to detailed statistics for Premier League teams. Users can easily find and compare stats for their favorite teams.

# Installation
No installation required

# Usage
1. Accessing the Website: Open index.html in any brower choice.
2. Searching for Teams: Choose the name of the Premier League team you want to view player statistics for in the dropdown menu.
3. Viewing Player Stats: Once you've searched for a team, you will be directed to the team's player stats page.

# Technologies Used
- HTML
- CSS
- JavaScript
- Sass

# Implementation Details

➡️Class-Based Population:
- We utilized classes to populate all data displayed on the website.
- The Football_Player class represents a generic football player and contains information such as name, position, appearances, and an infoPlayers method to display player statistics.
- Subclasses (Goalkeeper, Defender, Midfielder, and Forward) extend the Football_Player class and provide additional statistics specific to each player's position.
- Each subclass overrides the infoPlayers method to include position-specific statistics.
- The Football_Team class represents a Premier League team and contains information about the team's name, image, and players.
- The addPlayer method adds a player to the team's list of players.
- The renderTeamPlayers method renders the team's information, including its name, image, and a list of players with their respective statistics.
- The addToDropdown method adds the team's name to a dropdown menu for easy selection.


# Credits
 Michelle Paola Duque De La Rosa

# Acknowledgements
- Premier League for providing the statistical data and photos.

# License
MIT License
