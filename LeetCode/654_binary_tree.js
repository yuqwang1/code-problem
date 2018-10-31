// Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:
//
// The root is the maximum number in the array.
// The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
// The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
// Construct the maximum tree by the given array and output the root node of this tree.
//
// Example 1:
// Input: [3,2,1,6,0,5]
// Output: return the tree root node representing the following tree:
//
//       6
//     /   \
//    3     5
//     \    /
//      2  0
//        \
//         1

function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }

function maxBinaryTree (nums){
  let maxNum = Math.max(...nums)
  let maxIdx = nums.indexOf(maxNum)
  const tree = new TreeNode(maxNum);
  let leftNums = nums.slice(0, maxIdx);
  let rightNums = nums.slice(maxIdx + 1, nums.length);
  if (leftNums.length > 0) {
    tree.left = maxBinaryTree(leftNums);
  }
  if (rightNums.length > 0){
    tree.right = maxBinaryTree(rightNums);
  }
  return tree;
}
