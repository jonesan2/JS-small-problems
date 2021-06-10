function wordLengths(str) {
  let result = [];
  if (!str) { return result; } 
  let words = str.split(' ');
  words.forEach(word => { 
    result.push(word + ' ' + String(word.split('').length));
  });
  return result;
}

res = wordLengths('cow sheep chicken');
console.log(res);
// ["cow 3", "sheep 5", "chicken 7"]

res = wordLengths('baseball hot dogs and apple pie');
console.log(res);
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

res = wordLengths("It ain't easy, is it?");
console.log(res);
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

res = wordLengths('Supercalifragilisticexpialidocious');
console.log(res);
// ["Supercalifragilisticexpialidocious 34"]

res = wordLengths('');      // []
console.log(res);
res = wordLengths();        // []
console.log(res);