function acronym(string) {
  return string.split(/[\s\-]/).map(word => word[0].toUpperCase()).join('');
}
  
res = acronym('Portable Network Graphics');                  // "PNG"
console.log(res);
res = acronym('First In, First Out');                        // "FIFO"
console.log(res);
res = acronym('PHP: HyperText Preprocessor');                // "PHP"
console.log(res);
res = acronym('Complementary metal-oxide semiconductor');    // "CMOS"
console.log(res);
res = acronym('Hyper-text Markup Language');                 // "HTML"
console.log(res);