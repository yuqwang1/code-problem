//Wally the robot lives at point (0, 0) on an infinite grid. Today he is going for a walk. He already knows exactly what route he is going to take (it was programmed into him). His route consists of a long sequence of three possible commands:

//move N steps forward
turn 90 degrees to the left
turn 90 degrees to the right
Wally always starts his walks facing North.

Some of the grid squares are obstacles; if Wally would try to move on to them, he stays on the previous grid square instead (but he'll keep following the rest of his route).

Given the list of obstacles and the walk Wally plans to follow, figure out the maximum distance Wally will travel from his home.

Input
The first line of the input file will contain two space-separated integers: the number of obstacles and the number of commands in Wally's route, respectively.

The next [number_of_obstacles] lines will contain two space-separated integers representing the X and Y coordinates of an obstacle, respectively (positive X is east, positive Y is north).

The next [number_of_commands] lines will contain one command for Wally, which is one of:

"L" - turn left 90 degrees
"R" - turn right 90 degrees
"M n" - move n steps forward
Output
Output a single floating point number rounded to two decimal places, the maximum (Euclidean) distance Wally will get from his starting position.
Limits
1 <= number of obstacles <= 10
1 <= number of commands <= 10,000
1 <= number of steps forward in a single command <= 10
-100,000 <= X or Y coordinate of obstacle <= 100,000
Sample Input
    1 8
    0 2
    M 5
    R
    M 1
    L
    M 3
    L
    L
    M 3

//Sample Output
//4.12
//Sample Description
//Wally tries to walk 5 squares north, but there's an obstacle, so he can only move one square. Then he turns right and walks one square east. Then he turns left and walks three squares north. Then he turns around and walks 3 squares south, ending at (1, 1). The maximum distance he ever got from (0, 0) was when he was at (1, 4), roughly 4.12 units away.
//Please submit the correct answer for the longer input file below




const Direction = [[-1,0],[0,1],[1,0],[0,-1]]

function max_direction(obstacle,command){
  let i = 1;
  let init_d = Direction[i];
  let origin = [0,0];
  let max = 0;
  let d = 0;
  for (let j = 0; j < command.length; j++) {
    let k = parseInt(command[j]);
    if (command[j] === 'L') {
      if (i - 1 < 0) {
        i = 4;
      }
      init_d = Direction[i - 1];
      i = i -1;
    } else if (command[j] === 'R') {
      if (i + 1 > 3) {
        i = -1;
      }
      init_d = Direction[i + 1];
      i = i + 1;
    } else if (k){
      if (k === 1 && parseInt(command[j + 1] === 0)){
        k = 10;
      }
      while (k !== 0) {
        //important, otherwise origin mutate each times when possible_move mutate
        let possible_move = origin.slice();
        let blocked = false;
        possible_move[0] = possible_move[0] + init_d[0] * 1;

        possible_move[1] = possible_move[1] + init_d[1] * 1;
        for (let m = 0; m < obstacle.length; m++){
          if (obstacle[m][0] === possible_move[0] && obstacle[m][1] === possible_move[1]){
            // console.log(obstacle[m])
            blocked = true;
            k = 0;
            break;
            // console.log(origin)


          }
        }
        if (!blocked){
          origin = possible_move;
          // console.log(origin)
          k--;
        }
      }

    // console.log(origin)
      d = Math.sqrt(origin[0] * origin[0] + origin[1] * origin[1]);
      if (max < d) {
        max = d
      }
    }
  }
  return max.toFixed(2);
}
