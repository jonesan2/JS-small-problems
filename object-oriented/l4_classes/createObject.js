// function createObject(obj) {
//   return Object.setPrototypeOf({}, obj);
// }

function createObject(obj) {
  function F() {};
  F.prototype = obj;
  return new F();
}

let foo = {
  a: 1
};

let bar = createObject(foo);
res = foo.isPrototypeOf(bar);         // true
console.log(res);