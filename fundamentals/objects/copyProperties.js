function copyProperties(obj1, obj2) {
  for (let prop in obj1) obj2[prop] = obj1[prop];
  console.log(Object.keys(obj1).length);
  return Object.keys(obj1).length;
}


let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
copyProperties(hal, sal);  // 2
console.log(sal);                       // { model: 9000, enabled: true }
