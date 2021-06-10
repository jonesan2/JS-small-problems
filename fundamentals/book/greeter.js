let rlSync = require('readline-sync');
let getName = (nameType) => rlSync.question(`What is your ${nameType} name?\n`);
firstName = getName('first');
lastName = getName('last');
console.log(`Hello, ${firstName} ${lastName}!`);
