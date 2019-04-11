152. Maximum Product Subarray

Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

var maxProduct = function(nums) {
    let max = 1;
    let min = 1;
    let res = - Number.MAX_VALUE;
    for (let num of nums){
        [min,max] = [
            Math.min(num, num * min, num * max),
            Math.max(num, num * max, num * min)
        ]
        res = Math.max(res,max)
    }
    return res
};
