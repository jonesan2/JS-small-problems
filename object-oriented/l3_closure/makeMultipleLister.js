function makeMultipleLister(num) {
  return function () {
    count = num;
    while (count < 100) {
      console.log(count);
      count += num;
    }
  }
}

let lister = makeMultipleLister(1);
lister();