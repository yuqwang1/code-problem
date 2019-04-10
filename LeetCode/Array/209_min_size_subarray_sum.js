209. Minimum Size Subarray Sum

Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example:

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).

var minSubArrayLen = function(s, nums) {
    if (nums.length === 0 || nums === null) return 0
    let min = Number.MAX_VALUE;
    let left = 0;
    let right = 0;
    let sum = 0;
    let length = nums.length;
    while (right < length){
        while (sum < s && right < length){
            sum += nums[right];
            right++
        }
        while (sum >= s){
          //right - left do not need +1 because right++ on the above while loop
            min = Math.min(min, right - left)
            sum -= nums[left];
            left++;
        }
    }
    return min === Number.MAX_VALUE ? 0 : min
};
