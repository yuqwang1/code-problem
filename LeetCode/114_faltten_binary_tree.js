// Given a binary tree, flatten it to a linked list in-place.
//
// For example, given the following tree:
//
//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// The flattened tree should look like:
//
// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6

// Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }

function flatten_tree(root) {
  let prev = null;
  let dfs = function(node) {
    if (!node) return null;
    dfs(node.right);
    dfs(node.left);

    node.right = prev;
    node.left = null;
    prev = node;
  }
  dfs(root)

}
