function mult3and5() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log(`'${i}!'`);
      } else {
        console.log(`'${i}'`);
      }
    } 
  }
}

mult3and5();
