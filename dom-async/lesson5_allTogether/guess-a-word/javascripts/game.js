let randomWord = (function () {
  let words = ['abacus', 'octothorpe', 'proselytize', 'quotient', 'stipend'];
  return function() {
    if (words.length === 0) { return undefined; }
    let idx = Math.floor(Math.random() * words.length);
    return words.splice(idx, 1)[0];
  };
})();

let Game = (function () {
  let body = document.querySelector('body');
  let apples = document.querySelector('#apples');
  let message = document.querySelector('#message');
  let replay = document.querySelector('#replay');
  let spaces = document.querySelector('#spaces');
  let guesses = document.querySelector('#guesses');

  return {
    gameWord: '',
    wrongGuesses: 0,
    maxWrong: 0,
    guessedLetters: [],

    addSpan(element, letter = '') {
      let newSpan = document.createElement('SPAN');
      newSpan.textContent = letter;
      element.appendChild(newSpan);
    },

    removeSpans(parentId) {
      let nodes = parentId.children;
      for (let idx = 0; idx = nodes.length - 1; idx += 1) {
        if (nodes[idx].tagName === 'SPAN') { nodes[idx].remove(); }
      };
    },

    addLetter(letter) {
      for (let idx = 1; idx < spaces.children.length; idx += 1) {
        if (this.gameWord[idx - 1] === letter) {
          spaces.children[idx].textContent = letter;
        }
      }
    },
   
    checkWin() {
      let win = true;
      for (let idx = 1; idx < spaces.children.length; idx += 1) {
        if (spaces.children[idx].textContent === '') { win = false; }
      }
      return win;
    },

    gameEnd(result) {
      body.classList.value = result;
      document.removeEventListener('keypress', this.checkGuessHandler);
      replay.textContent = "Play another";

      if (result === 'win') {
        message.textContent = "You win!";
      } else {
        message.textContent = "Sorry! You're out of guesses.";
      }
    },

    checkGuess(e) {
      if (e.keyCode < 97 || e.keyCode > 122) { return; } // not a letter
      if (this.guessedLetters.includes(e.key)) { return; } // guessed already

      this.guessedLetters.push(e.key);
      this.addSpan(guesses, e.key);
      
      if (this.gameWord.includes(e.key)) { // correct guess
        this.addLetter(e.key);
        if (this.checkWin()) {
          this.gameEnd('win');
        }
      } else { // incorrect guess
        this.wrongGuesses += 1;
        let className = `guess_${this.wrongGuesses}`; 
        apples.classList.value = className;
        if (this.wrongGuesses === this.maxWrong) {
          this.gameEnd('lose');
        }
      }
    },

    bindEventListener() {
      this.checkGuessHandler = (e) => this.checkGuess(e);
      document.addEventListener('keypress', this.checkGuessHandler);
    },
  
    reset() {
      this.bindEventListener(); 
      this.gameWord = randomWord();
      this.wrongGuesses = 0;
      this.guessedLetters = [];

      body.classList.value = '';
      apples.classList.value = '';
      message.textContent = '';
      this.removeSpans(spaces);
      this.removeSpans(guesses);

      if (this.gameWord === undefined) {
        replay.textContent = "Sorry, I've run out of words!";
      } else {
        replay.textContent = '';
        this.gameWord.split('').forEach(() => {
          this.addSpan(spaces);
        });
      }
    },

    init(maxWrongGuesses = 6) {
      this.maxWrong = maxWrongGuesses;
      replay.addEventListener('click', (e) => {
        e.preventDefault();
        this.reset();
      });
      this.reset();
    },
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  Object.create(Game).init();
});