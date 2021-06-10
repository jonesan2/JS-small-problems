function buyFruit(arr) {
  result = [];
  arr.forEach(pair => {
    let fruit = pair[0];
    let times = pair[1];
    for (let i = 0; i < times; i += 1) {
      result.push(fruit);
    }
  });
  return result;
}

res = buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
console.log(res);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
