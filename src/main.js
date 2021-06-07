var currentGame = new Game(player1, player2);

var currentPlayerMessage = document.querySelector('.current-player');
var beerWinCount = document.querySelector('.beer-win-count');
var wineWinCount = document.querySelector('.wine-win-count');
var gameBoard = document.querySelector('.game-board');


gameBoard.addEventListener('click', takeTurn);
window.addEventListener('load', updateNumberOnWinCount);


function takeTurn() {
  currentGame.activeGame = true;
  if (event.target.innerText !== "") {
    return;
  }
  playTurn(event);
  currentGame.updateWinCount();
  currentGame.changePlayer();
  displayWinner();
};


function displayWinner() {
  if (currentGame.player1.currentWinner) {
    currentPlayerMessage.innerText = `${player1.token} won!`;
  } else if (currentGame.player2.currentWinner) {
    currentPlayerMessage.innerText = `${player2.token} won!`;
  } else {
    currentGame.checkForDraw();
  }
  setTimeout(resetGameBoard, 3000);
};


function changeMessageOnDraw() {
  currentPlayerMessage.innerText = "It's a tie!";
};


function playTurn(event) {
  if (currentGame.player1.isTurn) {
    event.target.innerHTML = `<p class="token">${player1.token}</p>`;
    player1.moves.push(event.target.id);
    currentGame.updateBoardDataForPlayer(event, player1);
    currentGame.checkWinConditions(player1);
  } else if (currentGame.player2.isTurn) {
    event.target.innerHTML = `<p class="token">${player2.token}</p>`;
    player2.moves.push(event.target.id);
    currentGame.updateBoardDataForPlayer(event, player2);
    currentGame.checkWinConditions(player2);
  }
  currentGame.turns++;
};


function updateCurrentPlayerMessage() {
  if (player1.isTurn) {
    currentPlayerMessage.innerText = `It's ${player1.token}'s turn`;
  } else if (player2.isTurn) {
    currentPlayerMessage.innerText = `It's ${player2.token}'s turn`;
  }
};


function updateNumberOnWinCount() {
  if (!currentGame.activeGame) {
    currentGame.player1.retrieveWinsFromStorage();
    beerWinCount.innerText = `${player1.wins} wins`;
    currentGame.player2.retrieveWinsFromStorage();
    wineWinCount.innerText = `${player2.wins} wins`;
  }
};


function resetGameBoard() {
  if (!currentGame.activeGame) {
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
    `;
    currentGame.resetGameAndPlayerProperties();
    currentPlayerMessage.innerText = `It's ${player1.token}'s turn`;
  }
};
