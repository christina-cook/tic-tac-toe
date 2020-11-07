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
    // player1 moves and player2 moves
  }

  // method for checking whose turn it is
  takeTurn() {
    // changes a player's turn from true to false
    // include moves and switch take turn
    // pass click event - determine where click happened (event.target)
    // assign id (location) to a player
    // define our move - object with number and player
    // push to moves array
    // check if win
  }

  // method for determining when a game is won
  checkWinCondition() {
    // win conditionals
    // if else statement checking for rows, columns, and diagonals of 3
    // loop through win conditions array
      // part of conditions loop
      // for each condition
      // this.player1.moves[i].includes
      // loop within a loop
    // add way to detect for a draw
  }

  // method to change each player's win count
  updateWinCount() {
    player.this.wins++
  }

  //method to reset game board
  resetGameBoard() {
    // use timeout to clear board after a certain time
  }
};

////// Game class should include:
// Two Player instances
// A way to keep track of the data for the game board
////// A way to keep track of which player’s turn it currently is
////// A way to check the Game’s board data for win conditions
////// A way to detect when a game is a draw (no one has won)
// A way to save a winning Game’s board data to the correct
// player’s wins array
//// A way to reset the Game’s board to begin a new game
