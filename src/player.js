class Player {
  constructor(player, token, turn) {
    this.id = player;
    this.token = token;
    this.wins = 0;
    this.isTurn = turn || false;
    this.moves = [];
    this.currentWinner = false;
  }

  win() {
    this.wins++;
  }

  saveWinsToStorage() {
    var savedWins = this.wins;
    localStorage.setItem(`${this.id}`, JSON.stringify(savedWins));
  }

  retrieveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(`${this.id}`) || 0);
  }

};
