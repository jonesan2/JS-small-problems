function countdown(num) {
  (function(start) {
    for (let i = start; i >= 0; i -= 1) {
      console.log(i);
    }

    console.log('Done!');
  })(num);
}

countdown(7);