class Player {
  constructor(playerNum, token) {
    this.id = playerNum;
    this.token = token;
    this.wins = 0;
    this.turn = false;
    this.moves = [];
  }

  // move this method to game class? updateWinCount
  // win() {
  //   this.wins++;
  // }

  saveWinsToStorage() {
    // add number of wins to local storage
  }

  retrieveWinsFromStorage() {
    // get num of wins from local storage
  }
};

// Player methods must include:
// constructor properties id, token, wins
// saveWinsToStorage
// retrieveWinsFromStorage
