function reverse(string) {
  return string.split('').reverse().join('');
}

res = reverse('hello');                  // returns "olleh"
console.log(res);
res = reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"
console.log(res);