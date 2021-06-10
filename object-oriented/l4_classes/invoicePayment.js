function createInvoice(services = {}) {
  // implement the factory function here
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],
    total() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.payments.push(payment);
    },

    addPayments(paymentArray) {
      paymentArray.forEach(elem => { this.addPayment(elem); });
    },

    amountDue() {
      return this.total() - paymentTotal(this.payments);
    },
  };
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

function createPayment(services = {}) {
  // implement the factory function here
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total() {
      return this.amount || this.phone + this.internet;
    },
  };
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
res = invoice.amountDue();       // this should return 0
console.log(res);