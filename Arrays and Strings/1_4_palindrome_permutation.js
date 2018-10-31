//1.4 input: Tact Coa   Output: True (permutations: 'taco cat', 'atco cta', etc)
function palindrome_permutation (string) {
  if (string.length === 0) {
    return false;
  }

  string = string.split(' ').join('')

  let hash = {};
  for (let i = 0; i < string.length; i++) {
    if (!hash[string[i]]) {
      hash[string[i]] = 1;
    } else {
      hash[string[i]]++;
    }
  }
  let m = Object.values(hash);
  let odd_one = 0;
  console.log(m)
  if (string.length % 2 === 0) {
    for ( let j = 0; j < m.length; j++) {
      if (m[j] % 2 !== 0) {
        return false;
      }
    }
    return true;
  } else if (string.length % 2 !== 0) {
    for (let k = 0; k < m.length; k++) {
      if(odd_one > 1) {
        return false;
      } else if (m[k] % 2 !== 0){
        odd_one ++;
      }
    }
    return true;
  }
}
//solution
// Go through characters in string and set flag to indicate if there is an
//  * odd number of that character. If there is more than one character with an
//  * odd number of occurences then it cannot be a palindrome.

function isPalindromePermutationsSet(str) {
  if (!str) {
    return false;
  }

  let chars = new Set();
  for (let char of str) {
    if (char !== ' ') { // ignore spaces
      if (chars.has(char)) {
        chars.delete(char);
      }
      else {
        chars.add(char);
      }
    }
  }

  return chars.size <= 1;
}
