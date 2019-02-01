// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
//
// Note:
//
// The solution set must not contain duplicate quadruplets.
//
// Example:
//
// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
//
// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

var fourSum = function(nums, target) {
    if (nums.length === 0) return [];
    nums.sort(function(a,b){
      return a - b;
    })
    let result = [];
    for(let i = 0; i < nums.length; i++){
      let sumThree = target - nums[i];
      for ( let j = i + 1 ; j < nums.length; j++){
        let sumTwo = sumThree - nums[j];
        let front = j + 1;
        let back = nums.length - 1;
        while (front < back){
          debugger
          let fbSum = nums[front] + nums[back];
          if (sumTwo > fbSum){
            back--;
          } else if (sumTwo < fbSum){
            front++;
          }else {
            let sum = [nums[i],nums[j],nums[front],nums[back]];
            result.push(sum);
            while(front < back && nums[front] === sum[2]){
              front++;
            }
            while (front < back && nums[back] === sum[3]){
              back--
            }
          }
        }
        while (nums[j] === nums[j+1]) j++;
      }
      while (nums[i] === nums[i + 1]) i++;
    }
    return result;
};

var fourSum = function(nums, target) {
    var ret = [];

    if(nums.length == 0)
        return ret;

    nums.sort(function(a,b){
        return a - b;
    });

    for(var i = 0; i < nums.length; i++){
        var target2 = target - nums[i];

        for(var j = i + 1; j < nums.length; j++){
            var target3 = target2 - nums[j];

            var front = j + 1;
            var back = nums.length - 1;

            while(front < back){
                var sum = nums[front] + nums[back];

                if(sum < target3)
                    front++;

                else if(sum > target3)
                    back--;

                else{
                    var temp = new Array(4);
                    temp[0] = nums[i];
                    temp[1] = nums[j];
                    temp[2] = nums[front];
                    temp[3] = nums[back];
                    ret.push(temp);

                    while(front < back && nums[front] === temp[2])
                        front++;

                    while(front < back && nums[back] === temp[3])
                        back--;
                }
            }

            while(j + 1 < nums.length && nums[j + 1] === nums[j]) ++j;
        }

        while(i + 1 < nums.length && nums[i + 1] === nums[i]) ++i;
    }

    return ret;
};
