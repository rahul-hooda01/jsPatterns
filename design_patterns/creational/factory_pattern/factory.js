class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.type = 'Car';
  }

  drive() {
    console.log(`Driving a ${this.brand} ${this.model} car.`);
  }
}

class Bike {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.type = 'Bike';
  }

  ride() {
    console.log(`Riding a ${this.brand} ${this.model} bike.`);
  }
}

class Truck {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.type = 'Truck';
  }

  haul() {
    console.log(`Hauling with a ${this.brand} ${this.model} truck.`);
  }
}

class VehicleFactory {
  static createVehicle(type, brand, model) {
    switch (type) {
      case 'car':
        return new Car(brand, model);
      case 'bike':
        return new Bike(brand, model);
      case 'truck':
        return new Truck(brand, model);
      default:
        throw new Error('Invalid vehicle type');
    }
  }
}

const myCar = VehicleFactory.createVehicle('car', 'Toyota', 'Corolla');
const myBike = VehicleFactory.createVehicle('bike', 'Yamaha', 'MT-07');
const myTruck = VehicleFactory.createVehicle('truck', 'Ford', 'F-150');

console.log('') // for clear view in terminal
myCar.drive(); // Output: Driving a Toyota Corolla car.
myBike.ride(); // Output: Riding a Yamaha MT-07 bike.
myTruck.haul(); // Output: Hauling with a Ford F-150 truck.
console.log('') // for clear view in terminal

  