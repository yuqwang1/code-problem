Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.

var letterCombinations = function(digits) {
    const MAP = {2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'};
    if (digits.length === 0) {return []};
    let result = [];
    let combinations = function(currComb){
      if (currComb.length === digits.length) {
        result.push(currComb);
      } else {
        let index = currComb.length;
        let letters = MAP[digits[index]];
        for (letter of letters){
          currComb += letter;
          combinations(currComb);
          currComb = currComb.slice(0, currComb.length - 1);
        }
      }
    }
    combinations('');
    return result;
};
