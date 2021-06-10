function makeCounterLogger(num1) {
  return function(num2) {
    inc = num1 < num2 ? 1 : -1;
    for (let counter = num1; counter !== num2; counter += inc) {
      console.log(counter);
    }

    console.log(num2);
  };
};

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);
countlog(5);
countlog(5.6);