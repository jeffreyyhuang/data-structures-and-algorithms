/*
Question 2.1
Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/

let removeDuplicates = (list) => {
  let storage = {};

  let currentNode = list.head;
  let prevNode = null;

  while (currentNode !== null) {
    if (!storage[currentNode.val]) {
      storage[currentNode.val] = 1;
      prevNode = currentNode;
    } else {
      storage[currentNode.val]++;
      prevNode.next = currentNode.next;
    }
    currentNode = currentNode.next;
  }
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
linkedList.printList()
removeDuplicates(linkedList);
console.log('After removing duplicates: ');
linkedList.printList()
*/