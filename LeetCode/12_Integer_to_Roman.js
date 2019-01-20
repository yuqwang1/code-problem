12. Integer to Roman
Medium

443

1535

Favorite

Share
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
Example 2:

Input: 4
Output: "IV"
Example 3:

Input: 9
Output: "IX"
Example 4:

Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

function Integer_to_Roman(number){
  let result = '';
  while (number > 0){
    if (number >= 1000){
      result += 'M';
      number -= 1000;
    } else if (number >= 500 ) {
      result += 'D';
      number -= 500;
    } else if (number >= 100) {
      result += 'C';
      number -= 100;
    } else if (number >= 50) {
      result += 'L';
      number -= 50;
    } else if (number >= 10) {
      result += 'X';
      number -= 10;
    } else if (number >= 5) {
      result += 'V';
      number -= 5;
    } else if (number >= 1) {
      result += 'I';
      number -= 1;
    }
  }
  return result;
}
