219. Contains Duplicate II

Share
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

//navie approach  time complexity = n^2 space = 1
var containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j - i <= k && j < nums.length; j++){
            if (nums[i] === nums[j]){
                return true
            }
        }
    }
    return false
};
//time complexity = 0(n) space = o(n)
var containsNearbyDuplicate = function(nums, k) {
    let map = {};
    for (let i = 0; i < nums.length; i++){
      if (map[nums[i]] !== null){
        if (i - map[nums[i]] <= k) return true
      }
      map[nums[i]] = i
    }
    return false
}

//sliding window
//time complexity = 0(n) space = o(k)
var containsNearbyDuplicate = function(nums,k) {
    if (k <= 0) return false
  let set = new Set ();
  for (let i = 0; i < nums.length; i++){
    if (set.has(nums[i])) return true;
    if (i >= k) set.delete(nums[i - k])
    set.add(nums[i])
  }
  return false;
}
