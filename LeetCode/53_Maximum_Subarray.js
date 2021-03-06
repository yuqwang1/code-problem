//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

//Example:

//Input: [-2,1,-3,4,-1,2,1,-5,4],
//Output: 6
//Explanation: [4,-1,2,1] has the largest sum = 6.
var maxSubArray = function(nums) {
    let sum = nums[0];
    let temp = nums[0];
    for (let i = 1; i < nums.length; i++) {
        temp = temp < 0 ? nums[i] : temp + nums[i]
        sum = temp > sum ? temp : sum
    }
    return sum
};


// anthoer method
let maxSubArray = function(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i])
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }
  return maxSoFar;
}
