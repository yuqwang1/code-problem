const reverse = string => {
  let words = string.split(' ')
  let result = []
  for (let i = 0; i < words.length; i++){
    let word = reverse_word(words[i]);
    result.push(word)
  }
  return result.join(' ')
}

const reverse_word = string => {
  let length = string.length
  let result = '';
  for (let i = length - 1; i >= 0; i--){
    result = result.concat(string[i])
  }
  return result;
}
