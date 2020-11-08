var player1 = new Player("one", "🍺", true);
var player2 = new Player("two", "🍷");

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
  }

// This method checks the win conditions based on tokens for player 1. *
  checkWinConditionOfPlayer1() {
    if (this.boardData[0, 1, 2].includes(player1.token)) {
        player1.currentWinner = true;
        player2.currentWinner = false; // can probably remove all these falses
    } else if (this.boardData[3, 4, 5].includes(player1.token)) {
        player1.currentWinner = true;
        player2.currentWinner = false;
    } else if (this.boardData[6, 7, 8].includes(player1.token)) {
        player1.currentWinner = true;
        player2.currentWinner = false;
    } else if (this.boardData[0, 3, 6].includes(player1.token)) {
        player1.currentWinner = true;
        player2.currentWinner = false;
    } else if (this.boardData[1, 4, 7].includes(player1.token)) {
        player1.currentWinner = true;
        player2.currentWinner = false;
    } else if (this.boardData[2, 5, 8].includes(player1.token)) {
        player1.currentWinner = true;
        player2.currentWinner = false;
    } else if (this.boardData[0, 4, 8].includes(player1.token)) {
        player1.currentWinner = true;
        player2.currentWinner = false;
    } else if (this.boardData[2, 4, 6].includes(player1.token)) {
        player1.currentWinner = true;
        player2.currentWinner = false;
    }
  }


// This method checks the win conditions based on tokens for player 2. *
  checkWinConditionOfPlayer2() {
    if (this.boardData[0, 1, 2].includes(player2.token)) {
        player2.currentWinner = true;
        player1.currentWinner = false;
    } else if (this.boardData[3, 4, 5].includes(player2.token)) {
        player2.currentWinner = true;
        player1.currentWinner = false;
    } else if (this.boardData[6, 7, 8].includes(player2.token)) {
        player2.currentWinner = true;
        player1.currentWinner = false;
    } else if (this.boardData[0, 3, 6].includes(player2.token)) {
        player2.currentWinner = true;
        player1.currentWinner = false;
    } else if (this.boardData[1, 4, 7].includes(player2.token)) {
        player2.currentWinner = true;
        player1.currentWinner = false;
    } else if (this.boardData[2, 5, 8].includes(player2.token)) {
        player2.currentWinner = true;
        player1.currentWinner = false;
    } else if (this.boardData[0, 4, 8].includes(player2.token)) {
        player2.currentWinner = true;
        player1.currentWinner = false;
    } else if (this.boardData[2, 4, 6].includes(player2.token)) {
        player2.currentWinner = true;
        player1.currentWinner = false;
    }
  }


  checkForDraw() {
    // checking if board is full but no win
    // if no win condition is true and boardData is full
  }

  // This method changes each player's win count and calls a method
  // to update the win count on the screen. *
  updateWinCount() {
    if (this.player1.currentWinner === true) {
      this.player1.win();
      updateNumberOnWinCount();
    } else if (this.player2.currentWinner === true) {
      this.player2.win();
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

  // method to reset game board
  resetGameBoard() {
    if (this.boardData.length === 9) {
      // use timeout to clear board after a certain time
    }
  }


// This method updates the board data array with player one's token.
  updateBoardDataForPlayer1(event) {
    if (event.target.id === "0") {
      this.boardData.splice(0, 1, "🍺");
    } else if (event.target.id === "1") {
      this.boardData.splice(1, 1, "🍺");
    } else if (event.target.id === "2") {
      this.boardData.splice(2, 1, "🍺");
    } else if (event.target.id === "3") {
      this.boardData.splice(3, 1, "🍺");
    } else if (event.target.id === "4") {
      this.boardData.splice(4, 1, "🍺");
    } else if (event.target.id === "5") {
      this.boardData.splice(5, 1, "🍺");
    } else if (event.target.id === "6") {
      this.boardData.splice(6, 1, "🍺");
    } else if (event.target.id === "7") {
      this.boardData.splice(7, 1, "🍺");
    } else if (event.target.id === "8") {
      this.boardData.splice(8, 1, "🍺");
    }
  }

  // This method updates the board data array with player two's token. *
  updateBoardDataForPlayer2(event) {
    if (event.target.id === "0") {
      this.boardData.splice(0, 1, "🍷");
    } else if (event.target.id === "1") {
      this.boardData.splice(1, 1, "🍷");
    } else if (event.target.id === "2") {
      this.boardData.splice(2, 1, "🍷");
    } else if (event.target.id === "3") {
      this.boardData.splice(3, 1, "🍷");
    } else if (event.target.id === "4") {
      this.boardData.splice(4, 1, "🍷");
    } else if (event.target.id === "5") {
      this.boardData.splice(5, 1, "🍷");
    } else if (event.target.id === "6") {
      this.boardData.splice(6, 1, "🍷");
    } else if (event.target.id === "7") {
      this.boardData.splice(7, 1, "🍷");
    } else if (event.target.id === "8") {
      this.boardData.splice(8, 1, "🍷");
    }
  }

};
