//Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

//Note: You may not slant the container and n is at least 2.
//Input: [1,8,6,2,5,4,8,3,7]
//Output: 49

//dynamic approach start with the outer most line with the max width, move one unit with the short side in
//and store the max area each time,

function maxArea = (height) {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (i !== j) {
    max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
}
