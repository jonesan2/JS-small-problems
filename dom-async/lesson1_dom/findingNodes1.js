// function walk(node, callback) {
//   callback(node);                           // do something with node
//   for (let index = 0; index < node.childNodes.length; index += 1) { 
//                                             // for each child node
//     walk(node.childNodes[index], callback); // recursively call walk()
//   }
// }
// 
// function getElementsByTagName(doc, tagName) {
//   let elements = [];
//   walk(doc, (node) => {
//     if (node.tagName.toLowerCase() === tagName) {
//       elements.push(node);
//     }
//   });
//   return elements;
// }
// 
// let paragraphs = getElementsByTagName(document, 'p');
// paragraphs.forEach((elem) => elem.classList.add('article-text'));
// 
// console.log(paragraphs);

let divs = Array.from(document.getElementsByTagName('div'));
let intros = divs.filter((div) => div.classList.contains('intro'));
intros.forEach((intro) => {
  Array.from(intro.getElementsByTagName('p')).forEach((par) => {
    par.classList.add('article-text');
  });
});