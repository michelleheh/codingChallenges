/*
rotate a square matrix 90 degrees, counter-closewise
*/

function rotateMatrix(matrix) {
  let rotatedMatrix = [];
  let n = matrix.length;

  for ( let col = 0; col < n; col++) {
    rotatedMatrix[col] = [];
    for ( let row = 0; row < n; row++) {
      rotatedMatrix[col][row] = matrix[row][n - 1 - col]
    }
  }

  return rotatedMatrix
};

function rotateMatrixInPlace(matrix) {
  let n = matrix.length;
  let r = Math.ceil(n/2);
  let c = ( n % 2 === 0 ) ? r : r - 1;
  for ( let row = 0; row < r; row++) {
    for ( let col = 0; col < c; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[col][n - 1 - row];
      matrix[col][n - 1 - row] = matrix[n - 1 - row][n - 1 - col];
      matrix[n - 1 - row][n - 1 - col] = matrix[n - 1 - col][row];
      matrix[n - 1 - col][row] = temp;
    }
  }
};

/*
rotate a square matrix 90 degrees, counter-closewise
*/

module.exports = { 
  rotateMatrix,
  rotateMatrixInPlace
};