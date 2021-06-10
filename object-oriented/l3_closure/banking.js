function makeBank() {
  function makeAccount(acctNum) {
    let bal = 0;
    let transactionsArray = [];
    const accountNumber = acctNum;
    return {
      balance() {
        return bal;
      },
  
      number() {
        return accountNumber;
      },
  
      transactions() {
        return transactionsArray;
      },
  
      deposit(value) {
        bal += value;
        transactionsArray.push({
          type: 'deposit',
          amount: value,
        });
        return bal;
      },
      withdraw(value) {
        actual = bal < value ? bal : value;
        bal -= actual;
        transactionsArray.push({
          type: 'withdrawal',
          amount: actual,
        });
        return actual;
      },
    };
  }

  currentAccountNum = 101;
  accounts = [];
  return {
    openAccount() {
      newAccount = makeAccount(currentAccountNum); 
      currentAccountNum += 1;
      accounts.push(newAccount);
      return newAccount;
    },
    transfer(src, dest, amt) {
      realAmt = src.balance < amt ? src.balance : amt;
      src.withdraw(realAmt);
      dest.deposit(realAmt);
      return realAmt; 
    },
  }
}
