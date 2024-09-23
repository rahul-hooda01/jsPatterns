// 1. Basic Mix-in Example
const canJump = {
    jump() {
      console.log(`${this.name} is jumping.`);
    }
  };
  
  const canRun = {
    run() {
      console.log(`${this.name} is running.`);
    }
  };
  
  // Dog class
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  // Apply mix-ins
  Object.assign(Dog.prototype, canJump, canRun);
  
  // Create a Dog instance
  const buddy = new Dog("Buddy");
  
  buddy.jump(); // Outputs: Buddy is jumping.
  buddy.run();  // Outputs: Buddy is running.
  