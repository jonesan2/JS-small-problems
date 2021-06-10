function later(func, argum) {
  return function() {
    return func(argum);
  }
}

let logWarning = later(console.log, 'The system is shutting down!');
logWarning();