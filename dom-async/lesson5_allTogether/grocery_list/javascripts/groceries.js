document.addEventListener('DOMContentLoaded', (e) => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e2) => {
    e2.preventDefault();
    let name = document.getElementById('name').value; 
    let quantity = document.getElementById('quantity').value; 
    if (quantity.trim() === '') {
      quantity = '1';
    }
    
    let list = document.getElementById('grocery-list');
    let item = document.createElement('LI');
    item.textContent = quantity + ' ' + name;
    list.appendChild(item);
    form.reset();
  });
});