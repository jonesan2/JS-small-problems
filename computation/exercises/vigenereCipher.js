function shiftLetter(charCode, key) {
  const NUM_LETTERS = 26;
  const MAX_UP_CODE = 'Z'.charCodeAt(0);
  const MAX_LOW_CODE = 'z'.charCodeAt(0);
  const MIN_UP_CODE = 'A'.charCodeAt(0);

  key %= NUM_LETTERS;
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

function caesarEncrypt(str, key) {
  const chars = str.split('');
  return chars.map(char => {
    if (!/[A-Za-z]/.test(char)) {
      return char;
    } else {
      return shiftLetter(char.charCodeAt(0), key);
    }
  });
}

function vigenereCipher(text, key) {
  const MIN_UP_CODE = 'A'.charCodeAt(0);

  const keyChars = key.toUpperCase().split('');
  const keyNums = keyChars.map(char => char.charCodeAt(0) - MIN_UP_CODE);

  let keyIdx = -1;
  const textChars = text.split('');
  return textChars.map(char => {
    if (/[A-Za-z]/.test(char)) {
      keyIdx += 1;
      return caesarEncrypt(char, keyNums[keyIdx % keyNums.length]);
    } else {
      return char;
    }
  }).join('');
}

// Algorithm:
// --split uppercase key into array of chars
// --map chars array to shift values array
// --cycle through text input array of chars
// --if the char is a letter
//   --call caesar with current key value
//   --increment key index using % and length of shift values array

// many non-letters
caesarEncrypt('There are as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

console.log(vigenereCipher("Pineapples don't go on pizzas!", "meat"));