function ZeroMatrix(matrix) {
  result = new Array(3);
  // can not use result = matrix, which mutate the matrix will also mutate the result.
  for(let i = 0; i < matrix.length; i++) {
    result[i] = matrix[i].slice(0);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        for (let m = 0; m < matrix.length; m++) {
          result[m][j] = 0
        }
        for (let n = 0; n < matrix[i].length; n++) {
          // console.log(n)
          result[i][n] = 0;
        }
      }
    }
  }
  return result;
}


//solution
// O(n^2)

function ZeroMatrix(matrix) {
  rows = new Array(matrix.length);
  cols = new Array(matrix[0].length);
  rows.fill(false);
  cols.fill(false);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j< matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows[j] = true;
        cols[i] = true;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rows[j] || cols[i]) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix;
}
