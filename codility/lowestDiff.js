A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7
P = 2, difference = |4 − 9| = 5
P = 3, difference = |6 − 7| = 1
P = 4, difference = |10 − 3| = 7
Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].

23%
// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     if (A.length < 2) return A;
//     let min = 0;
//     let lowest = A.slice(0, A.length).reduce((acc, int) => acc + int)
//     for (let i = 1; i <A.length; i++) {
//         let sum1 = A.slice(0, i).reduce((acc, int) => acc + int);
//         let sum2 = A.slice(i, A.length).reduce((acc, int) => acc + int);
//         min = Math.abs(sum1 - sum2);
//         if (lowest > min){
//             lowest = min
//         }
//     }
//     return lowest;
// }
//
84%
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    for (A.length < 2) return A;
    let left_sum = 0;
    let right_sum = A.reduce((acc,int) => acc + int);
    let lowest = Number.MAX_VALUE;

    for (let i = 0; i < A.length; i++) {
        left_sum += A[i];
        right_sum -= A[i];
        let sub = Math.abs(right_sum - left_sum);
        if (lowest > sub){
            lowest = sub;
        }
    }
    return lowest
}

100%

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let i, ll = A.length, tot = 0, upto = 0, min = Number.MAX_VALUE;

    for (i=0; i<ll; i++) tot += A[i];

    for (i=0; i<ll-1; i++) {
        upto += A[i];
        var a1 = upto, a2 = tot - a1, dif = Math.abs(a1 - a2);
        if (dif < min)
         min = dif;
    }
    return min;
}
