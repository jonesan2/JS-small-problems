function indexOf(firstString, secondString) {
  for (var idx = 0; idx < firstString.length; idx++) {
    for (var keyIdx = 0; keyIdx < secondString.length; keyIdx++) {
      if (secondString[keyIdx] !== firstString[idx + keyIdx]) break;
    };
    if (keyIdx === secondString.length) {
      console.log(idx);
      return idx;
    }
  };
  console.log(-1);
  return -1;
}

function lastIndexOf(firstString, secondString) {
  result = -1;
  for (var idx = 0; idx < firstString.length; idx++) {
    for (var keyIdx = 0; keyIdx < secondString.length; keyIdx++) {
      if (secondString[keyIdx] !== firstString[idx + keyIdx]) break;
    };
    if (keyIdx === secondString.length) {
      result = idx;
    }
  };
  console.log(result);
  return result;
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
