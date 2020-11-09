var player1 = new Player("playerOne", "🍺", true);
var player2 = new Player("playerTwo", "🍷");

var winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.winConditions = winConditions;
    this.boardData = ["", "", "", "", "", "", "", "", ""];
    this.activeGame = false;
  }

// This method checks the win conditions based on the current player's tokens. *
  checkWinConditions(player) {
    if (this.boardData[0].includes(player.token) && this.boardData[1].includes(player.token) && this.boardData[2].includes(player.token)) {
      player.currentWinner = true;
      this.activeGame = false;
    } else if (this.boardData[3].includes(player.token) && this.boardData[4].includes(player.token) && this.boardData[5].includes(player.token)) {
      player.currentWinner = true;
      this.activeGame = false;
    } else if (this.boardData[6].includes(player.token) && this.boardData[7].includes(player.token) && this.boardData[8].includes(player.token)) {
      player.currentWinner = true;
      this.activeGame = false;
    } else if (this.boardData[0].includes(player.token) && this.boardData[3].includes(player.token) && this.boardData[6].includes(player.token)) {
      player.currentWinner = true;
      this.activeGame = false;
    } else if (this.boardData[1].includes(player.token) && this.boardData[4].includes(player.token) && this.boardData[7].includes(player.token)) {
      player.currentWinner = true;
      this.activeGame = false;
    } else if (this.boardData[2].includes(player.token) && this.boardData[5].includes(player.token) && this.boardData[8].includes(player.token)) {
      player.currentWinner = true;
      this.activeGame = false;
    } else if (this.boardData[0].includes(player.token) && this.boardData[4].includes(player.token) && this.boardData[8].includes(player.token)) {
      player.currentWinner = true;
      this.activeGame = false;
    } else if (this.boardData[2].includes(player.token) && this.boardData[4].includes(player.token) && this.boardData[6].includes(player.token)) {
      player.currentWinner = true;
      this.activeGame = false;
    } 
  }

  // This method changes each player's win count and calls a method
  // to update the win count on the screen. *
  updateWinCount() {
    if (this.player1.currentWinner === true) {
      this.player1.win();
      this.player1.saveWinsToStorage();
      updateNumberOnWinCount();
    } else if (this.player2.currentWinner === true) {
      this.player2.win();
      this.player2.saveWinsToStorage();
      updateNumberOnWinCount();
    }
  }

  // This method changes whose turn it is and calls a method to display the current
  // player above the board. *
  changePlayer() {
      if (this.player1.isTurn === true) { // refactor to this.player1.isTurn
      this.player1.isTurn = false;
      this.player2.isTurn = true;
      updateCurrentPlayerMessage();
    } else if (this.player2.isTurn === true) { // refactor to this.player2.isTurn
      this.player2.isTurn = false;
      this.player1.isTurn = true;
      updateCurrentPlayerMessage();
    }
  }

  // This method updates the board data array with the current player's token. *
  updateBoardDataForPlayer(event, player) {
    if (event.target.id === "0") {
      this.boardData.splice(0, 1, `${player.token}`);
    } else if (event.target.id === "1") {
      this.boardData.splice(1, 1, `${player.token}`);
    } else if (event.target.id === "2") {
      this.boardData.splice(2, 1, `${player.token}`);
    } else if (event.target.id === "3") {
      this.boardData.splice(3, 1, `${player.token}`);
    } else if (event.target.id === "4") {
      this.boardData.splice(4, 1, `${player.token}`);
    } else if (event.target.id === "5") {
      this.boardData.splice(5, 1, `${player.token}`);
    } else if (event.target.id === "6") {
      this.boardData.splice(6, 1, `${player.token}`);
    } else if (event.target.id === "7") {
      this.boardData.splice(7, 1, `${player.token}`);
    } else if (event.target.id === "8") {
      this.boardData.splice(8, 1, `${player.token}`);
    }
  }

};
