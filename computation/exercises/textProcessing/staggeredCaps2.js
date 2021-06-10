function staggeredCase(str) {
  let doUpper = false;
  return str.split('')
            .map((char, idx) => {
              if (/[A-Za-z]/.test(char)) {
                doUpper = !doUpper;
                if (doUpper) { return char.toUpperCase(); }
                else { return char.toLowerCase(); }
              } else { return char; }
            }).join('');
}

res = staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
console.log(res);
res = staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
console.log(res);
res = staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
console.log(res);