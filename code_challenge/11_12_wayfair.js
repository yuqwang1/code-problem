//Give an array of bulb, number 1 to N, at Kth moment, turn on the Kth bulb,
//return how many moment all the bulb are shine.
//ex. bulb 1,2,3,4,5
//[5,1,2,3,4] return 1
//[3,1,2,4,5] return 3
//[3,2,1,5,4] return 2

function bulbMoment(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let j = i + 1;
    let set = new Set(array.slice(0, j))
    while (j !== 0) {
      if (set.has(j)) {
        j--;
      } else {
        break
      }
    }
    if (j === 0) {
      count++;
    }
  }
  return count;
}

//Given a number of binary representation, if the number is even, divide by two,
// if odd, minus 1, until the number reach 0. count the steps
// ex '011100' number = 28, so the result return 7
function Step(string) {
  let count = 0;
  let num = parseInt(string,2);
  if (num === 0) return 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2
    } else {
      num = num - 1
    }
    count++
  }
  return count;
}
