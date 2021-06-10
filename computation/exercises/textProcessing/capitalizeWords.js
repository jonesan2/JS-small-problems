function wordCap(str) {
  return str.toLowerCase().replace(/(\S)(\S*)/g, (match, cap1, cap2) => {
    return cap1.toUpperCase() + cap2;
  });
}

res = wordCap('four score and seven');       // "Four Score And Seven"
console.log(res);
res = wordCap('the javaScript language');    // "The Javascript Language"
console.log(res);
res = wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
console.log(res);