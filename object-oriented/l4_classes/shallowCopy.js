function shallowCopy(object) {
  let newObj = Object.create(Object.getPrototypeOf(object));
  Object.getOwnPropertyNames(object).forEach(name => {
    newObj[name] = object[name];
  });

  return newObj;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
res = baz.hasOwnProperty('a');  // false
console.log(res);
res = baz.hasOwnProperty('b');  // false
console.log(res);