const longestNoneRepeat = (s) => {
  let set = new Set();
  let result = 0;
  for (let i = 0, j = 0; i < s.length; i++){
    if (set.has(s[i])){
      set.delete(s[j])
      j++
    } else {
      set.add(s[i]);
      result = Math.max(result, set.size)
    }
  }
  return result
}
