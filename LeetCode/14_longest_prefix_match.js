14. Longest Common Prefix
Easy

1088

1131

Favorite

Share
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
  let n = strs.length;
  let result = '';

  for (let i = 0; i < n; i++) {
    if (strs[i][j] == strs[i + 1][j]){
      continue;
    } else {
      return result;
    }
    j++;
  }
};
