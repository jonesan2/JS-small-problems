let invoices = {
  unpaid: [],
  add(name, amount) {
    this.unpaid.push({
      name,
      amount,
    });
  },
  totalDue() {
    return this.unpaid.reduce((acc, elem) => {
      return acc + elem.amount; 
    }, 0);
  },
  paid: [],
  payInvoice(name) {
    let newUnpaid = [];
    this.unpaid.forEach(inv => {
      if (inv.name === name) {
        this.paid.push(inv);
      } else {
        newUnpaid.push(inv);
      }
    });
    this.unpaid = newUnpaid;
  },
  totalPaid() {
    return this.paid.reduce((acc, elem) => {
      return acc + elem.amount; 
    }, 0);
  }
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.totalDue());
invoices.payInvoice('Slough Digital');
invoices.payInvoice('Due North Development');
console.log(invoices.totalDue());
console.log(invoices.totalPaid());
