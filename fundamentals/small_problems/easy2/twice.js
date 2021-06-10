function twiceCore(num) {
  if (!Number.isInteger(num)) {
    console.log('Type Error: expected Integer');
    return;
  }
  if (num < 0) num *= -1;
  stringNum = String(num);
  len = stringNum.length;
  if (len % 2 === 0 && 
      stringNum.slice(0, len / 2) === stringNum.slice(len / 2, len)) {
    return num;
  }
  else return num * 2;
}

function twice(num) {
  console.log(twiceCore(num));
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676 
