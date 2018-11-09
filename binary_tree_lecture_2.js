// Write a function that takes in a binary search tree, and prints the values in increasing order
function inOrderPrint(root) {
  if (!root) return;
  inOrderPrint(root.left);
  console.log(root.val);
  inOrderPrint(root.right);
}

function preOrderPrint(root) {
  if (!root) return;
  console.log(root.val);
  preOrderPrint(root.left);
  preOrderPrint(root.right);
}

function postOrderPrint(root) {
  if (!root) return;
  postOrderPrint(root.left);
  postOrderPrint(root.right);
  console.log(root.val);
}

function depthFirstRec(root) {
  if (!root) return;
  console.log(root.val);
  depthFirstRec(root.left);
  depthFirstRec(root.right);
}

function depthFirstIter(root) {
  let stack = [ root ];
  //while the stack is not empty
  // keep going
  while (stack.length > 0) {
    let node = stack.pop();
    console.log(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}


//write a function that accpets a tree and return the sum of all the nodes
function treeSum(root) {
  if (!root) return 0;
  let leftSum = treeSum(root.left);
  let rightSum = treeSum(root.right);
  return leftSum + root.val + rightSum
}

//wirte a function that accpets the root of a tree as arg.
// The function should return the maximum sum of a path through the tree.
// For this problem, a path must begin at the root and end at a leaf

function maxPathSum(root) {
  if(!root) return 0;
  let leftMax = maxPathSum(root.left);
  let rightMax = maxPathSum(root.right);
  return root.val + Math.max(leftMax, rightMax)
}

//Write a function that accepts the root of a tree as an arg.
// The function should return a 2D array repersenting the values at each level of the tree.
function breadthFirstIter(root) {
  let queue = [{ node: root, level: 0 }];
  let levels = [];
  // while the queue is not empty
  // keep going
  while (queue.length > 0) {
    let { node, level } = queue.shift();
    // if the subarray does not exist
    // else the subarray already exists;
    if (levels[level] === undefined) {
      levels[level] = [node.val];
    } else {
      levels[level].push(node.val);
    }
    console.log(node.val);

    if (node.left) queue.push({ node: node.left, level: level + 1});
    if (node.right) queue.push( node: node.right, level: level + 1);
  }
  return levels;
}
