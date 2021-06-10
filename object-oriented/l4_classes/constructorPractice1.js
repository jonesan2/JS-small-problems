let a = 1;
let foo;
let obj;
console.log(`This: ${this.constructor}`);

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(`This: ${this.constructor}`);
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo();

foo.bar();
Foo();

obj = {};
Foo.call(obj);
obj.bar();

console.log(this.a);