function evenOrOdd (arg) {
  if (Number.isInteger(arg)) {
    console.log(arg % 2 == 0 ? 'even' : 'odd');
  } else {
    console.log('TypeError: Argument is not an Integer');
    return; 
  }
}
evenOrOdd(2);
evenOrOdd(13);
evenOrOdd(5.4);
evenOrOdd('hello');
