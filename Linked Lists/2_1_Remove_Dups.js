class Node {
  constructor () {
    
  }
}


function RemoveDups(list) {
  let chars = new Set(), node = list;
  chars.add(node.val);
  while (node.next) {
    if (!chars.has(node.next.val)) {
      chars.add(node.next.val)
      node.next
    } else {
      node.next = node.next.next;
    }
  }
    return node
}
