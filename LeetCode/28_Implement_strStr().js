28. Implement strStr()

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
//corner condition ("","a") return -1  ("","")return 0;
var strStr = function(haystack, needle) {
    if (!haystack && needle) return -1;
    if (!haystack && !needle) return 0;
    let k = needle.length;
    let t = '';
    for (let i = 0; i < haystack.length; i++){
        t = haystack.slice(i, i + k);
        if (needle === t){
            return i;
        }
    }
    return -1
};
