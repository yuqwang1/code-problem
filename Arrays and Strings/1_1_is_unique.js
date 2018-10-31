// is unique 10/19/2018
function IsUnique (string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
}

function IsUniqueHash (string) {
  let hash = {};
  for (let i = 0; i < string.length; i++) {
    if (hash[string[i]]){
      hash[string[i]] += 1;
    } else {
      hash[string[i]] = 1;
    }
  }
  for (let key in hash) {
    if (hash[key] > 1) {
      return false;
    }
  }
  return true;
}

function IsUniqueString (string) {
  let chars = new Set();
  for (let i = 0; i < string.length; i++) {
    if(chars.has(string[i])) {
      return false;
    }
    chars.add(string[i]);
  }
  return true;
}

//solution for ASCII 128 character
// if (string.length > 128) { return false};
