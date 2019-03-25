1. Array of Integer, find the lists of duplicate integer
  const duplicate = (array) => {
    let result = new Set();
    array.sort((a,b) => a - b)
    for (let i = 0; i < array.length; i++) {
      if (array[i] === array[i + 1]){
        result.add(array[i])
      }
    }
    return Array.from(result)
  }
2. Anagram
const anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let arr1 = str1.split('').sort();
  let arr2 = str2.split('').sort();
  console.log(arr2)
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}
3. SQL
