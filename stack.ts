interface IStack {
  push(element: number): void;
  pop(): void;
}

class Stack implements IStack {
  #maxSize: number;
  #container: number[] = [];

  constructor(maxSize: number = 10) {
    this.#maxSize = maxSize;
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length == 0;
  }

  push(element: number): void {
    if (this.#isFull()) {
      console.log("Stack Overflow!");
      return;
    }

    this.#container.push(element);
  }

  pop(): void {
    if (this.#isEmpty()) {
      console.log("Stack Underflow!");
      return;
    }

    this.#container.pop();
  }

  getElements() {
    return this.#container;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.getElements());

stack.pop();
console.log(stack.getElements());
