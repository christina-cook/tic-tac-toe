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
    // add number of wins to local storage
    var savedWins = this.wins;
    localStorage.setItem(this.id, JSON.stringify(savedWins));
  }

  retrieveWinsFromStorage() {
    // get num of wins from local storage
  }

};
