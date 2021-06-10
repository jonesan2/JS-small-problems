function dailyDouble(str) {
  let i = 1;
  result = str[0] || '';
  while (i < str.length) {
    if (str[i] === str[i-1]) {
      i++;
      continue;
    } else result += str[i];
    i++;
  }
  return result;
}

function crunch(str) {
  console.log(dailyDouble(str));
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // "" 
