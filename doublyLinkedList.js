class DoublyLinkedList {
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
      node.prev = this.tail;
    }
    this.tail = node;
  }

  addByIndex(value, index) {
    const nodeByIndex = this.getNode(index);
    if (!nodeByIndex) {
      console.log('Index out of range');
      return;
    }

    const node = new Node(value);
    const prevNode = nodeByIndex.prev;

    switch (nodeByIndex) {
      case this.head:
        this.head = node;
        node.next = nodeByIndex;
        break;
      default:
        node.prev = prevNode;
        prevNode.next = node;
        node.next = nodeByIndex;
        break;
    }
    
    nodeByIndex.prev = node;
  }

  remove() {

  }

  removeByIndex(index) {

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
    this.prev = null;
  }
}
