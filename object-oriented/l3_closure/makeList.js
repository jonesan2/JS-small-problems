function makeList() {
  var todo_list = [];
  return function (item) {
    if (item === undefined) {
      if (todo_list.length === 0) {
        console.log('The list is empty.');
      } else {
        todo_list.forEach(elem => console.log(elem));
      }
    } else {
      idx = todo_list.findIndex(elem => elem === item);
      if (idx === -1) {
        todo_list.push(item);
        console.log(`${item} added!`);
      } else {
        todo_list.splice(idx, 1);
        console.log(`${item} removed!`);
      }
    }
  }
}

let list = makeList();
list();
list('make breakfast');
list('read book');
list();
list('make breakfast');
list();