function anagram(word, list) {
  return list.filter(wd => wd.split('').sort().join() === word.split('').sort().join());
}

ans = anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
console.log(ans);
ans = anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]
console.log(ans);
