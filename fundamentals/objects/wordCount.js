function wordCount(str) {
  result = {};
  words = str.split(' ');
  words.forEach(word => {
    if (Object.keys(result).includes(word)) result[word]++;
    else result[word] = 1;
  });
  console.log(result);
  return result;
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }
