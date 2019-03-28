Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]


const solution = (numRows) => {
  if (numRows <= 0) return []
  let result = [];
  for (let i = 0; i < numRows; i++){
    result.push([])
  }
  for (let i = 0; i < numRows; i++){
    result[i][0] = result[i][i] = 1
  }

  for (let i = 2; i < numRows; i++){
    for (let j = 1; j < i; j++){
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j]
    }
  }
  return result
}
