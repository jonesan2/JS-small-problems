document.addEventListener('DOMContentLoaded', () => {
  let thumbnailList = document.querySelector('ul');
  thumbnailList.addEventListener('click', (event) => {
    if (event.target.tagName !== 'IMG') {
      return;
    }
    let thumbnails = document.querySelectorAll('ul img');
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
    event.target.classList.add('active');
    let largeImage = document.querySelector('figure img');
    largeImage.classList.add('hide');
  });
});