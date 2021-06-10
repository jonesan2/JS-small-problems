function dms(num) {
  let result = '';
  const degrees = Math.floor(num);
  const minSec = (num - degrees) * 60;
  const minutes = Math.floor(minSec);
  const seconds = Math.floor((minSec - minutes) * 60); 

  let angle = `${String(degrees)}°${String(minutes)}'${String(seconds)}"`;
  angle = angle.replace(/°(\d)'/, "°0$1'");
  angle = angle.replace(/'(\d)"/, "'0$1\"");
  return angle;
}

res = dms(30);           // 30°00'00"
console.log(res);
res = dms(76.73);        // 76°43'48"
console.log(res);
res = dms(254.6);        // 254°35'59"
console.log(res);
res = dms(93.034773);    // 93°02'05"
console.log(res);
res = dms(0);            // 0°00'00"
console.log(res);
res = dms(360);          // 360°00'00" or 0°00'00"
console.log(res);