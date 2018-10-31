// Reverse a singly linked list.
//
// Example:
//
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:
//
// A linked list can be reversed either iteratively or recursively. Could you implement both?

//single linked list
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function reverse_linked_list(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let nextStep = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextStep;
  }
  return prev;
}
