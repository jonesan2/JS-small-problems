let Prog = {
  hideOver120() {
    Array.from(this.paragraphs).forEach((paragraph) => {
      if (this.paragraphData[paragraph.id].fullText.length <= 120) {
        paragraph.nextElementSibling.style.visibility = 'hidden';
        paragraph.textContent = this.paragraphData[paragraph.id].fullText;
      } else {
        paragraph.textContent = this.paragraphData[paragraph.id].text120;
      }
    });
  },

  toggleText(introDiv) {
    let button = introDiv.querySelector('button');
    let paragraph = introDiv.querySelector('p');
    if (button.textContent === 'Show More') {
      button.textContent = 'Show Less';
      paragraph.textContent = this.paragraphData[paragraph.id].fullText;
    } else {
      button.textContent = 'Show More';
      paragraph.textContent = this.paragraphData[paragraph.id].text120;
    }
  },

  init: function() {
    this.paragraphs = document.querySelectorAll('p');
    this.paragraphData = {};
    let index = 0;
    Array.from(this.paragraphs).forEach((paragraph) => {
      this.paragraphData[`paragraph${index}`] = {
        fullText: paragraph.textContent,
        text120: paragraph.textContent.slice(0, 120) + ' ...',
      };
      paragraph.id = [`paragraph${index}`];
      index += 1;
    });
    this.hideOver120();

    document.querySelector('section').addEventListener('click', (function(event) {
      if (event.target.tagName !== 'BUTTON') {
        return;
      }

      this.toggleText(event.target.parentNode);
    }).bind(this));
  },
}

Prog.init();