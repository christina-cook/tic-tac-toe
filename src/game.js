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

  checkForDraw() {
    if (this.turns === 9 && this.activeGame) {
      this.activeGame = false;
      changeMessageOnDraw();
    }
  }

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

  updateBoardDataForPlayer(event, player) {
    this.boardData.splice(parseInt(event.target.id), 1, `${player.token}`);
  }
  
};
