var currentGame = new Game(player1, player2);
// how do I instantiate a new game each time the page loads and/or a new game starts?
// or does this already happen with a global variable?


// ~~~~~~~~~~~~~ Query Selectors ~~~~~~~~~~~~~

var currentPlayerMessage = document.querySelector('.current-player');
var beerWinCount = document.querySelector('.beer-win-count');
var wineWinCount = document.querySelector('.wine-win-count');
var gameBoard = document.querySelector('.game-board');
// var boardSquares = document.querySelectorAll('.square');

// ~~~~~~~~~~~~~ Event Listeners ~~~~~~~~~~~~~

gameBoard.addEventListener('click', takeTurn);

// ~~~~~~~~~~~~~ Event Handlers ~~~~~~~~~~~~~


// Helper function for playing a turn and switching players. *
function takeTurn() {
  playTurn(event);
  currentGame.updateWinCount();
  currentGame.changePlayer();
};


// This function adds a player's token into an empty square on the board
// and then pushes the square's id to the player's moves array. *
// It also calls 2 methods on the Game class:
// - updating board data with player tokens *
// - checking win conditions *
function playTurn(event) {
  if (currentGame.player1.isTurn === true) {
    event.target.innerHTML = `<p class="token">🍺</p>`;
    player1.moves.push(event.target.id);
    currentGame.updateBoardDataForPlayer1(event);
    currentGame.checkWinConditionOfPlayer1();
  } else if (currentGame.player2.isTurn === true) {
    event.target.innerHTML = `<p class="token">🍷</p>`;
    player2.moves.push(event.target.id);
    currentGame.updateBoardDataForPlayer2(event);
    currentGame.checkWinConditionOfPlayer2();
  }
};


// This function changes the "It's 's turn!" message above the game board
// to show who the current player is. *
function updateCurrentPlayerMessage() {
  if (player1.isTurn === true) {
    currentPlayerMessage.innerText = `It's ${player1.token}'s turn!`;
  } else if (player2.isTurn === true) {
    currentPlayerMessage.innerText = `It's ${player2.token}'s turn!`;
  }
};


// This method updates the current winner's win count number
// displayed on the page. *
function updateNumberOnWinCount() {
  if (player1.currentWinner === true) {
    beerWinCount.innerText = `${player1.wins} wins`
  } else {
    wineWinCount.innerText = `${player2.wins} wins`
  }
};
