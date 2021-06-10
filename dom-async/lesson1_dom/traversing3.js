let tocLinks = Array.from(document.querySelectorAll('#toc li a'));
tocLinks.forEach((link) => {
  if (Number(link.textContent.split(/[. ]/)[0]) % 2 !== 0) {
    link.style.color = 'green';
  }
});
