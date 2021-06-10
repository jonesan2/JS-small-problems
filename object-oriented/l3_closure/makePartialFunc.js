function makePartialFunc(func, b) {
  // implement this function...
  return function(a) {
    return func(a, b);
  }
}

function multiply(a, b) {
  return a * b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);

res = multiplyBy5(100); // 500
console.log(res);