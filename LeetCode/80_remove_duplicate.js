var removeDuplicates = function(nums) {
      let n = nums.length
      if(n < 3)
            return n;
        let index = 2;
        for(let i = 2; i < n; i ++)
        {
            if(nums[i] != nums[index-2])
                nums[index++] = nums[i];

        }
        return index;
    }
