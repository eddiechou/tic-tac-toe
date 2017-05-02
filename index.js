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

    var legalMove = false;
    do {
      var move = parseInt(prompt(`Player ${playerTurn}, choose your move: `));
      legalMove = checkLegalMove(move);
      if (!legalMove) {
        console.log('Illegal move!');
      }
    } while (!legalMove);

    // Make the move and redisplay the board
    if (move >= 0 && move <= 2) {
      board[0][move] = playerTurn;
    } else if (move <= 5) {
      board[1][move - 3] = playerTurn;
    } else if (move <= 8) {
      board[2][move - 6] = playerTurn;
    }

    if (checkWin()) {
      gameInProgress = false;
      printBoard();
      console.log(`Player ${playerTurn} wins!!`);
      return;
    } else if (checkOver()) {
      gameInProgress = false;
      console.log(`Game over, no winner.`);
      return;
    }
    // Switch turns
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  }
}

function checkWin() {
  // Check rows
  for (var row = 0; row < 3; row++) {
    if(checkRow(row)) {
      return true;
    }
  }
  // Check cols
  for (var col = 0; col < 3; col++) {
    if(checkCol(col)) {
      return true;
    }
  }
  // Check diagonals
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1] !== ' ') {
    return true;
  }

  if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1] !== ' ') {
    return true;
  }

  return false;
}

function checkRow(row) {
  if (board[row][1] === board[row][2] && board[row][2] === board[row][3] && board[row][1] !== ' ') {
    return true;
  }
  return false;
}

function checkCol(col) {
  if (board[0][col] === board[1][col] && board[1][col] === board[2][col] && board[2][col] !== ' ') {
    return true;
  }
  return false;
}

function checkOver() {
  if (board[0][0] !== ' ' && board[0][1] !== ' ' && board[0][2] !== ' ' && 
      board[1][0] !== ' ' && board[1][1] !== ' ' && board[1][2] !== ' ' &&
      board[2][0] !== ' ' && board[2][1] !== ' ' && board[2][2] !== ' ') {
    return true;
  }
  return false;
}

function checkLegalMove(move) {
  if (move < 0 || move > 8) {
    return false;
  }

  if (move >= 0 && move <= 2) {
    return board[0][move] === ' ';
  } else if (move <= 5) {
    return board[1][move - 3] === ' ';
  } else if (move <= 8) {
    return board[2][move - 6] === ' ';
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