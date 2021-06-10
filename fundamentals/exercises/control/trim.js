function trim(str) {
  let result = '';
  let startFlag = false;
  let buffer = '';

  for (let i = 0; i < str.length; i++) {
    if (!startFlag) {
      if (str[i] == ' ') continue;
      else {
        result += str[i];
        startFlag = true;
      }
    } else if (str[i] != ' ') {
      result += (buffer + str[i]);
      buffer = '';
    } else buffer += str[i];
  }
  console.log(result);
  return result; 
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
