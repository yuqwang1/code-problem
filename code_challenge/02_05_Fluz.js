Given a sorted integer array, return sum of array so that each element is unique by adding some numbers to duplicate elements so that sum of unique elements is minimum.

I.e., if all elements in the array are unique, return the sum. If some elements are duplicates, then increment them to make sure all elements are unique so that the sum of these unique elements is minimum.

Some examples:

input1[] = { 2, 3, 4, 5 } => return 19 = 2+3+4+5 (all elements are unique, so just add them up)
input2[] = { 1, 2, 2 } => return 6 = 1+2+3 (index 2 is duplicate, so increment it)
input3[] = { 2, 2, 4, 5 } => return 14 = 2+3+4+5 (index 1 is duplicate, so increment it)

function getMinUniqSum(arr){
  let sum = 0;
  let arr1 = [];
  arr1.push(arr[0]);
  for (var i = 0; i < arr.length; i++) {
    let curr = arr[i];
    while (arr1.includes(val)){
      val++;
    }
    arr1.push(val);
  }

  for (let i = 0; i < arr1.length; i++){
    sum += arr1[i];
  }
}
