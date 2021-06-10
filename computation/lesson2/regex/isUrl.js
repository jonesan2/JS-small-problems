function isUrl(str) {
   return !!str.match(/^https?:\/\/\S*$/);
}

res = isUrl('http://launchschool.com');   // -> true
console.log(res);
res = isUrl('https://example.com');       // -> true
console.log(res);
res = isUrl('https://example.com hello'); // -> false
console.log(res);
res = isUrl('   https://example.com');    // -> false
console.log(res);
