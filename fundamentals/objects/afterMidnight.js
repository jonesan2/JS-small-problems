function timeOfDay(offset, ironMaiden = false) {
  if (ironMaiden) offset = -2;
  time = new Date();
  time.setHours(0,0,0,0);
  time.setMinutes(offset);
  console.log(`${padZeros(time.getHours())}:${padZeros(time.getMinutes())}`);
}

function padZeros(num) {
  if (num < 10) return '0' + String(num);
  else return String(num);
}

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"
timeOfDay(-4231, 1);
