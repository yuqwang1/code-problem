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
    let result = [];
    for(let i = 0; i < nums.length; i++){
      let sumThree = target - nums[i];
      for (let j = i + 1; j < nums.length; j++){
        let sumTwo = sumThree - nums[j];
        let front = j + 1;
        let back = nums.length - 1;
        while (front < back){
          let fbSum = nums[front] + nums[back];
          if (sumTwo > fbSum){
            back--;
          } else if (sumTwo < fbSum){
            front++;
          }else {
            let sum = [nums[i],nums[j],nums[front],nums[back]];
            result.push(sum);
            while(front < back && nums[front] === sum[2]){
              front++;
            }
            while (front < back && nums[back] === sum[3]){
              back--
            }
          }
        }
        while (nums[j] === nums[j+1]) j++;
      }
      while (nums[i] === nums[i+1]) i++;
    }
    return result;
};
