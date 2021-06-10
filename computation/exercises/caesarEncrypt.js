function caesarEncrypt(str, key) {
  const MAX_UP_CODE = 'Z'.charCodeAt(0);
  const MAX_LOW_CODE = 'z'.charCodeAt(0);
  const MIN_UP_CODE = 'A'.charCodeAt(0);
  const NUM_LETTERS = 26;

  const chars = str.split('');
  let res = chars.map(char => {
    if (!/[A-Za-z]/.test(char)) {
      return char;
    } else {
      key %= NUM_LETTERS;
      let charCode = char.charCodeAt(0);
      if (charCode >= MIN_UP_CODE && charCode <= MAX_UP_CODE) {
        if (charCode + key > MAX_UP_CODE) {
          return String.fromCharCode(charCode + key - NUM_LETTERS);
        } else {
          return String.fromCharCode(charCode + key);
        }
      } else if (charCode + key > MAX_LOW_CODE) {
        return String.fromCharCode(charCode + key - NUM_LETTERS);
      } else {
        return String.fromCharCode(charCode + key);
      }
    }
  });
  console.log(res.join(''));
}

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"