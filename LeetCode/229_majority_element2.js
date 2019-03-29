229. Majority Element II
Medium

753

92

Favorite

Share
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]
Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]

var majorityElement = function(nums) {
    if (nums.length < 2) return nums
    let result = []
    let num1 = 0;
    let num2 = 0;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < nums.length; i++){
        if (num1 === nums[i]){
            count1++
        } else if (num2 === nums[i]){
            count2++
        } else if (count1 === 0){
            num1 = nums[i];
            count1 = 1
        } else if (count2 === 0){
            num2 = nums[i];
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }
    count1 = 0;
    count2 = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === num1){
            count1++
        } else if (nums[i] === num2){
            count2++
        }
    }
    if (count1 > Math.floor(nums.length/3)) result.push(num1)
    if (count2 > Math.floor(nums.length/3)) result.push(num2)
    return result
};
