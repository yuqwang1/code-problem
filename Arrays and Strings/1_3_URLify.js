function URLify (string, valid_length) {
  let array_urlify = string.split('');
  // console.log(array_urlify[5])
  let result = [];
  for(let i = 0; i < valid_length; i++){
    console.log(array_urlify[i])
    if(array_urlify[i] === ' '){
      result.push('%20')
    } else {
      result.push(array_urlify[i])
    }
  }

  return result.join('');
}
