class Game {
  constructor(id, gameName, players) {
    this.id = id;
    this.gameName = gameName;
    this.players = players;
  }

  isGameFull = () => (this.players.length >= 2 ? true : false);
  getNumberOfPlayers = () => this.players.length;
}

module.exports = Game;
