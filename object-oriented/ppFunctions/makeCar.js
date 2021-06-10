function makeCar(rate, brate) {
  return {
    speed: 0,
    rate,
    accelerate() {
      this.speed += this.rate;
    }, 
    brake() {
      this.speed -= this.brate > this.speed ? this.speed : this.brate; 
    },
  };
}

let hatchback = makeCar(9);