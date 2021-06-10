let foo = function(min, max) {
  if (max < min) {
    temp = min;
    min = max;
    max = temp;
  }
 
  return (Math.round(Math.random() * (max - min) + min));
}

console.log(foo(-4, 4));
console.log(foo(3, 4));
console.log(foo(1, 100));
