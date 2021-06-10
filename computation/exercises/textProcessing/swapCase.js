function swapCase(str) {
  return str.split('')
            .map(char => {
              if (char.match(/[a-z]/)) { return char.toUpperCase(); }
              else if (char.match(/[A-Z]/)) { return char.toLowerCase(); }
              else { return char; } 
            }).join('');
}

res = swapCase('CamelCase');              // "cAMELcASE"
console.log(res);
res = swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
console.log(res);