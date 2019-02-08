Given a sorted integer array, return sum of array so that each element is unique by adding some numbers to duplicate elements so that sum of unique elements is minimum.

I.e., if all elements in the array are unique, return the sum. If some elements are duplicates, then increment them to make sure all elements are unique so that the sum of these unique elements is minimum.

Some examples:

input1[] = { 2, 3, 4, 5 } => return 19 = 2+3+4+5 (all elements are unique, so just add them up)
input2[] = { 1, 2, 2 } => return 6 = 1+2+3 (index 2 is duplicate, so increment it)
input3[] = { 2, 2, 4, 5 } => return 14 = 2+3+4+5 (index 1 is duplicate, so increment it)

function getMinUniqSum(arr){
  let sum = 0;
  let arr1 = [];
  arr1.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    let val = arr[i];
    while (arr1.includes(val)){
      val++;
    }
    arr1.push(val);
  }

  for (let i = 0; i < arr1.length; i++){
    sum += arr1[i];
  }
}

There are n citizens voting in this year's HackLand election. Each voter writes the name of their chosen candidate on a ballot and places it in a ballot box. The candidate with the highest number of votes wins the election; if two or more candidates have the same number of votes, then the tied candidates' names are ordered alphabetically and the last name wins.

Complete the electionWinner function in your editor. It has 1 parameter: an array of strings, votes, describing the votes in the ballot box. This function must review these votes and return a string representing the name of the winning candidate.


function electionWinner(votes){
  const candidate = {};
  for (let name of votes){
    candidate[name] = (candidate[name] || 0) + 1;
  }

  let winners = [];
  let maxVotes = 0;
  for(let name in candidate){
    if (candidate[name] > maxVotes){
      maxVotes = candidate[name];
      winners = [name];
    } else if (candidate[name] === maxVotes){
      winners.push(name);
    }
    winners.sort();
    retrun winners[winners.length - 1];
  }
}

//
What is the biggest challenge I ever solve in coding ?
How is your team work ? Talk about the experience of pair programming ?
If you have a disagreement with you colleauges, what will you do ?
What will you do if you are been stuck with a problem, what would be your working process ?
