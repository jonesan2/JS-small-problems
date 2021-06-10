function afterMidnight(time) {
  hrsMins = time.split(':');
  console.log(Number(hrsMins[0]) * 60 + Number(hrsMins[1]));
}

function beforeMidnight(time) {
  hrsMins = time.split(':');
  if (Number(hrsMins[0]) === 0 && Number(hrsMins[1]) === 0) hrsMins[0] = 24;
  console.log((23 - Number(hrsMins[0])) * 60 + 60 - hrsMins[1]);
}

afterMidnight('00:00');       // 0
beforeMidnight('00:00');      // 0
beforeMidnight('11:00');      // 0
afterMidnight('12:34');       // 754
beforeMidnight('12:34');      // 686
