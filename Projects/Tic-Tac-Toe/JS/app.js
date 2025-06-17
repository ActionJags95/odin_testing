function Cell() {
  let value = "";

  const markCellValue = (playerVal) => {
    value = playerVal;
  };
  const getCellValue = () => value;

  return { markCellValue, getCellValue };
}


function GameBoard() {
  const numRows = 3;
  const numCols = 3;

  const board = [];
  for (let i = 0; i < numRows; i++) {
    board[i] = [];
    for (let j = 0; j < numCols; j++) {
      board[i].push(Cell());
    }
  }

  const markBoard = (playerVal, row, col) => {
    if (!board[row][col].getCellValue()) {
      board[row][col].markCellValue(playerVal);
      return true;
    } else {
      return false;
    }
  };

  const printBoard = () => {
    let boardMatrix = [];

    for (let i = 0; i < numRows; i++) {
      boardMatrix[i] = [];
      for (let j = 0; j < numCols; j++) {
        boardMatrix[i].push(board[i][j].getCellValue());
      }
    }
    return boardMatrix;
  };

  const getBoard = () => board;
  const getRows = () => numRows;
  const getCols = () => numCols;

  return { markBoard, printBoard, getBoard, getRows, getCols };
}


function Player(name, val) {
  const playerName = name;
  const playerVal = val;
  let score = 0;

  const getScore = () => score;
  const incScore = () => {
    score++;
  };

  return { playerName, playerVal, getScore, incScore };
}


function BoardController(player1Name = "Player-1", player2Name = "Player-2") {
  const player1 = Player(player1Name, "X");
  const player2 = Player(player2Name, "O");

  const round = 0;
  let moves = 0;
  const incRound = () => {round++;}
  const getRound = () => round;

  const board = GameBoard();

  let winner = null;
  const getWinner = () => winner;

  let currentPlayer = player1;
  const getCurrPlayer = () => currentPlayer;

  const changeTurn = () => {
    currentPlayer = (currentPlayer === player1) ? player2 : player1;
  }

  // TODO: Finalize all the functions, parameters and their flow 
  const checkBoard = (row, col) => {
    
    // Row checking
    for(let i=0;i<row;i++) {
      for(let j=0;j<col;j++) {
        if(boardMatrix[i][j] != currentPlayer.playerVal()) break;
      }
      
    }
  }
  
}

// BoardController();
// TODO: Finalize the flow of the operations for this project


function ScreenController(data) {
  const {numRounds, player1, player2} = data;
  
  
  console.log(data);
  
}

function GetData() {
  const roundNumIn = document.querySelector('#numRounds');
  const player1In = document.querySelector('#player1');
  const player2In = document.querySelector('#player2');

  const numRounds = roundNumIn.value;
  const player1 = player1In.value;
  const player2 = player2In.value;

  roundNumIn.value = '';
  player1In.value = '';
  player2In.value = '';
  data = {numRounds, player1, player2};

  return data;
}

// Gets Submit button
const submitBtn = document.querySelector('#submit');

// Game start when user clicks on submit button.
submitBtn.addEventListener('click', () => {
  let data = null;
  data = GetData();
  
  // Feed ScreenController with data obtained from DOM.
  ScreenController(data);
})

const board = document.querySelector('#board');
// console.log(board);
board.addEventListener('click', () => {
  targetRow = event.target.closest('tr');
  targetCol = event.target.closest('td');

  const rows = Array.from(board.rows);
  let rowIndex = rows.indexOf(targetRow);

  console.log(rowIndex);
  
  console.log(rows[rowIndex].cells);

  const colIndex = Array.from(rows[rowIndex].cells).indexOf(targetCol);
  console.log(colIndex);

  // console.log(rowIndex, colIndex);
})