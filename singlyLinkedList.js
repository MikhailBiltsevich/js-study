class SinglyLinkedList {
  constructor(head) {
    this.head = head;
    this.tail = this.head;
  }

  add(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
  }

  addByIndex(value, index) {
    const findedNode = this.getNode(index);
    if (!findedNode) {
      console.log('Out of range list. Try to use another index or add node in the end of list');
      return;
    }
    
    const node = new Node(value);
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

  remove() {
    let prevTail = this.head;
    while (prevTail.next !== this.tail) {
      prevTail = prevTail.next;
    }

    this.tail = prevTail;
    prevTail.next = null;
  }

  removeByIndex(index) {
    const removedNode = this.getNode(index);
    if (!removedNode) {
      console.log('Out of range list. Try to use another index or add node in the end of list');
      return;
    }

    if(this.head === removedNode) {
      this.head = removedNode.next;
    } else {
      const prevNode = this.getNode(index - 1);
      prevNode.next = removedNode.next;

      if (removedNode === this.tail) {
        this.tail = prevNode;
      }
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
