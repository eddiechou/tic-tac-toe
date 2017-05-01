var prompt = require('prompt-sync')();

var board;
var playerTurn = 'X';
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
    printBoard();
    // prompt for move with player

    var move = prompt(`Player ${playerTurn}, choose your move: `);
    // Make the move and redisplay the board

    // If win, 
    // gameInProgress = false;

    // Switch turns
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  }
}

function initBoard() {
  // 0 = nothing, 1 = 'X', -1 = 'O'
  board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
}

function printBoard() {
  // For each row
  console.log('Current board: ');
  for (var i = 0; i < board.length; i++) {
    // For each column
    for (var j = 0; j < board.length; j++) {
      process.stdout.write(board[i][j]);
      if (j < board.length - 1) {
        process.stdout.write(" | ");
      }
    }
    console.log('');
    if (i < board.length - 1) {
      console.log('---------');
    }
  }
}