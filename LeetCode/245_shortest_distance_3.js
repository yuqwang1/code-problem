This is a follow up of Shortest Word Distance. The only difference is now word1 could be the same as word2.

Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

word1 and word2 may be the same and they represent two individual words in the list.

For example,
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Given word1 = “makes”, word2 = “coding”, return 1.
Given word1 = "makes", word2 = "makes", return 3.

Note:
You may assume word1 and word2 are both in the list.


const shortDistance = (words,word1, word2) => {
    let res = Number.MAX_VALUE
    if (word1 === word2){
      let index = -1;
      for (let i = 0; i < words.length; i++){
         if (word1 === words[i] && index !== -1) {
          res = Math.min(res, i - index)
          index = i
        } else if (word1 === words[i] && index === -1){
          index = i
        }
      }
      return res
    } else {
      let index1 = -1;
      let index2 = -1;
      for (let i = 0; i < words.length; i++){
        if (word1 === words[i]){
          index1 = i
        } else if (word2 === words[i]){
          index2 = i
        } else if (word1 !== -1 && word2 !== -1){
          res = Math.min(res, Math.abs(index1 - index2))
        }
      }
      return res
    }
}
