function StringCompression (string) {
  let count = 1;
  let result = '';
  for (let i = 0; i < string.length ; i++) {
    if (string[i] === string[i + 1]) {
      count++
    } else if (string[i] !== string[i + 1] && count === 1) {
      result = result.concat(string[i]);
    } else if (string[i] !== string[i + 1] && count !== 1) {
      // result.concat(string[i]) did not change the origin string;
      result = result.concat(count);
      result = result.concat(string[i]);
      count = 1;
    }
  }
  if (result.length === string.length) {
    return string;
  } else {
    return result;
  }
}
