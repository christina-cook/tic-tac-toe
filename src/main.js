var currentGame = new Game(player1, player2);

// ~~~~~~~~~~~~~ Query Selectors ~~~~~~~~~~~~~

var currentPlayerMessage = document.querySelector('.current-player');
var beerWinCount = document.querySelector('.beer-win-count');
var wineWinCount = document.querySelector('.wine-win-count');
var gameBoard = document.querySelector('.game-board');


// ~~~~~~~~~~~~~ Event Listeners ~~~~~~~~~~~~~

gameBoard.addEventListener('click', takeTurn);
window.addEventListener('load', updateNumberOnWinCount);

// ~~~~~~~~~~~~~ Event Handlers ~~~~~~~~~~~~~


// Helper function for playing a turn and switching players. *
function takeTurn() {
  currentGame.activeGame = true;
  if (event.target.innerText !== "") {
    return
  }
  playTurn(event);
  currentGame.updateWinCount();
  currentGame.changePlayer();
  displayWinner();
};


// This function displays the winner above the board after a game is won. *
function displayWinner() {
  if (currentGame.player1.currentWinner) {
    currentPlayerMessage.innerText = `${player1.token} wins!`;
  } else if (currentGame.player2.currentWinner === true) {
    currentPlayerMessage.innerText = `${player2.token} wins!`;
  } else {
    checkForDraw();
  }
  setTimeout(resetGameBoard, 3000);
};


// This function checks to see if the game ended in a tie. *
function checkForDraw() {
  if (currentGame.turns === 9 && currentGame.activeGame === true) {
    currentPlayerMessage.innerText = "It's a tie!";
    currentGame.activeGame = false;
  }
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
      currentGame.updateBoardDataForPlayer(event, player1);
      currentGame.checkWinConditions(player1);
    } else if (currentGame.player2.isTurn === true) {
      event.target.innerHTML = `<p class="token">🍷</p>`;
      player2.moves.push(event.target.id);
      currentGame.updateBoardDataForPlayer(event, player2);
      currentGame.checkWinConditions(player2);
    }
    currentGame.turns++;
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
  if (currentGame.activeGame === false) {
    currentGame.player1.retrieveWinsFromStorage();
    beerWinCount.innerText = `${player1.wins} wins`;
    currentGame.player2.retrieveWinsFromStorage();
    wineWinCount.innerText = `${player2.wins} wins`;
  }
};


// This function resets the game board after each win or tie. *
function resetGameBoard() {
  if (currentGame.activeGame === false) {
    gameBoard.innerHTML = `
    <div class="square top-left" id="0">
      <p class="token"></p>
    </div>
    <div class="square top-center" id="1">
      <p class="token"></p>
    </div>
    <div class="square top-right" id="2">
      <p class="token"></p>
    </div>
    <div class="square middle-left" id="3">
      <p class="token"></p>
    </div>
    <div class="square middle-center" id="4">
      <p class="token"></p>
    </div>
    <div class="square middle-right" id="5">
      <p class="token"></p>
    </div>
    <div class="square bottom-left" id="6">
      <p class="token"></p>
    </div>
    <div class="square bottom-center" id="7">
      <p class="token"></p>
    </div>
    <div class="square bottom-right" id="8">
      <p class="token"></p>
    </div>
    `
    currentGame.boardData = ["", "", "", "", "", "", "", "", ""];
    currentGame.turns = 0;
    currentGame.player1.currentWinner = false;
    currentGame.player1.isTurn = true;
    currentGame.player1.moves = [];
    currentGame.player2.currentWinner = false;
    currentGame.player2.isTurn = false;
    currentGame.player2.moves = [];
    setTimeout(resetPlayerMessage, 1000);
  }
};

function resetPlayerMessage() {
  currentPlayerMessage.innerText = `It's ${player1.token}'s turn!`;
};
