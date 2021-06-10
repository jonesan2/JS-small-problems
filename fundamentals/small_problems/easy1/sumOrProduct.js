function sumOrProduct() {
  const rlSync = require('readline-sync');
  let num = Number(rlSync.question("Please enter an integer greater than 0: "));
  let type = rlSync.question("Enter 's' to compute the sum, " +
                             "or 'p' to compute the product. ")
  switch (type) {
    case 's':
      result = [...Array(num + 1).keys()].reduce((acc, elem) => acc + elem, 0);
      console.log(`The sum of the integers between 1 and ${num} is ${result}.`);
      break;
    case 'p':
      result = [...Array(num + 1).keys()].slice(1).reduce((acc, elem) => acc * elem, 1);
      console.log(`The product of the integers between 1 and ${num} is ${result}.`);
      break;
    default:
      console.log('Invalid entry.');
  }
}

sumOrProduct();
