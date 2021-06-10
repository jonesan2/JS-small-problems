function octalToDecimal(numberString) {
  return numberString.split('').map(char => Number(char)).reduce((acc, elem) => acc * 8 + elem);
}

ans = octalToDecimal('1');           // 1
console.log(ans);
ans = octalToDecimal('10');          // 8
console.log(ans);
ans = octalToDecimal('130');         // 88
console.log(ans);
ans = octalToDecimal('17');          // 15
console.log(ans);
ans = octalToDecimal('2047');        // 1063
console.log(ans);
ans = octalToDecimal('011');         // 9
console.log(ans);
