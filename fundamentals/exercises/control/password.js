function passwordCheck() {
  let passwd = 'beans';
  
  let rlSync = require('readline-sync');
  for (let i = 1; i <= 3; i++) {
    let guess = rlSync.question('What is the password: ');
    if (guess === passwd) {
      console.log('You have successfully logged in.');
      return;
    }
  }
  console.log('You have been denied access.');
  return;
}

passwordCheck();
