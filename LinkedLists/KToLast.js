/*
Question 2.2
Implement an algorithm to find the kth to last element of a singly linked list.
*/

let kthToLast = (list, k) => {
  let length = list.size;
  let i = 1;
  let currentNode = list.head;

  while (i < (length + 1 - k)) {
    currentNode = currentNode.next;
    i++;
  }
  return currentNode.val;
}

/*
// Testing Remove Dups
let linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
linkedList.add(7);
linkedList.add(9);
linkedList.add(3);
console.log('Contents of linkedList: ');
linkedList.printList();
console.log('Expecting 3rd to last element of linkedList (7): ', kthToLast(linkedList, 3));
*/