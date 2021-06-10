function neww(constructor, args) {
  let object = Object.create(constructor.prototype);
  let result = constructor.apply(result, args);
  return typeof result === 'object' ? result : object;
} 

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
res = john.constructor;         // Person(firstName, lastName) {...}
console.log(res);