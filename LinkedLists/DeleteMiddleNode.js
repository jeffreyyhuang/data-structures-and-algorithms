/*
Question 2.3
Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node).
EXAMPLE
Input: the node c from the linked list a -> b -> c -> d -> e -> f
Result: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f
*/

let deleteMiddleNode = (node) => {
  if (node === null || node.next === null) {
    return false;
  }

  let next = node.next;
  node.val = next.val;
  node.next = next.next;
  return true;
}

/*
// Testing Delete Middle Node
let linkedList = new LinkedList();
linkedList.add('a');
linkedList.add('b');
linkedList.add('c');
linkedList.add('d');
linkedList.add('e');
linkedList.add('f');
linkedList.add('g');
console.log('Contents of linkedList: ');
linkedList.printList();

let c = linkedList.head.next.next;

deleteMiddleNode(c);
console.log('After deleting node c: ');
linkedList.printList();
*/