Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

var fourSum = function(nums, target) {
    if (nums.length === 0) return [];
    for(let i = 0; i < nums.length; i++){
      let sumThree = target - nums[i];
      for (let j = I + 1; j < nums.length; j++){
        let sumTwo = sumThree - nums[j]
      }
    }
};
