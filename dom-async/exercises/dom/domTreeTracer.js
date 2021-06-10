function domTreeTracer(id) {
  let result = [];
  let currentNode = document.getElementById(String(id));

  while (currentNode.id !== '1') {
    result.push(currentNode.parentNode.children);
    currentNode = currentNode.parentNode;  
  }

  result.push(currentNode.parentNode.children);
  return result;
}
