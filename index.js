var prompt = require('prompt-sync')();

var board;

gameStart();

function gameStart() {
  initBoard();
  console.log('Welcome to Tic-Tac-Toe!')
  console.log('Moves are made as numbers:');
  console.log(' 1 | 2 | 3');
  console.log(' ---------');
  console.log(' 4 | 5 | 6');
  console.log(' ---------');
  console.log(' 7 | 8 | 9');
  console.log(' ---------');
  var gameInProgress = true;
  
  while(gameInProgress) {
    // Display the board

    // prompt for move
    promptForMove();
    // Make the move and redisplay the board

    // If win, 
    // gameInProgress = false;
  }
}

function initBoard() {
  // 0 = nothing, 1 = 'X', -1 = 'O'
  board = [[0,0,0],[0,0,0],[0,0,0]];
}

function promptForMove() {
  // Prompt with whose turn it is


  var schema = {
      properties: {
        move: {
          required: true
        }
      }
    };
  var move = prompt('Choose your move:');
  console.log('selected move: ', move);
}

 
  // 
  // Get two properties from the user: username and email 
  // 
  