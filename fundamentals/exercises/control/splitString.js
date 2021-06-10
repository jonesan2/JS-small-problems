function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  if (delimiter === '') {
    for (let i = 0; i < string.length; i++) {
      console.log(string[i]);
    }
  } else {
    buffer = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] === delimiter) {
        console.log(buffer);
        buffer = '';
      } else buffer += string[i];
    }
  if (buffer !== '') console.log(buffer);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello       
