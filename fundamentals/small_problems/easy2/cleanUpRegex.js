function cleanUp(str) {
  console.log(str.replace(/([^a-z])+/gi, ' '));
}

cleanUp("---what's my +*& line?");    // " what s my line "
