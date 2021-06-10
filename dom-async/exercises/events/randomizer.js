function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function callback4() {
  console.log('callback4');
}

function callback5() {
  console.log('callback5');
}

function callback6() {
  console.log('callback6');
}

function randomizer(...callbacks) {
  function randomDelay(maxSecs) {
    return Math.floor(Math.random() * maxSecs * 1000);
  }

  for (let idx = 0; idx < n; idx += 1) {
    setTimeout(callbacks[idx], randomDelay(2 * callbacks.length));
    let duo = (idx + 1) * 2; 
    setTimeout(() => { console.log(duo - 1) }, (duo - 1) * 1000);
    setTimeout(() => { console.log(duo) }, (duo) * 1000);
  };
}

randomizer(callback1, callback2, callback3, callback4, callback5, callback6);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6