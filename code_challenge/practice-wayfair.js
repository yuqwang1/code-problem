// input [[a,b],[c,d,e],[f,g]]
//output acf acg bcf bcg ..acg
function array_combination (arr) {
  if (arr.length == 1) {
    return arr[0];
  } else {
    var result = [];
    var allCasesOfRest = allPossibleCases(arr.slice(1));  // recur with the rest of array
    for (var i = 0; i < allCasesOfRest.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        result.push(arr[0][j] + allCasesOfRest[i]);
      }
    }
    return result;
  }
}

// sort the number: move the negative number before positive number
function sort_number (arr) {
  let flag = false;
  while (!flag) {
    flag = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        flag = false;
      }
    }
  }
  return arr
}
