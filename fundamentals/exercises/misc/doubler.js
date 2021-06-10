function makeDoubler(caller) {
  return number => {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  }
}

const doubler = makeDoubler('Victor');
console.log(doubler(5)); 
