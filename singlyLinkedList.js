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

  getNode(index) {
    let tmpIndex = 0;
    let node = this.head;
    while (tmpIndex !== index && node.next !== null) {
      node = node.next;
      tmpIndex += 1;
    }

    if (index === tmpIndex) {
      return node;
    }

    return null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
