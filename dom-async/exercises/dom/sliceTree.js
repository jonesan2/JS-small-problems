function sliceTree(start, end) {
  let result = [];
  let parent = document.getElementById(String(start));
  let lastChild = document.getElementById(String(end));

  if (parent === null || lastChild === null) {
    return undefined;
  }

  let curNode = lastChild;
  while (curNode !== parent && curNode !== null) {
    result.unshift(curNode.tagName); 
    curNode = curNode.parentElement;
  } 

  if (curNode === parent) {
    result.unshift(curNode.tagName);
    return result;
  } else {
    return undefined;
  }
}