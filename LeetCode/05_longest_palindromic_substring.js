//Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

//Example 1:

//Input: "babad"
//Output: "bab"
//Note: "aba" is also a valid answer.
//Example 2:

//Input: "cbbd"
//Output: "bb"
//work but slow
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
