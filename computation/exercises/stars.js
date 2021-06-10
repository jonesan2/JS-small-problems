function stars(n) {
  let plot = new Array(n);
  for (let row = 0; row < n; row += 1) {
    plot[row] = new Array(n);
    plot[row].fill(' ');
  }

  for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < n; col += 1) {
      if (row === col
        || (n - col - 1) === row
        || row === Math.floor(n / 2)
        || col === Math.floor(n / 2)) {
        plot[row][col] = '*';
      }
    }
  }

  plot.forEach(row => console.log(row.join('')));
}

stars(7);
stars(9);
stars(11);
stars(13);
stars(15);