function incrementProperty(obj, prop) {
  console.log(prop);
  if (Object.keys(obj).includes(prop)) obj[prop]++;
  else obj[prop] = 1;
  console.log(obj[prop]);
}

let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
console.log(wins); 

