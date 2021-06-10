function multisumCore(num) {
  let nums = [...Array(num + 1).keys()];
  let mults = nums.filter(num => (num % 3 === 0 || num % 5 === 0));
  return mults.reduce((acc, elem) => acc + elem, 0);
}

function multisum(num) {
  console.log(multisumCore(num));
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

