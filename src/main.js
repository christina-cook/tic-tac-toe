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

function placeToken() {
  playTurn(); // event listeners on sqaures
  updateBoardData(); // boardData gets updated - swaping numbers for tokens
  addSquareIdToPlayerMoves(); // push sqaure id to player's moves array
};


function playTurn(event) {
    if (currentGame.player1.isTurn === true) {
      event.target.innerHTML = `<p class="token">🍺</p>`;
      player1.moves.push(event.target.id);
    } else if (currentGame.player2.isTurn === true){
      event.target.innerHTML = `<p class="token">🍷</p>`;
      player2.moves.push(event.target.id);
    }
    console.log(event.target)
    currentGame.changePlayer();

  //   // assign id (location) to a player (update moves based on click)
  //   // push to moves array
  // } else {
};
