/*
Question 2.1
Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed.
*/

// Linked List Implementation
class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(val) {
    let newNode = new Node(val);
    if (this.head = null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.size++;
  }

  insertAt(val, index) {
    if (index > this.size || index <  0) {
      console.log('Invalid index');
      return;
    }

    let newNode = new Node(val);
    let currentNode, prevNode;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let i = 0;
      currentNode = this.head;

      while (i < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      newNode.next = currentNode;
      prevNode.next = newNode;
    }
    this.size++;
  }

  removeFrom(index) {
    if (index >= this.size || index < 0) {
      console.log('Invalid index');
      return;
    }

    let currentNode = this.head;
    let prevNode;
    let i = 0;
    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (i < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      prevNode.next = currentNode.next;
    }
    this.size--;
    return currentNode;
  }

  removeElement(val) {
    
  }
}