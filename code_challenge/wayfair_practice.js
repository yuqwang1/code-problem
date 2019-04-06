Input : arr[] = {1, -1, 3, 2, -7, -5, 11, 6 }
Output : 1  3  2  11  6  -1  -7  -5

Input : arr[] = {-5, 7, -3, -4, 9, 10, -1, 11}
Output : 7  9  10  11  -5  -3  -4  -1


const sort = (arr) => {
  let arrPositive = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      arrPositive.push(arr.pop(i + 1))
    }
  }
  return arr.concat(arrPositive)
}
