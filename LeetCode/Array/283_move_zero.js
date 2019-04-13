283. Move Zeroes
Easy

1890

70

Favorite

Share
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.


var moveZeroes = function(nums) {
    for (let i = 0, j = 0; i < nums.length; i++){
        if (nums[i] !== 0){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++
        }
    }
    return nums
};
