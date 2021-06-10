function makeList() {
  return {
    todos: [],
    add(item) {
      this.todos.push(item);
      console.log(`${item} added!`);
    },
    remove(item) {
      idx = this.todos.findIndex(elem => elem === item);
      this.todos.splice(idx, 1);
      console.log(`${item} removed!`);
    },
    list(){
      this.todos.forEach(elem => console.log(elem));
    },
  };
}

let list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();
console.log(list.todos);