const divRed = document.querySelector('#red');
const divBlue = document.querySelector('#blue');
const divOrange = document.querySelector('#orange');
const divGreen = document.querySelector('#green');

let tracker = (function () {
  let data = [];
  return {
    list() {
      return data.slice();
    },

    clear() {
      data = [];
      return data.length;
    },

    elements() {
      return this.list().map(event => event.target); 
    },

    add(event) {
      data.push(event);
    },
  }
})();

function track(callback) {
  return function(event) {
    let isNewEvent = !tracker.list().reduce((acc, val) => {
      return acc || val === event;
    }, false);

    if (isNewEvent) {
      tracker.add(event);
    }
    callback(event);
  };
}

divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));