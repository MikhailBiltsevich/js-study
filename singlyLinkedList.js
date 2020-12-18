class SinglyLinkedList {
  constructor(head) {
    this.head = head;
  }

  add(node) {
    let tmpNode = this.head;

    while (tmpNode.next !== null) {
      tmpNode = tmpNode.next;
    }

    tmpNode.next = node;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
