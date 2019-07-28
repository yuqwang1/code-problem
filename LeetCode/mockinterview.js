
// time complexity n*m
const test (matrix, target){
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0;j < matrix[i].length; j++){
      if (matrix[i][j] === target){
        return [i,j];
      }
    }
  }
  return [-1,-1];
}

// i 0 j 0  num 1  15
// i 0 j 1 num 2   15
// i 0 j 2 num 10   15
// i 0 j 3
// i 1  j 0 num 11 15
// i 1 j 1 num 15   15 return [1, 1]

// 10 < 21
// 17 < 21
// 30 > 29
// n + m

[[1,2,10],
[11,15,17],
[19, 20 ,21,22,23,24,26,29,30]
] 29
const test2 (matrix, target){
  for (let i = 0; i < matrix.length; i++){
    let lastnumber = matrix[i].length - 1;
    if (matrix[i][lastnumber] === target){
      return [i, lastnumber]
    } else if (matrix[i][lastnumber] < target){
      continue;
    } else {
      while (matrix[i][lastnumber] !== target && lastnumber >= 0){
        lastnumber -= 1;
      }
      if (lastnumber < 0){
        return [-1,-1]
      } else {
        return [i, lastnumber];
      }
    }
  }
}

[[1,2,3],
[4,5,6],
[7,8,9]
]
target 5

// i = 0;
// i = 0 lastnumber = 2  10; target = 29  29 > 10
// i = 1;
// lastnumber = 2 17; target 29 29 > 17 ;
// i = 2 ;
// j = 8    29 < 30 ;
// 7  29 === 29  [2,7];  i = 3 m = 2  i + j  n + m
