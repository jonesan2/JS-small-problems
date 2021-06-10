let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you?\n'));
let inc = 10;
console.log(`You are ${age} years old.`);
for (let i = 1; i < 5; i++) {
  console.log(`In ${i * inc} years, you will be ${age + i * inc} years old.`);
}
