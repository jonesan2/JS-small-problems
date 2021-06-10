function staggeredCase(str) {
  return str.split('')
            .map((char, idx) => {
              if (idx % 2 === 0) { return char.toUpperCase(); }
              else { return char.toLowerCase(); }
            }).join('');
}

res = staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
console.log(res);
res = staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
console.log(res);
res = staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
console.log(res);