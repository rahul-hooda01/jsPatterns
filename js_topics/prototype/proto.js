// 1. Basic Prototype Example with Constructor
function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  Car.prototype.getDetails = function() {
    return `${this.make} ${this.model}`;
  };
  
  const car1 = new Car('Toyota', 'Corolla');
  const car2 = new Car('Honda', 'Civic');
  
  console.log(car1.getDetails()); // Outputs: Toyota Corolla
  console.log(car2.getDetails()); // Outputs: Honda Civic
  
  // 2. Prototype Chain Example
  const baseAnimal = {
    sound: 'Generic sound',
    speak: function() {
      console.log(this.sound);
    }
  };
  
  const cat = Object.create(baseAnimal);
  cat.sound = 'Meow';
  
  const dog = Object.create(baseAnimal);
  dog.sound = 'Bark';
  
  cat.speak(); // Outputs: Meow
  dog.speak(); // Outputs: Bark
  