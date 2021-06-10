function repeatedCharacters(str) {
  result = {};
  chars = str.toLowerCase().split('');
  chars.forEach(ch => {
    if (result[ch] === undefined) result[ch] = 1;
    else result[ch]++;
  })

  Object.keys(result).forEach(key => {
    if (result[key] === 1) delete result[key];
  })

  console.log(result);
  return result;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
