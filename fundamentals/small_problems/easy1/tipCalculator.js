function tipCalculator() {
  const rlSync = require('readline-sync');
  let bill = Number(rlSync.question("What is the bill? "));
  let tipPerc = Number(rlSync.question("What is the tip percentage? "));

  tip = bill * tipPerc / 100;
  total = bill + tip;

  console.log('');
  console.log(`The tip is $${tip.toFixed(2)}`);
  console.log(`The total is $${total.toFixed(2)}`);
}

tipCalculator();
