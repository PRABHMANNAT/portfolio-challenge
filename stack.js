class Stack {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
    this.top = -1;
  }

  push(value) {
    if (this.top >= this.maxSize - 1) {
      console.log("Stack overflow. Cannot push " + value + " to the stack.");
      return;
    }
    this.stack[++this.top] = value;
    console.log("Pushed " + value + " to the stack.");
  }

  pop() {
    if (this.top < 0) {
      console.log("Stack underflow. No element to pop.");
      return -1;
    }
    const value = this.stack[this.top--];
    console.log("Popped " + value + " from the stack.");
    return value;
  }
}

const stack = new Stack(5);
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
