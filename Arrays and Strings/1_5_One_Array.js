function one_array (string1, string2) {
  if (string1 === string2) {
     return true;
  }
  let chars = new Set();
  let difference = 0;
  if (string1.length === string2.length) {
    for (let i = 0; i < string1.length; i++){
      if (difference > 1) {
        return false;
      } else if (string1[i] !== string2[i]){
        difference++;
      }
    }
    return true;
  }

  if (string1.length > string2.length && string1.length - string2.length === 1) {
    for (let j = 0; j < string1.length; j++) {
      let string3 = string1.slice(0, j).concat(string1.slice(j + 1, string1.length));
      if (string3 === string2) {
        return true;
      }
    }
    return false;
  } else if (string2.length > string1.length && string2.length - string1.length === 1) {
    for (let k = 0; k < string2.length; k++) {
    let string4 = string2.slice(0, k).concat(string2.slice(k + 1, string2.length));
    if (string4 === string1) {
      return true;
      }
    }
    return false
  } else {
    return false;
  }
}
// solution
function One_Array(string1, string2) {
  if (Math.abs(string1.length - string2.length > 1)) {
    return false;
  }
  let editable = false
  for (let i = 0, j = 0; i < string1.length && j < string2.length; i++, j++) {
    if (string1[i] !== string2[j]) {
      if (editable) {
        return false
      }

      if (string1.length > string2.length) {
        j--;
      } else if (string2.length > string1.length) {
        i--;
      }
      editable = true
    }
  }
}
