function oddNumbers(low = Number(process.argv[2]), 
                    high = Number(process.argv[3])) {
  if (low > high) {
    let temp = low;
    low = high;
    high = temp;
  }

  if (low % 2 === 0) low++;
  while (low <= high) {
    console.log(low);
    low += 2; 
  }
}

oddNumbers();
