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


function BoardController(player1Name, player2Name, numRounds) {
  const player1 = Player(player1Name, "X");
  const player2 = Player(player2Name, "O");

  let round = 1;
  let moves = 1;
  const incRound = () => {
    round++;
  };
  const incMoves = () => {
    moves++;
  };
  const getRound = () => round;
  const getMoves = () => moves;

  const board = GameBoard();

  let winner = null;
  const getWinner = () => winner;

  let currentPlayer = player1;
  const getCurrPlayer = () => currentPlayer;

  const changeTurn = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  // TODO: Finalize all the functions, parameters and their flow
  const checkBoard = (row, col) => {
    const boardArea = board.printBoard();

    // Checking rows
    const checkRows = () => {
      for (let j = 0; j < 3; j++) {
        if (boardArea[row][j] != currentPlayer.playerVal) return false;
      }

      return true;
    };

    // Checking columns
    const checkCols = () => {
      for (let i = 0; i < 3; i++) {
        if (boardArea[i][col] != currentPlayer.playerVal) return false;
      }

      return true;
    };

    const checkDiags1 = () => {
      let i = 0,
        j = 0;
      while (i < 3 && j < 3) {
        if (boardArea[i][j] != currentPlayer.playerVal) return false;
        i++;
        j++;
      }

      return true;
    };

    const checkDiags2 = () => {
      let i = 2;
      j = 0;
      while (i >= 0 && j < 3) {
        if (boardArea[i][j] != currentPlayer.playerVal) return false;
        i--;
        j++;
      }

      return true;
    };
    return checkRows() || checkCols() || checkDiags1() || checkDiags2();
  };

  const roundFn = (row, col) => {
    const status = board.markBoard(currentPlayer.playerVal, row, col);
    if (status) {
      if (checkBoard(row, col)) {
        currentPlayer.incScore();
        console.log(currentPlayer.getScore());
        alert(`${currentPlayer.playerName} has won Round-${getRound()}`);
      } else {
        if (getMoves() == 9) alert("Draw Round");
      }

      incMoves();
      changeTurn();
    } else {
      alert("Already marked this cell, mark other cell");
    }

    // console.log(board.printBoard());
  };

  return { getWinner, getCurrPlayer, roundFn , player1, player2 };
}

function ScreenController(data) {
  const { numRounds, player1, player2 } = data;
  console.log(data);

  document.getElementById("name-1").textContent += player1;
  document.getElementById("name-2").textContent += player2;

  // Initializing the board with the players and their values
  const boardcontroller = BoardController(player1, player2);

  document.getElementById("score-1").textContent = `${boardcontroller.player1.playerName}: ${boardcontroller.player1.getScore()}`
  document.getElementById("score-2").textContent = `${boardcontroller.player2.playerName}: ${boardcontroller.player2.getScore()}`
  
  const board = document.querySelector("#board");
  board.addEventListener("click", (event) => {
    let currentPlayer = boardcontroller.getCurrPlayer();
    const { rowIndex, colIndex } = getBoardCords(event);
    
    const boardRow = Array.from(board.rows).at(rowIndex);
    const boardElem = Array.from(boardRow.cells).at(colIndex);
    boardElem.textContent = currentPlayer.playerVal;
    
    boardcontroller.roundFn(rowIndex, colIndex);

    document.getElementById("score-1").textContent = `${boardcontroller.player1.playerName}: ${boardcontroller.player1.getScore()}`
    document.getElementById("score-2").textContent = `${boardcontroller.player2.playerName}: ${boardcontroller.player2.getScore()}`
  });
}

function GetData() {
  const roundNumIn = document.querySelector("#numRounds");
  const player1In = document.querySelector("#player1");
  const player2In = document.querySelector("#player2");

  const numRounds = roundNumIn.value;
  const player1 = player1In.value;
  const player2 = player2In.value;

  roundNumIn.value = "";
  player1In.value = "";
  player2In.value = "";
  data = { numRounds, player1, player2 };

  return data;
}


function getBoardCords(event) {
  let targetRow = event.target.closest("tr");
  let targetCol = event.target.closest("td");

  // Getting the row number
  const rows = Array.from(board.rows);
  const rowIndex = rows.indexOf(targetRow);

  //Getting the column number
  const colIndex = Array.from(rows[rowIndex].cells).indexOf(targetCol);

  return { rowIndex, colIndex };
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