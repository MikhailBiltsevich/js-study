class SinglyLinkedList {
  constructor(...values) {
    for (let i = 0; i < values.length; i += 1) {
      this.add(values[i]);
    }
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  addByIndex(value, index) {
    const findedNode = this.getNode(index);
    if (!findedNode) {
      if (index === 0) {
        this.add(value);
      } else {
        console.log('Out of range list. Try to use another index or add node in the end of list');
      }
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
    if (!this.head) {
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let prevTail = this.head;
      while (prevTail.next !== this.tail) {
        prevTail = prevTail.next;
      }
  
      this.tail = prevTail;
      prevTail.next = null;
    }
  }

  removeByIndex(index) {
    const removedNode = this.getNode(index);
    if (!removedNode) {
      console.log('Out of range list. Try to use another index');
      return;
    }

    switch (removedNode) {
      case this.head:
        if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = removedNode.next;
        }
        break;
      default:
        const prevNode = this.getNode(index - 1);
        prevNode.next = removedNode.next;
    
        if (removedNode === this.tail) {
          this.tail = prevNode;
        }
        break;
    }
  }

  getNode(index) {
    let tmpIndex = 0;
    let node = this.head;
    while (tmpIndex !== index && node) {
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
