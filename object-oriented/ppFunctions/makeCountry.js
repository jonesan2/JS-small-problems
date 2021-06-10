function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      if (this.visited) {
        sentence2 = 'I have visited ' + this.name + '.';
      } else {
        sentence2 = 'I haven\'t visited ' + this.name + '.';
      }
      return this.name + ' is located in ' + this.continent + '. ' + sentence2;
    },
    visitCountry() {
      this.visited = true;
    },
  };
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');
canada.visitCountry();

res = chile.getDescription();       // "The Republic of Chile is located in South America."
console.log(res);
res = canada.getDescription();      // "Canada is located in North America."
console.log(res);
res = southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."
console.log(res);