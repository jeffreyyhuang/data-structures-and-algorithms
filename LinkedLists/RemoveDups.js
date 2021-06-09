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

