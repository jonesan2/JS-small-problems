function getDefiningObject(object, propKey) {
  // ...
  let currentObject = object;
  while (currentObject !== null) {
    if (currentObject.hasOwnProperty(propKey)) {
      return currentObject;
    } else {
      currentObject = Object.getPrototypeOf(currentObject);
    }
  }
  return null;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null