function objectHasProperty(obj, prop) {
  console.log(obj.hasOwnProperty(prop));
  return obj.hasOwnProperty(prop);
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true
