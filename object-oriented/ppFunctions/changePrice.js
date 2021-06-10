function createProduct(name, id, price, stock) {
  return {
    name,
    id,
    price,
    stock,
    setPrice(newPrice) {
      this.price = newPrice;
    },
    describe() {
      console.log(`Name: ${tool.name}`);
      console.log(`ID: ${tool.id}`);
      console.log(`Price: $${tool.price}`);
      console.log(`Stock: ${tool.stock}`);
    },
  };
}

createProduct('Scissors', )