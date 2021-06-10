let Account = function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function anonymize() {
    const LENGTH = 16;
    const CHAR_BANK = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < LENGTH; i += 1) {
      result += CHAR_BANK[Math.floor(Math.random() * Math.floor(CHAR_BANK.length))];   
    }
  };

  function runProtectedFunc(attempt, func, context, ...args) {
    if (this.password === attempt) {
      return func.apply(context, args);
    } else {
      return 'Invalid password';
    }
  };

  // this function has a return value and side effects
  function changeDisplayName() {
    this.displayName = anonymize();
    return true;
  };

  // this function has a return value and side effects
  function changePassword(newPassword) {
    this.password = newPassword; 
    return true;
  };

  function getProp(propName) {
    return this[propName];  
  };

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    reanonymize(attempt) {
      return runProtectedFunc(attempt, changeDisplayName, this);
    },

    resetPassword(attempt, newPassword) {
      return runProtectedFunc(attempt, changePassword, this, newPassword);
    },

    firstName(attempt) {
      return runProtectedFunc(attempt, getProp, this, 'userFirstName');
    },

    lastName(attempt) {
      return runProtectedFunc(attempt, getProp, this, 'userLastName');
    },

    email(attempt) {
      return runProtectedFunc(attempt, getProp, this, 'userEmail');
    },
  };
} ();

const fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

const displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false