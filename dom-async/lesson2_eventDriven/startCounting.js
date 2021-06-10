function startCounting() {
  let n = 1;
  return setInterval(() => {
    console.log(n);
    n += 1;}, 1000);
}

function stopCounting(process) {
  clearInterval(process); 
}

let q = startCounting();
setTimeout(() => { stopCounting(q); }, 10000);