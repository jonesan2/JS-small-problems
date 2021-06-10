function arrayToNodes(nodes, parent = document.body) {
  // create new node using nodes[0]
  // cycle through nodes[1] and recursively add a child for each element
  let newNode = document.createElement(nodes[0]);
  parent.appendChild(newNode);
  
  nodes[1].forEach((item) => {
    arrayToNodes(item, newNode);
  });
}

// const nodes = ["DIV",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];
// 
// res = arrayToNodes(nodes);
// console.log(res);
// 
// const nodes = ["DIV",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];
// 
// res = arrayToNodes(nodes);
// console.log(res);