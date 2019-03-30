Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"

var reverseVowels = function(s) {
  let vowels = new Set ('aeiouAEIOU')
    arr = s.split('')
    let i = 0;
    let j = s.length - 1;
    while (i < j){
        while (!vowels.has(arr[i]) && i < j){
            i++
        }

        while (!vowels.has(arr[j])&& i < j){
            j--
        }
        if (i < j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }

    }
    return arr.join('')
};
