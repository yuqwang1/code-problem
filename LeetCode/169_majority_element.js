169. Majority Element

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

const majorityElement = (nums) => {
    let count = 1;
    let maj = nums[0];
    for (let i = 1; i < nums.length; i++){
        if (maj === nums[i]){
            count++
        } else if (count === 0){
            maj = nums[i]
            count++
        } else {
            count--
        }
    }
    return maj
}




better solution

const majorityElement = (nums) => {
  nums.sort((a,b) => a - b);
  return nums[Math.floor(nums.length / 2)]
}
