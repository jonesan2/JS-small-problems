function nodesToArr(topNode = document.body) {
  let result = [topNode.tagName, []];
  Array.from(topNode.children).forEach((node) => {
    result[1].push(nodesToArr(node));
  });
  return result; 
}