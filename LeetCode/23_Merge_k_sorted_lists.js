Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 //need a hepl method to compare one with another and merge


 var mergeKLists = function(lists) {
  function merge(l1, l2){

    let root = new ListNode();
    let node = root;
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        node.next = l1;
        l1 = l1.next;
      } else {
        node.next = l2;
        l2 = l2.next;
      }
      node = node.next;
    }
    node.next = l1 || l2;
    return root.next;
  }

  let result = lists[0];
  for (let i = 1; i < lists.length; i++) {
    result = merge(result, lists[i]);
  }

  return result || null;
};
