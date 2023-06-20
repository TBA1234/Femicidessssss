let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let currentPlayer = 'X';

function makeMove(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    event.target.textContent = currentPlayer;
    event.target.classList.add(currentPlayer);
    if (checkWin()) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
    } else if (checkDraw()) {
      alert("It's a draw!");
      resetGame();
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    // Check rows
    if (board[i][0] === board[i][1] && board
