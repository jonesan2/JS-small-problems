function isValidEmail(email) {
  return !!email.match(/^[A-Za-z0-9]+@([A-Za-z]+\.)+[A-Za-z]+$/)
}

res = isValidEmail('Foo@baz.com.ph');          // returns true
console.log(res);
res = isValidEmail('Foo@mx.baz.com.ph');       // returns true
console.log(res);
res = isValidEmail('foo@baz.com');             // returns true
console.log(res);
res = isValidEmail('foo@baz.ph');              // returns true
console.log(res);
res = isValidEmail('HELLO123@baz');            // returns false
console.log(res);
res = isValidEmail('foo.bar@baz.to');          // returns false
console.log(res);
res = isValidEmail('foo@baz.');                // returns false
console.log(res);
res = isValidEmail('foo_bat@baz');             // returns false
console.log(res);
res = isValidEmail('foo@bar.a12');             // returns false
console.log(res);
res = isValidEmail('foo_bar@baz.com');         // returns false
console.log(res);
res = isValidEmail('foo@bar.....com');         // returns false
console.log(res);