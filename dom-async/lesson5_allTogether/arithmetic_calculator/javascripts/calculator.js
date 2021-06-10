document.addEventListener('DOMContentLoaded', () => {
  let opEl = document.getElementById('operator');
  let num1El = document.getElementById('first-number');
  let num2El = document.getElementById('second-number');
  let resultEl = document.getElementById('result');
  let form = document.querySelector('form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let op = opEl.value;
    let num1 = Number(num1El.value);
    let num2 = Number(num2El.value);
    let result;
    switch(op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          result = 'ERR';
        } else {
          result = num1 / num2;
        }
        break;
    }
    resultEl.textContent = String(result); 
  });
});
