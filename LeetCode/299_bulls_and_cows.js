function getHint(secret, guess) {
  let map = {}
  let A = 0;
  let B = 0;
  for (let i = 0; i < 10; i++) map[i] = 0;
  for (let i = 0; i < secret.length; i++){
    if (secret[i] === guess[i]){
      A++
    } else {
      map[secret[i]]++;
      if (map[secret[i]] <= 0){
        B++
      }
      map[guess[i]]--;
      if (map[guess[i]] >= 0){
        B++
      }
    }
  }
  return A + 'A' + B + 'B'
}
