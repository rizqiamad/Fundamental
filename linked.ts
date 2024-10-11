class Node {
  element: number;
  next: any;

  constructor(element: number) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element: number) {
    let node = new Node(element);

    let current: any;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size += 1;
  }

  printList() {
    let curr: any = this.head;
    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);

console.log(linkedList.head?.next);
linkedList.printList();