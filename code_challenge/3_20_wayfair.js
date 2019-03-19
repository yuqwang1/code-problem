function cmp(a, b) { return a - b; }

function solution(A, B) {
    var n = A.length;
    var m = B.length;
    A.sort(cmp);
    B.sort(cmp);
    var i = 0;
    for (var k = 0; k < n; k++) {
        while (i < m - 1 && B[i] < A[k])
            i += 1;
        if (A[k] == B[i])
            return A[k];
    }
    return -1;
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let moment;
    let count = 0;
    for (i = 0; i < A.length; i++) {
        moment = A.slice(0, i + 1);
        if (Math.max(...moment) === i + 1){
            count++
        }
    }
    return count;

}

function solution(array) {
  let max = array[0];
  let count = 0
  for (let i = 0; i < array.length; i++) {
    max = array[i] < max ? max : array[i]
    if (i + 1 === max) count++
  }
  return count;
}

function solution(N, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (N < 0 || K < 0) return -1;
    if (N < K) return -1;
    let final = Math.floor(factorial(N) / (factorial(K) * factorial(N - K)))
    if (final <= 1000000000) {
        return final
    } else {
        return -1
    }
}

function factorial(number){
    let result = 1;
    while (number > 0) {
        result *= number
        number--
    }
    return result;
}
