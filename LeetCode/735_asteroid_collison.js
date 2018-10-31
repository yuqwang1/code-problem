// Example 1:
// Input:
// asteroids = [5, 10, -5]
// Output: [5, 10]
// Explanation:
// The 10 and -5 collide resulting in 10.  The 5 and 10 never collide.
// Example 2:
// Input:
// asteroids = [8, -8]
// Output: []
// Explanation:
// The 8 and -8 collide exploding each other.
// Example 3:
// Input:
// asteroids = [10, 2, -5]
// Output: [10]
// Explanation:
// The 2 and -5 collide resulting in -5.  The 10 and -5 collide resulting in 10.
// Example 4:
// Input:
// asteroids = [-2, -1, 1, 2]
// Output: [-2, -1, 1, 2]
// Explanation:
// The -2 and -1 are moving left, while the 1 and 2 are moving right.
// Asteroids moving the same direction never meet, so no asteroids will meet each other.

var asteroidCollision = function(asteroids) {
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
      let addToStack = true;

      while(stack.length > 0 && asteroids[i] < 0 && stack[stack.length - 1] > 0) {
          if (Math.abs(asteroids[i]) > stack[stack.length - 1]){
              stack.pop();
              continue;
          }
          else if(Math.abs(asteroids[i]) === stack[stack.length - 1]) {
              stack.pop();
              addToStack = false;
              break;
          }
          else{
              addToStack = false;
              break;
          }
      }
      if(addToStack) {
       stack.push(asteroids[i]);
      }
  }

  return stack;
};
