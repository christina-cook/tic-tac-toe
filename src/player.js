class Player {
  constructor(playerNum, token) {
    this.id = playerNum;
    this.token = token;
    this.wins = 0;
  }

  win() {
    this.wins++;
  }
  
  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }
};
