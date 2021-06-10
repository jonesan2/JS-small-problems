function danish(str) {
  return str.replace(/\b(apple|blueberry|cherry)\b/, 'danish');
}

res = danish('An apple a day keeps the doctor away')
console.log(res);
// -> 'An danish a day keeps the doctor away'

res = danish('My favorite is blueberry pie')
console.log(res);
// -> 'My favorite is danish pie'

res = danish('The cherry of my eye')
console.log(res);
// -> 'The danish of my eye'

res = danish('apple. cherry. blueberry.')
console.log(res);
// -> 'danish. cherry. blueberry.'

res = danish('I love pineapple')
console.log(res);
// -> 'I love pineapple'
