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

  }

  remove() {

  }

  removeByIndex(index) {

  }

  getNode(index) {

  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
