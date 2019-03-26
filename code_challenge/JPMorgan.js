[-5,-1,4,3,2,2,1] return -1

const secondSmallest = (array) => {
  let first = Math.MAX_VALUE;
  let second = Math.MAX_VALUE;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < first){
      second = first;
      first = array[i]
    } else if  (array[i] < second && array[i] != first) {
      second = array[i]
    }
  }
  return second;
}

const secondSmall = (array) => {
  let set = new Set (array)
  let first = Math.min(...array)
  set.delete(first)
  return Math.min(...Array.from(set))
}

larget integer
['9', '32', '88', '6'] return '988632'

var largestNumber = function(nums) {
    nums.sort(comparator);

    return nums = nums[0] === 0 ? '0' :nums.join('')
};

var comparator = function(a, b) {
    const s1 = "" + a + b,
        s2 = "" + b + a;
    return s2 - s1;
};

const largestInteger = (array) => {
  let flag = false
  while (!flag){
    flag = true
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]){
        let temp = array[i]
        array[i] = array[i+1]
        array[i + 1] = temp
        flag = false
      }
    }
  }
  return array.join('')
}
