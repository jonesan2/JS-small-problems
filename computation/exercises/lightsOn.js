"use strict";

function lightsOn(switches) {
  // ...
  
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on


// Input: positive integer (return null if not)
// Output: array of switch numbers left on

// Data Structures:
//   array of booleans representing switches
//
// Algorithm:
//   --guard clause for bad inputs
//   --create array of booleans initialized to false
//     --new constructor
//     --fill
//   --execute toggles
//     --for loop with n cycles
//       --while loop with curSwitch indicator that starts at cycle number
//       --  and ends when the next switch number would be greater than n
//   --forEach loop on boolean array pushing indexes into result array

function lightsOn(n) {
  if (!Number.isInteger(n) || n < 1) {
    return null;
  }

  let switchArray = new Array(n);
  switchArray.fill(false);

  for (let round = 1; round <= n; round += 1) {
    let curSwitch = round - 1;
    while (curSwitch < n) {
      switchArray[curSwitch] = !switchArray[curSwitch];
      curSwitch += round;
    }
  }

  return switchArray.map((elem, idx) => {
    if (elem) {
      return idx + 1; 
    }
  }).filter(elem => !!elem);

}

let res = lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(res);
res = lightsOn(3);        // [1]
console.log(res);
res = lightsOn();         // null
console.log(res);
res = lightsOn(0);        // null
console.log(res);