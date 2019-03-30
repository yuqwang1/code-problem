290. Word Pattern

Share
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false

var wordPattern = function(pattern, str) {
    let arr = str.split(' ');
    let map = {}
    let set = new Set()
    if (pattern.length !== arr.length) return false;
    for (let i = 0; i < pattern.length; i++){
        if (map[pattern[i]]){
            if (map[pattern[i]] !== arr[i]) return false;
        } else {
            if (set.has(arr[i])) return false
            map[pattern[i]] = arr[i]
            set.add(arr[i])
        }
    }
    return true
};
