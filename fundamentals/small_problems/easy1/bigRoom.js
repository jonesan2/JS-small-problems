function howBig() {
  const SQ_FEET_PER_SQ_M = 10.7639;
  let rlSync = require('readline-sync');
  console.log("Enter the length of the room in meters: ");
  let length = Number(rlSync.prompt());
  console.log("Enter the width of the room in meters: ");
  let width = Number(rlSync.prompt());
  let sq_meters = length * width;
  let sq_feet = sq_meters * SQ_FEET_PER_SQ_M;
  console.log(`The area of the room is ${sq_meters.toFixed(2)} square meters ` +
              `(${sq_feet.toFixed(2)} square feet).`);
}

howBig();
