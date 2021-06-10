function childsNodes(id) {
  let result = [];
  let kiddos = Array.from(document.getElementById(String(id)).childNodes);
  result[0] = kiddos.length;
  result[1] = kiddos.reduce((grandkids, node) => {
    if (node.id) {
      let cN = childsNodes(Number(node.id));
      return cN[0] + cN[1] + grandkids;
    } else {
      return grandkids;
    }
  }, 0);
  return result;
}