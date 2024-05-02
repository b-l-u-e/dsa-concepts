class Stack {
  constructor() {
    this.stack = [];
  }

  //  push item into the stack
  push(item) {
    this.stack.push(item);
  }

  //  pop item from the stack
  pop() {
    if (this.stack.length == 0) {
      return "Underflow";
    }
    return this.stack.pop();
  }

  //  peek the top item from the stack
  peek() {
    return this.stack[this.stack.length - 1];
  }

  //  check if the stack is empty
  isEmpty() {
    return this.stack.length == 0;
  }

  // search item from the top of stack
  search(item) {
    for (let i = this.stack.length - 1; i >= 0; i--) {
      if (this.stack[i] == item) {
        return this.stack.length - i; // 1-based index from the top
      }
    }
    return -1;
  }

  //  print items of the stack
  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + " ";
    }
    return str;
  }
}

//  use the Stack class
let stack = new Stack();
console.log(stack.isEmpty()); // checks if the stack is empty

console.log(stack.pop()); // try to pop from an empty stack

//  push few items
stack.push("Tape Machines");
stack.push("Kygo");
stack.push("Avicii");
stack.push("Winona Oak");

console.log(stack.printStack());

console.log(stack.peek());

console.log(stack.pop());
console.log(stack.pop());
stack.push("Avicii");
stack.push("Winona Oak");

console.log(stack.search("Tape Machines"));

console.log(stack.printStack());
