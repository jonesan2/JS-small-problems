function triangle(size) {
  for (let row = 1; row <= size; row++) {
    let line = '';
    for (let col = size; col >= 1; col--) {
      if (col > row) line += ' ';
      else line += '*';
    }
    console.log(line);
  }
}

triangle(5);
triangle(9);
