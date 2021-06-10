function myReduce(arr, func, initVal) {

  let acc;
  let start;

  if (initVal === undefined) {
    acc = arr[0];
    start = 1;
  } else {
    acc = initVal; 
    start = 0;
  } 

  arr.slice(start).forEach((elem, ind, array) => acc = func(acc, elem, ind, array));
 
  return acc;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"
