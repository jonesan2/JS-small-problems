let rlSync = require('readline-sync');
const NUM_SCORES = 3;
scores = [];
for (let i = 0; i < NUM_SCORES; i++) {
  scores[i] = Number(rlSync.question(`Enter score${i + 1}: `));
}

avg = scores.reduce((acc, elem) => acc + elem, 0) / NUM_SCORES;

if (avg >= 90) {
  grade = 'A';
} else if (avg >= 70) {
  grade = 'B';
} else if (avg >= 50) {
  grade = 'C';
} else grade = 'F';

console.log(`Based on the average of your 3 scores your letter grade is "${grade}".`);
