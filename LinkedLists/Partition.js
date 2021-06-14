/*
Question 2.4
Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.
(IMPORTANT: The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions. The additional spacing in the example below indicatesthe partition. Yes, the output below is one of many valid outputs!)

EXAMPLE
Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
Output: 3 -> 1 -> 2      ->     10 -> 5 -> 5 -> 8 
*/

let partition = (linkedList, x) => {

  let left = new LinkedList();
  let right = new LinkedList();
  let leftPointer = null;
  let rightPointer = null;

  let currentNode = linkedList.head;

  while (currentNode !== null) {
    if (currentNode.val < x) {
      if (left.head === null) {
        left.head = currentNode;
        leftPointer = left.head;
      } else {
        leftPointer.next = currentNode;
        leftPointer = leftPointer.next;
        currentNode = currentNode.next;
      }
    } else {
      if (right.head === null) {
        right.head = currentNode;
        rightPointer = right.head;
      } else {
        rightPointer.next = currentNode;
        rightPointer = rightPointer.next;
        currentNode = currentNode.next;
      }
    }
  }

  leftPointer.next = right.head;
  return left;
}

/*
// Testing Partition
let linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(8);
linkedList.add(3);
linkedList.add(4);
linkedList.add(7);
linkedList.add(9);
linkedList.add(1);
console.log('Contents of linkedList: ');
linkedList.printList();
console.log('Partitioned linkedList: ', partition(linkedList, 5));
// Expecting 2 -> 3 -> 4 -> 1     ->     8 -> 7 -> 9
*/