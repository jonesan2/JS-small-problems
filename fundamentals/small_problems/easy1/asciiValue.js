function asciiValueCore(str) {
  return str.split('').map(ch => ch.charCodeAt(0)).reduce((acc, elem) => acc + elem, 0);
}

function asciiValue(str) {
  console.log(asciiValueCore(str));
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0

