let popup = document.querySelector('#popup');
let context = document.querySelector('#context');
let listItem = null;

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  if (event.target.tagName === 'LI' && event.target.parentNode.id === 'todos') {
    if (event.button === 2) {
      context.style.visibility = 'visible';
      context.style.top = String(event.pageY - 20) + 'px';
      context.style.left = String(event.pageX) + 'px';
      listItem = event.target;
    }
  }
})

document.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    popup.style.visibility = 'visible';
    listItem = event.target.parentNode;
  } else if ((event.target.tagName === 'BUTTON' && event.target.id === 'yes') ||
             (event.target.tagName === 'LI' && 
              event.target.parentNode.id === 'options' &&
              event.target.textContent === 'Delete')) {
    listItem.remove();
    listItem = null;
    popup.style.visibility = 'hidden';
    context.style.visibility = 'hidden';
  } else if (event.target.tagName === 'DIV' || event.target.tagName === 'P') {
    listItem = null;
  } else {
    listItem = null;
    popup.style.visibility = 'hidden';
    context.style.visibility = 'hidden';
  }
})