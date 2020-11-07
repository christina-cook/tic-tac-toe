var player1 = new Player("one", "🍺", true);
var player2 = new Player("two", "🍷");

var winConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
  ];

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.winConditions = winConditions;
    this.boardData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  // method to play turn
  takeTurn() {
    placeToken();
    checkWinCondition();
    updateWinCount();
    changePlayer();
    displayNextTurn(); // method to change innerHTML of h2 in main section
  }

  placeToken() {
    playTurn(); // event listeners on sqaures
    updateBoardData(); // boardData gets updated - swaping numbers for tokens
    addSquareIdToPlayerMoves(); // push sqaure id to player's moves array
  }

  playTurn() { // play using event.target on the DOM
    if (this.player1.isTurn === true) {
      // method to change innerHTML of the clicked square
      // change to a beer token
      // determine where click happened (event.target)
      // assign id (location) to a player (update moves based on click)
      // push to moves array
    } else {
      // method to change innerHTML of the clicked square
      // change to a wine token
    }
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

  // method to change each player's win count *
  updateWinCount() {
    if (this.player1.currentWinner === true) {
      this.player1.win();
      // update innerHTML of win count
    } else if (this.player2.currentWinner === true) {
      this.player2.win();
      // update innerHTML of win count
    }
  }

  // method to change whose turn it is *
  changePlayer() {
      if (this.player1.isTurn === true) { // refactor to this.player1.isTurn
      this.player1.isTurn = false;
      this.player2.isTurn = true;
    } else if (this.player2.isTurn === true) { // refactor to this.player2.isTurn
      this.player2.isTurn = false;
      this.player1.isTurn = true;
    }
  }

  //method to reset game board
  resetGameBoard() {
    // use timeout to clear board after a certain time
  }
};

var game = new Game(player1, player2);
