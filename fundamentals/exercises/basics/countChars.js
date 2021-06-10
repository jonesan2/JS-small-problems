const readlineSync = require("readline-sync");

console.log("Please enter a phrase: ");
let phrase = readlineSync.prompt();
len = phrase.length;
console.log(`There are ${len} characters in "${phrase}".`);
