/*
write an algorithm such that if an element in an MxN matrix is 0, the entire row and column are set to 0
*/

function setToZero(matrix) {

  let indices = {
    rows: {},
    cols: {}
  };
  matrix.forEach((row, rowIndex) =>{
    row.forEach((col, colIndex) => {
      if ( col === 0 ) {
        indices.rows[rowIndex] = true;
        indices.cols[colIndex] = true;
      }
    });
  });

  matrix.forEach((row, rowIndex) =>{
    row.forEach((col, colIndex) => {
      if ( indices.rows[rowIndex] || indices.cols[colIndex] ) {
        matrix[rowIndex][colIndex] = 0;
      }
    });
  });
  
  return matrix;
};

module.exports = setToZero;