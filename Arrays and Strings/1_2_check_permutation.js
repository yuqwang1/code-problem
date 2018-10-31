// permutation each other, must be the same length
// case sensitive and whitespace count
function IsPermutation (string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  string1 = string1.split('').sort().join('');
  string2 = string2.split('').sort().join('');
  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
}
