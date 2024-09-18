// Abstract Factory Pattern

class Dog {
    makeSound() {
      return 'Woof!';
    }
  }
  
  class Cat {
    makeSound() {
      return 'Meow!';
    }
  }
  
  class AnimalFactory {
    createAnimal() {}
  }
  
  class WildAnimalFactory extends AnimalFactory {
    createAnimal() {
      return new Dog(); // Wild animal is a dog in this case
    }
  }
  
  class DomesticAnimalFactory extends AnimalFactory {
    createAnimal() {
      return new Cat(); // Domestic animal is a cat
    }
  }
  
  // Client code
  function getAnimal(factory) {
    return factory.createAnimal();
  }
  
  const wildAnimalFactory = new WildAnimalFactory();
  const domesticAnimalFactory = new DomesticAnimalFactory();
  
  const wildAnimal = getAnimal(wildAnimalFactory);
  const domesticAnimal = getAnimal(domesticAnimalFactory);
  
  console.log(wildAnimal.makeSound()); // Woof!
  console.log(domesticAnimal.makeSound()); // Meow!
  