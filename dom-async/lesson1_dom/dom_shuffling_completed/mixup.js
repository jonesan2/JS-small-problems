// move main after header and before footer
document.body.insertBefore(document.querySelector('main'), document.querySelector('footer'));

// move h1 "My Site!" out of main and into header
document.body.firstElementChild.insertBefore(document.querySelector('main h1'), document.querySelector('body header nav'));

// move figures inside article and reverse order
figures = document.querySelectorAll('body main section figure');
art = document.querySelector('body main section article');
art.insertAdjacentElement('beforeend', figures[1]);
art.insertAdjacentElement('beforeend', figures[0]);