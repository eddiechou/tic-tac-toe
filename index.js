var prompt = require('prompt-sync')();

var board;
var playerTurn = 'X';
gameStart();

function gameStart() {
  initBoard();
  console.log('Welcome to Tic-Tac-Toe!')
  console.log('Moves are made as numbers:');
  console.log(' 0 | 1 | 2');
  console.log(' ---------');
  console.log(' 3 | 4 | 5');
  console.log(' ---------');
  console.log(' 6 | 7 | 8');
  console.log(' ---------');
  var gameInProgress = true;
  
  while(gameInProgress) {
    // Display the board
    printBoard();
    // prompt for move with player

    var move = parseInt(prompt(`Player ${playerTurn}, choose your move: `));
    // Make the move and redisplay the board

    if (move >= 0 && move <= 2) {
      board[0][move] = playerTurn;
    } else if (move <= 5) {
      board[1][move - 3] = playerTurn;
    } else if (move <= 8) {
      board[2][move - 6] = playerTurn;
    } else {
      console.log("ILLEGAL MOVE!!");
    }
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