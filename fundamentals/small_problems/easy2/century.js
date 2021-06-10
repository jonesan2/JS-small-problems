function centuryCore(year) {
  cent = String(Math.floor((year - 1) / 100 + 1));
  if (Number(cent) % 100 === 11) cent += 'th';
  else if (Number(cent) % 10 === 1) cent += 'st';
  else if (Number(cent) % 100 === 12) cent += 'th';
  else if (Number(cent) % 10 === 2) cent += 'nd';
  else if (Number(cent) % 100 === 13) cent += 'th';
  else if (Number(cent) % 10 === 3) cent += 'rd';
  else cent += 'th';

  return cent;
}

function century(year) {
  console.log(centuryCore(year));
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
