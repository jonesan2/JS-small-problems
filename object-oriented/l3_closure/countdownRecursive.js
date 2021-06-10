function countdown(num) {
  (function foo(start) {
    console.log(start);
    if (start > 0) {
      foo(start - 1);
    } else {
      console.log('Done!');
    }
  })(num);
}

countdown(7);