function walk(node, level, callback) {
  callback(node, level);                           // do something with node
  for (let index = 0; index < node.children.length; index += 1) { 
                                            // for each child node
    walk(node.children[index], level + 1, callback); // recursively call walk()
  }
}

function colorGeneration(gen) {
  walk(document.body, 0, (node, level) => {
    if (level === gen && level > 0) {
      node.classList.add('generation-color');
    } 
  });
}