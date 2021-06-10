let h2s = Array.from(document.querySelectorAll('h2'));
console.log(h2s.map((elem) => [elem, elem.textContent.split(' ').length]));