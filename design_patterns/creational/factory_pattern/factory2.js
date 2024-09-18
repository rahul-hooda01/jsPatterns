class CarBuilder {
    constructor() {
      this.car = {};
    }
  
    setEngine(engine) {
      this.car.engine = engine;
      return this; // Allows method chaining
    }
  
    setColor(color) {
      this.car.color = color;
      return this;
    }
  
    build() {
      return this.car;
    }
  }
  
  // Usage:
  const carBuilder = new CarBuilder();
  const car = carBuilder.setEngine('V8').setColor('red').build();
  const bus = carBuilder.setEngine('V9').build();
  console.log(car)
  console.log(bus)