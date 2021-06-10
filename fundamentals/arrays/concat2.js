function concat(arr1, ...args) {
  result = arr1.slice();
  args.forEach(arr => result.push(arr));
  return result.flat(1);
}
