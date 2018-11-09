// 1:a, 2:b, 3:c ... 26: z
// for '' return 1
// for '0' at the start, return 0

function helper (string, k) {
  let s = string.length - k;
  if (string[s] === '0') return 0;
  if (string[s] === '') return 1;

  let result = helper(string, k - 1);
  if (k >= 2 && parseInt(string[s] + string[s + 1]) < 27) {
    return result += helper(string, k - 2);
  } else {
    return result += helper(string, k - 1);
  }
}
