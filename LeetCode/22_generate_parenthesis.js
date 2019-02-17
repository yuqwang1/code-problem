var generateParenthesis = function(n) {
  let result = [];
  let dfs = function(string,open, close, n){
    if (open === n && close === n){
      return result.push(string);
    } else {
      if (open < n){
        dfs(string + '(', open + 1, close, n)
      }
      if (open > close){
        dfs(string + ')', open, close + 1, n)
      }
    }
  }
  dfs('', 0, 0, n);
  return result;
};
