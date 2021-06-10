function newStack() {
  const stackObject = [];
  return {
    push(value) {
      stackObject.push(value);
      return stackObject; 
    },

    pop() {
      return stackObject.pop();
    },

    printStack() {
      stackObject.slice().reverse().forEach(elem => console.log(elem));
    },
  };
}

myStack = newStack();
myStack.printStack();
myStack.push('hi');
myStack.push('there');
myStack.push('my');
myStack.push('name');
myStack.push('is');
myStack.push('Gwen');
myStack.printStack();
name = myStack.pop();
myStack.push('Whitney');
myStack.printStack();
console.log(name);
