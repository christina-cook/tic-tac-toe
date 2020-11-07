class Player {
  constructor(playerNum, token, turn) {
    this.id = playerNum;
    this.token = token;
    this.wins = 0;
    this.isTurn = turn || false;
    this.moves = []; // array of numbers
    this.currentWinner = false;
  }

  win() {
    this.wins++;
  }

  saveWinsToStorage() {
    // add number of wins to local storage
  }

  retrieveWinsFromStorage() {
    // get num of wins from local storage
  }
};
