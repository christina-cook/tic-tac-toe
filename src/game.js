var player1 = new Player("playerOne", "🍺", true);
var player2 = new Player("playerTwo", "🍷");


class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.boardData = ["", "", "", "", "", "", "", "", ""];
    this.activeGame = false;
    this.turns = 0;
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

  // This method checks to see if the game ended in a tie. *
  checkForDraw() {
    if (this.turns === 9 && this.activeGame) {
      this.activeGame = false
      changeMessageOnDraw();
    }
  }

  // This method changes each player's win count and calls a method
  // to update the win count on the screen. *
  updateWinCount() {
    if (this.player1.currentWinner) {
      this.player1.win();
      this.player1.saveWinsToStorage();
      updateNumberOnWinCount();
    } else if (this.player2.currentWinner) {
      this.player2.win();
      this.player2.saveWinsToStorage();
      updateNumberOnWinCount();
    }
  }

  // This method resets the game and player properties back to their default values at the start of the game.
  resetGameAndPlayerProperties() {
    this.boardData = ["", "", "", "", "", "", "", "", ""];
    this.turns = 0;
    this.player1.currentWinner = false;
    this.player1.isTurn = true;
    this.player1.moves = [];
    this.player2.currentWinner = false;
    this.player2.isTurn = false;
    this.player2.moves = [];
  }

  // This method changes whose turn it is and calls a method to display the current
  // player above the board. *
  changePlayer() {
      if (this.player1.isTurn) {
      this.player1.isTurn = false;
      this.player2.isTurn = true;
      updateCurrentPlayerMessage();
    } else if (this.player2.isTurn) {
      this.player2.isTurn = false;
      this.player1.isTurn = true;
      updateCurrentPlayerMessage();
    }
  }

  // This method updates the board data array with the current player's token. *
  updateBoardDataForPlayer(event, player) {
    this.boardData.splice(parseInt(event.target.id), 1, `${player.token}`);
  }

};
