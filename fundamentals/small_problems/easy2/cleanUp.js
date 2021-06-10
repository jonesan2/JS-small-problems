function cleanUp(str) {
  withSpaces = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i)) withSpaces += str[i];
    else withSpaces += ' ';
  }

  result = withSpaces[0];
  for (let i = 1; i < withSpaces.length; i++) {
    if (withSpaces[i] === ' ' && withSpaces[i - 1] === ' ') continue;
    else result += withSpaces[i];
  } 

  console.log(result);
}

cleanUp("---what's my +*& line?");    // " what s my line " 
