//Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

//Example 1:

//Input: "babad"
//Output: "bab"
//Note: "aba" is also a valid answer.
//Example 2:

//Input: "cbbd"
//Output: "bb"
//work but slow

O(n) time O(1) space
function longestPalindrome(s) {
    let maxSub = '';
    for (let i = 0; i < s.length; i++){
        for (let j = 0; j < 2; j++){
            let left = i;
            let right = i + j;
            while (s[left] && s[left] === s[right]){
                left--;
                right++
            }
            if ((right - left - 1) > maxSub.length){
                maxSub = s.slice(left + 1, right)
            }
        }
    }
    return maxSub
}


var longestPalindrome = function(s) {
  if (!s) return '';
  let longest = 0;
  let result = '';
  for (let i = 0; i < s.length; i++) {
    let j = 1;
    let center = s[i];
    while (s[i - j] === s[i + j]) {
      center = s[i - j] + center + s[i + j];
      j++
    }
    if (longest < center.length) {
      result = center;
      longest = center.length
    }
    if (s[i] === s[i +1]) {
      j = 1;
      center = s[i] + s[i + 1]
      while (s[i - j] === s[i + 1 + j]) {
        center = s[j - j] + center + s[i + 1 + j];
      }
    }
    if (longest < center.length) {
      result = center;
      longest = center.length
    }
  }
  return result
};
// dynamic approach
function longestPalindrome(s) {
  let longest = '';
  let longestLength = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < i + 2; j++) {
      let left = i;
      let right = j;
      while (s[left] && s[left] === s[right]) {
        //not good create many space complexity
        let substring = s.slice(left, right + 1)
        if (substring.length > longestLength) {
          longest = substring;
          longestLength = substring.length
        }
        left--;
        right++;
      }
    }
  }
  return longest;
}
