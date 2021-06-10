function removeVowels(arr) {
  return arr.map(str => str.replace(/[aeiou]/gi, ''));
}

res = removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
console.log(res);
res = removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
console.log(res);
res = removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
console.log(res);