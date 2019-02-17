Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

var isValid = function(s) {
    let i = 0;
    while (i < s.length) {
      let count1 = 0;
      let count2 = 0;
      let count3 = 0;
      if (s[i] === '('){
        count1 += 1;
      } else if (s[i] === '{'){
        count2 += 1;
      } else if (s[i] === '['){
        count3 += 1;
      } else if (s[i] === ')'){
        count1 -= 1;
      } else if (s[i] === '}'){
        count2 -= 1;
      } else if (s[i] === ']'){
        count3 -= 1;
      }
      if (count1 < 0 || count2 < 0 || count3 < 0){
        return false;
      }
    }
    return true;
}
