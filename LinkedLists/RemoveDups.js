/*
Question 2.1
Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/

let removeDuplicates = (LinkedList) => {
  let storage = {};

  this = LinkedList;
  let currentNode = this.head;
  let prevNode;

  while (currentNode !== null) {
    prevNode = currentNode;
    if (!storage[currentNode.val]) {
      storage[currentNode.val] = 1;
    } else {
      prevNode.next = currentNode.next;
      currentNode = currentNode.next;
    }
  }
}

