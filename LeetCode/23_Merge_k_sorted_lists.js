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
   function mergeHelp(list1, list2){
     let curr = new ListNode(0);
     let res = curr;
     while (list1 && list2){
       if (list1.val >= list2.val){
         curr.next = list2;
         list2 = list2.next;
       } else {
         curr.next = list1;
         list1 = list1.next;
       }
       curr = curr.next;
     }
     curr.next = list1 || list2;
     return res.next;
   }

   let root = lists[0]
  for (let i = 0; i < lists.length; i++){
  root = mergeHelp(root, lists[i])
  }

   return root || null;

 };

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
    result = merge(root, lists[i]);
  }

  return result || null;
};
