let ranks = ['kingdom', 'phylum', 'class', 'order', 'family', 'genus', 'species'];
let classification = {};

let rows = Array.from(document.querySelectorAll('.biota tr'));
let currentRank = '';
rows.forEach((row) => {
  currentRank = row.firstElementChild.textContent.trim().toLowerCase();
  currentRank = currentRank.split('').slice(0, currentRank.length - 1).join('');
  if (ranks.includes(currentRank)) {
    currentValue = row.lastElementChild.textContent.trim().toLowerCase();
    classification[currentRank] = currentValue;
  }
});