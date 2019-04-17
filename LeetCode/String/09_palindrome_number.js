Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?

var isPalindrome = function(number) {
    if (number < 0) {
    return false;
  }
  number = number.toString();
  for (let i = 0; i < number.length / 2; i++) {


    if (number[i] === number[number.length - i - 1]){
      continue;
    } else {
      return false;
    }
  }
  return true;
};

//second method imporve time complexity;

var isPalindrome = function(number) {
  let rev = 0;
  let numberCopy = number;
  while (numberCopy > 0){
    rev = (rev * 10) + numberCopy % 10;
    numberCopy = Math.floor(numberCopy/10);
  }
  if (rev === number){
    return true;
  } else {
    return false;
  }
}
