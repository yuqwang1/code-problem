334. Increasing Triplet Subsequence

Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

Return true if there exists i, j, k
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

Example 1:

Input: [1,2,3,4,5]
Output: true
Example 2:

Input: [5,4,3,2,1]
Output: false

var increasingTriplet = function(nums) {
    let num1 = Number.MAX_VALUE;
    let num2= Number.MAX_VALUE;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] < num1){
            num1 = nums[i]
        } else if (num1 < nums[i] && num2 > nums[i]){
            num2 = nums[i]
        } else if (num2 < nums[i]){
            return true;
        }
    }
    return false;
};
