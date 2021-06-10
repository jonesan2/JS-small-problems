function isItemAvailable(item, transactions) {
  quantity = transactionsFor(item, transactions)
          .reduce((acc, elem) => elem.movement === 'in' ? acc + elem.quantity : acc - elem.quantity, 0);  
  if (quantity > 0) { return true; }
  else { return false; }
}

function transactionsFor(id, items) {
  return items.filter(item => item.id === id);
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

res = isItemAvailable(101, transactions);     // false
console.log(res);
res = isItemAvailable(105, transactions);     // true
console.log(res);
