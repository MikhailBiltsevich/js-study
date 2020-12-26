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
      if (index === 0) {
        this.add(value);
      } else {
        console.log('Index out of range');
      }
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
    if (!this.head) {
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      const newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
    }

  }

  removeByIndex(index) {
    const nodeByIndex = this.getNode(index);
    if (!nodeByIndex) {
      console.log('Index out of range');
      return;
    }

    switch (nodeByIndex) {
      case this.head:
        if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = nodeByIndex.next;
          this.head.prev = null;
        }
        break;
      case this.tail:
        this.tail = nodeByIndex.prev;
        this.tail.next = null;
        break;
      default:
        nodeByIndex.prev.next = nodeByIndex.next;
        nodeByIndex.next.prev = nodeByIndex.prev;
        break;
    }
  }

  getNode(index) {
    let tmpIndex = 0;
    let node = this.head;
    while (node && tmpIndex !== index) {
      node = node.next;
      tmpIndex += 1;
    }

    if (index === tmpIndex) {
      return node;
    }

    return null;
  }
  
  sort(isAscending = true) {
    let tmpTail = this.tail;

    const findMax = () => {
      let maxNode = this.head;
      let node = this.head;
      while (node && node !== tmpTail.next) {
        if (node.value > maxNode.value) {
          maxNode = node;
        }
        node = node.next;
      }

      return maxNode;
    }

    const findMin = () => {
      let minNode = this.head;
      let node = this.head;
      while (node && node !== tmpTail.next) {
        if (node.value < minNode.value) {
          minNode = node;
        }
        node = node.next;
      }

      return minNode;
    }

    const findNode = isAscending ? findMin : findMax;

    let isSorted = tmpTail === this.head;
    while (!isSorted) {
      let node = findNode();
      switch (node) {
        case this.head:
          isSorted = tmpTail === this.head

          this.head = this.head.next;
          this.head.prev = null;
          break;
        case tmpTail:
          tmpTail = tmpTail.prev;
          if (node === this.tail) {
            continue;
          }
          tmpTail.next = node.next;
          break;
        default:
          const prevNode = node.prev;
          const nextNode = node.next;

          prevNode.next = nextNode;
          nextNode.prev = prevNode;
          break;
        }

        this.tail.next = node;
        node.prev = this.tail;
        node.next = null;
        this.tail = node;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
