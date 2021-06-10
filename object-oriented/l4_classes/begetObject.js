let foo = {
  a: 1,
};

foo.begetObject = function() {
  function F() {};
  F.prototype = this;
  return new F();
};

let bar = foo.begetObject();
res = foo.isPrototypeOf(bar);         // true
console.log(res);