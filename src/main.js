var currentGame = new Game(player1, player2);
// how do I instantiate a new game each time the page loads and/or a new game starts?

// ~~~~~~~~~~~~~ Query Selectors ~~~~~~~~~~~~~

var currentPlayerMessage = document.querySelector('.current-player');
var beerWinCount = document.querySelector('.beer-win-count');
var wineWinCount = document.querySelector('.wine-win-count');
var gameBoard = document.querySelector('.game-board');
var boardSquares = document.querySelectorAll('.square');

// ~~~~~~~~~~~~~ Event Listeners ~~~~~~~~~~~~~

gameBoard.addEventListener('click', playTurn);
window.addEventListener('load', startNewGame);


// ~~~~~~~~~~~~~ Event Handlers ~~~~~~~~~~~~~

function startNewGame() {
  // var newGame = new Game(player1, player2);
  currentPlayerMessage.innerText = `It's ${player1.token}'s turn!`;
};

// method to play turn
function takeTurn() {
  // playTurn();
  // placeToken();
  // checkWinCondition();
  // updateWinCount();
  // displayNextTurn(); // method to change innerHTML of h2 in main section
};


// This function adds a player's token into an empty square on the board
// and then pushes the square's id to the player's moves array.
// The function then calls the changePlayer method to switch players.
function playTurn(event) {
    if (currentGame.player1.isTurn === true) {
      event.target.innerHTML = `<p class="token">🍺</p>`;
      player1.moves.push(event.target.id);
      //update board data
    } else if (currentGame.player2.isTurn === true){
      event.target.innerHTML = `<p class="token">🍷</p>`;
      player2.moves.push(event.target.id);
    }
    console.log(event.target)
    currentGame.changePlayer();
    currentGame.checkWinCondition();
};

// updates the boardData with current player's move
function updateBoardData() {

};

// This function changes the "It's 's turn!" message above the game board
// to show who the current player is.
function updateCurrentPlayerMessage() {
  if (player1.isTurn === true) {
    currentPlayerMessage.innerText = `It's ${player1.token}'s turn!`;
  } else if (player2.isTurn === true) {
    currentPlayerMessage.innerText = `It's ${player2.token}'s turn!`;
  }
};

//
function updateNumberOnWinCount() {
  if (player1.currentWinner === true) {
    beerWinCount.innerText = `${player1.wins} wins`
  } else {
    wineWinCount.innerText = `${player2.wins} wins`
  }
};
