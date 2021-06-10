function shortLongShort(str1, str2) {
  if (str2.length < str1.length) {
    let temp = str1;
    str1 = str2;
    str2 = temp;
  }
  result = str1 + str2 + str1;
  console.log(result);
  return result;
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

