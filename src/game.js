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


  // method for determining when a game is won
  checkWinCondition() {
    for (var i = 0; i < this.winConditions.length; i++) {
      if (this.player1.moves.includes(this.winConditions[i])) {
        this.player1.currentWinner = true;
        this.player2.currentWinner = false;
      } else if (this.player2.moves.includes(this.winConditions[i])) {
        this.player2.currentWinner = true;
        this.player1.currentWinner = false;
      }
    }
    // call checkForDraw();
  }

  checkForDraw() {
    // checking if board is full but no win
    // if no win condition is true and boardData is full of tokens
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

  // This method updates the win count number for each player if they are
  // the current winner. *
  updateNumberOnWinCount() {
    if (player1.currentWinner === true) {
      beerWinCount.innerText = `${player1.wins} wins`
    } else {
      wineWinCount.innerText = `${player2.wins} wins`
    }
  }

  // method to change whose turn it is *
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

  //method to reset game board
  resetGameBoard() {
    // use timeout to clear board after a certain time
  }
};
