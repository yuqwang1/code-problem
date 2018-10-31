function StringRotation (string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  string1 = string1.concat(string1);
  return isSubString(string1, string2);
}

function isSubString(string1, string2) {
  return string1.includes(string2);
}
