1. bug fix
function cmp(a, b) { return a - b; }

function solution(A, B) {
    var n = A.length;
    var m = B.length;
    A.sort(cmp);
    B.sort(cmp);
    var i = 0;
    for (var k = 0; k < n; k++) {
        if (i <= m - 1 && B[i] < A[k])
            i += 1;
        if (A[k] == B[i])
            return A[k];
    }
    return -1;
}

2. valley hill
const castles = (A) => {
  let sign_change = [];
  let count = 1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] < A[i + 1]) {
      sign_change.push(true)
    } else if (A[i] > A[i + 1]) {
      sign_change.push(false)
    }
  }

  for (let j = 0; j < sign_change.length; j++) {
    if (sign_change[j] !== sign_change[j + 1]) {
      count++
    }
  }
  return count;
}

3. find most appeals city

const city = (A) => {
  let appeals = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      let dist = j - i;
      let appeal = A[i] + A[j] + dist
      appeals.push(appeal)
    }
  }
  return Math.max(...appeals)
}
