function toLowerCase(str) {
  result = '';
  for (let i = 0; i < str.length; i++) {
    ascii = str.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      result += String.fromCharCode(ascii + 32);
    } else result += str[i];
  }
  console.log(result);
  return result;
} 

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"
