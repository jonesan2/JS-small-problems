function isChild(elem1, elem2) {
  let curNode = elem1;
  while (curNode !== null) {
    if (curNode === elem2) {
      return true; 
    } else {
      curNode = curNode.parentNode;
    }
  }
  return false;
}

function nodeSwap(id1, id2) {
  const elem1 = document.getElementById(String(id1));
  const elem2 = document.getElementById(String(id2));

// could also use the Node.contains() method to identify a descendant
  if (!elem1 || !elem2 || elem1 === elem2
      || isChild(elem1, elem2) || isChild(elem2, elem1)) {
    return undefined;
  }

  const dumNode = document.createElement("DIV");
  elem1.insertAdjacentElement('beforebegin', dumNode);
  elem2.insertAdjacentElement('beforebegin', elem1);
  dumNode.insertAdjacentElement('beforebegin', elem2);
  dumNode.remove();
}