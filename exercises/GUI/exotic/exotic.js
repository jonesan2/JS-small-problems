document.addEventListener('DOMContentLoaded', () => {
  let photosElement = document.querySelector('script[id="photos"]');
  let tmplScript = Handlebars.compile(photosElement.innerHTML);
  let photos = { photos: [
    { 
      src: 'images/blackbuck.jpg',
      id: 1,
      caption: "Quetzal are found in forests and woodlands, especially in humid highlands, with the five species from the genus Pharomachrus being exclusively Neotropical, while the single Euptilotis species is found in Mexico and very locally in southern United States",
    },
    { 
      src: 'images/genet.jpg',
      id: 2,
      caption: "Quetzal are found in forests and woodlands, especially in humid highlands, with the five species from the genus Pharomachrus being exclusively Neotropical, while the single Euptilotis species is found in Mexico and very locally in southern United States",
    },
    { 
      src: 'images/golden_pheasant.jpg',
      id: 3,
      caption: "Quetzal are found in forests and woodlands, especially in humid highlands, with the five species from the genus Pharomachrus being exclusively Neotropical, while the single Euptilotis species is found in Mexico and very locally in southern United States",
    },
    { 
      src: 'images/greater_bird_of_paradise.jpg',
      id: 4,
      caption: "Quetzal are found in forests and woodlands, especially in humid highlands, with the five species from the genus Pharomachrus being exclusively Neotropical, while the single Euptilotis species is found in Mexico and very locally in southern United States",
    },
    { 
      src: 'images/lined_butterflyfish.jpg',
      id: 5,
      caption: "Quetzal are found in forests and woodlands, especially in humid highlands, with the five species from the genus Pharomachrus being exclusively Neotropical, while the single Euptilotis species is found in Mexico and very locally in southern United States",
    },
    { 
      src: 'images/quetzal.jpg',
      id: 6,
      caption: "Quetzal are found in forests and woodlands, especially in humid highlands, with the five species from the genus Pharomachrus being exclusively Neotropical, while the single Euptilotis species is found in Mexico and very locally in southern United States",
    },
    { 
      src: 'images/rainbow_lorikeet.jpg',
      id: 7,
      caption: "Quetzal are found in forests and woodlands, especially in humid highlands, with the five species from the genus Pharomachrus being exclusively Neotropical, while the single Euptilotis species is found in Mexico and very locally in southern United States",
    },
    { 
      src: 'images/vampire_squid.jpg',
      id: 8,
      caption: "Quetzal are found in forests and woodlands, especially in humid highlands, with the five species from the genus Pharomachrus being exclusively Neotropical, while the single Euptilotis species is found in Mexico and very locally in southern United States",
    },
  ]};
  let photosHTML = tmplScript(photos);
  let photosContainer = document.querySelector('#container');
  photosContainer.innerHTML = photosHTML;

  let timer;
  photosContainer.addEventListener('mouseover', (event) => {
    if (event.target.tagName !== 'IMG') {
      return;
    }

    timer = setTimeout(() => {
      event.target.nextElementSibling.style.visibility = 'visible';
    }, 2000);
  });

  photosContainer.addEventListener('mouseout', (event) => {
    if (event.target.tagName !== 'IMG') {
      return;
    }

    event.target.nextElementSibling.style.visibility = 'hidden';
    if (timer) {
      clearTimeout(timer);
    }
  });
});