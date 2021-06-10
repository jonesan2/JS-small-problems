// Input: odd integer n
// Output: n strings
//
// Algorithm:
// --loop n times
// --calculate num stars in row
//   --1,9 --> 1; 2, 8 --> 3; 3,7--> 5, 4,6--> 7, 5-->9
//   --for 1..5 it is 2x - 1
//   --for 6..9 x it is still 2y -1 where y = n + 1 - x
//     --simplifies to 2n + 2 - 2x + 1 = 2(n-x)+1
// --calculate num spaces on one side of row
//   --(n - stars) / 2

function logRow(stars, spaces) {
  let outputRow = '';
  outputRow += ' '.repeat(spaces);
  if (stars > 1) {
    outputRow += '*';
    outputRow += ' '.repeat(stars - 2);
  } 
  outputRow += '*';
  outputRow += ' '.repeat(spaces);
  console.log(outputRow);
}

function diamond(n) {
  let stars = 0;
  let spaces = 0;
   
  for (let row = 1; row <= n; row += 1) {
    if (row <= Math.ceil(n / 2)) {
      stars = (2 * row) - 1;
    } else {
      stars = (2 * (n - row)) + 1;
    }
    spaces = (n - stars) / 2;
    logRow(stars, spaces);
  }
}

diamond(1);
diamond(3);
diamond(5);
diamond(7);
diamond(9);
diamond(11);
diamond(13);
diamond(15);
diamond(17);
diamond(19);