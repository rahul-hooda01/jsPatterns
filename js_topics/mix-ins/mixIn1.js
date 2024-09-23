// Define different mix-ins
const canFly = {
    fly() {
      console.log(`${this.name} is flying.`);
    }
  };
  
  const canSing = {
    sing() {
      console.log(`${this.name} is singing.`);
    }
  };
  
  // Bird class with mixed behaviors
  class Bird {
    constructor(name) {
      this.name = name;
    }
  }
  
  // Apply mix-ins
  Object.assign(Bird.prototype, canFly, canSing);
  
  const parrot = new Bird("Parrot");
  parrot.fly(); // Outputs: Parrot is flying.
  parrot.sing(); // Outputs: Parrot is singing.
  