const readlineSync = require("readline-sync");

console.log("Enter the first number: ");
let num1 = Number(readlineSync.prompt());
console.log("Enter the second number: ");
let num2 = Number(readlineSync.prompt());

console.log(num1, num2);
