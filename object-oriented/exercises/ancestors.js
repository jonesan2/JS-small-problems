Object.prototype.ancestors = function() {
  const result = [];
  let curProt = Object.getPrototypeOf(this);
  while (curProt !== Object.prototype) {
    result.push(curProt.name);
    curProt = Object.getPrototypeOf(curProt); 
  }
  result.push('Object.prototype');
  return result;
};

// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

res = qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(res);
res = baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
console.log(res);
res = bar.ancestors();  // returns ['foo', 'Object.prototype']
console.log(res);
res = foo.ancestors();  // returns ['Object.prototype']
console.log(res);