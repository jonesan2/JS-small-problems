function greet(arg1, arg2) {
  console.log(`${arg1[0].toUpperCase()}${arg1.slice(1)}, ${arg2}!`);
}

function partial(func, arg1) {
  return function(name) {
    func(arg1, name);
  };
}

let sayHello = partial(greet, 'hello');
let sayHi = partial(greet, 'hi');

greet('howdy', 'Joe');
greet('good morning', 'Sue');
sayHello('Brandon');
sayHi('Sarah');