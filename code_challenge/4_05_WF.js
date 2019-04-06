class Player {
  constructor(player_id, score){
    this.player = player_id
    this.scores = [{score, timestamp: Date.now()}]
    this.totalScore = score
  }

  addScore(score){
    this.totalScore += score
    this.scores.push({score, timestamp: Date.now()})
  }

  average(){
    let avg
    if (!this.scores.length){
      return avg = 0;
    } else {
      avg = this.totalScore / this.scores.length
    }

    return avg.toFixed(1)
  }

  reset_score(){
    this.scores = [];
    this.totalScore = 0
  }

  remove_expired(time){
    let expired_range = Date.now() - 1 * time
    while (this.scores[0] && this.scores[0].timestamp < expired_range){
      this.totalScore -= this.scores[0].score
      this.scores.shift();
    }
  }
}

// let a = new Player(1, 50)
// console.log(a)
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
// console.log('before');
// wait(1001);  //7 seconds in milliseconds
// console.log('after');
// a.remove_expired();
// console.log(a)
// a.addScore(50)
// console.log(a)


class LeaderBoard{
  constructor(expiration){
    this.board = {};
    this.expiration = expiration;
  }

  add_score(player_id, score){
    let new_player = new Player(player_id, score);
    if (!this.board[player_id]){
      this.board[player_id] = new_player
    } else {
      this.board[player_id].addScore(score)
    }
    console.log(this.board[player_id].average())
    return this.board[player_id].average()
  }

    top(num_players){
      //output [player_id]
      for (let player in this.board){
        this.board[player].remove_expired(this.expiration)
      }
      let sorted_player_id = Object.keys(this.board).sort((a,b) => this.board[b].average() - this.board[a].average())
      sorted_player_id.length = num_players;
      return sorted_player_id.map((ele) => parseInt(ele))
    }

    reset(player_id){
      this.board[player_id].reset_score()
    }

    bottom(num_players){
      for (let player in this.board){
        this.board[player].remove_expired(this.expiration)
      }
      let bottom_player_id = Object.keys(this.board).sort((a,b) => this.board[a].average() - this.board[b].average())
      bottom_player_id.length = num_players
      return bottom_player_id.map((ele) => parseInt(ele))
    }

    remove_expired_score(){
      for (let player in this.board){
        this.board[player].remove_expired(this.expiration)
      }
    }
  }
let b = new LeaderBoard(1000);
b.add_score(1,50);
b.add_score(1,60);
b.add_score(1,70);
b.add_score(2,80);
b.add_score(2,100);
b.add_score(2,75);
b.add_score(3,20);
b.add_score(3,15);
b.add_score(4,20);
b.add_score(5,44);
b.add_score(5,66);
// b.reset(5)
console.log(b.top(5),'top')
console.log(b)
// console.log('before');
// wait(1001);  //7 seconds in milliseconds
// console.log('after');
// b.add_score(1,10);
// b.add_score(2,20);
// b.add_score(3,30);
// b.add_score(4,40);
// b.add_score(5,50);
// console.log(b,'before remove')
// console.log(b.top(1),'top')
// console.log(b.bottom(1),'bottom')
// console.log(b,'after remove')



// let player_a = new Player(1,30)
// player_a.addScore(50)
// player_a.addScore(39)
// player_a.reset_score()
// console.log(player_a.average())
// console.log(player_a)


function array_equals(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
