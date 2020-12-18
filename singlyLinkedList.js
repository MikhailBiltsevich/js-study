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

  addByIndex(node, index) {
    const findedNode = this.getNode(index);
    if (!findedNode) {
      console.log('Out of range list. Try to use another index or add node in the end of list');
      return;
    }

    const isHead = findedNode === this.head;
    
    if (isHead) {
      node.next = this.head;
      this.head = node;
    } else {
      const prevNode = this.getNode(index - 1);
      node.next = findedNode;
      prevNode.next = node;
    }
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
