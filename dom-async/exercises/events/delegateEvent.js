function delegateEvent(parentElement, selector, eventType, callback) {
  if (parentElement instanceof Element) {
    parentElement.addEventListener(eventType, (event) => {
      const selected = Array.from(document.querySelectorAll(selector));
      if (selected) {
        selected.forEach((elem) => {
          if (parentElement.contains(elem) && parentElement !== elem && event.target === elem) { 
            callback(event.target, event.currentTarget);
          }
        });
      }
    });
    return true;
  } else {
    return undefined;
  }
}

// Possible elements for use with the scenarios
const element1 = document.querySelector('table');
const element2 = document.querySelector('main h1');
const element3 = document.querySelector('main');

// Possible callback for use with the scenarios
const callback = (target, currentTarget) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};

// tests 1-5
// console.log(delegateEvent(element1, 'p', 'click', callback));
// console.log(`final: ${delegateEvent(element2, 'p', 'click', callback)}`); 
// console.log(delegateEvent(element2, 'h1', 'click', callback)); 
// console.log(delegateEvent(element3, 'h1', 'click', callback));
// console.log(delegateEvent(element3, 'aside p', 'click', callback));

// test 6
// console.log(delegateEvent(element2, 'p', 'click', callback));
// const newP = document.createElement('P');
// const newContent = document.createTextNode('New Paragraph');
// newP.appendChild(newContent);
// element2.appendChild(newP);
