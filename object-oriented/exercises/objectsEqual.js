function objectsEqual(obj1, obj2) {
  equal = true;
  Object.keys(obj1).forEach(key => {
    if (!obj2[key] || obj2[key] !== obj1[key]) {
      equal = false;
    }
  });
  return equal;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false