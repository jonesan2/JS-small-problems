let rlSync = require('readline-sync');
let getNumber = (position) => Number(rlSync.question(`Enter the ${position} number: `));
firstNumber = getNumber('first');
secondNumber = getNumber('second');
result = firstNumber * secondNumber;
console.log(`${firstNumber} * ${secondNumber} = ${result}`);
