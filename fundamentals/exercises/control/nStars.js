function nStars(num) {
  for (let row = 1; row <= num; row++) {
    output = '';
    for (let col = 1; col <= num; col++) { 
      if (row >= col) output += String(col);
      else if (col < 10) output += '*';
      else output += '**';
    }
    console.log(output);
  }
}

nStars(20);
