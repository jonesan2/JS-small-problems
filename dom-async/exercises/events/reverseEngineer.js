document.querySelector('html').addEventListener('click', () => {
  let element = target;
  let hide = true;
  while (element) {
    if (element.id === 'container') {
      hide = false; 
      break;
    }
    element = element.parentElement;
  }
  if (hide) {
    document.querySelector('#container').style = 'display: none';
  }
});

document.querySelector('#container').addEventListener('click', event => {
  // event.stopPropagation();
});