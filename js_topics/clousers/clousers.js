// 1. Basic Closure Example
function outerFunction() {
    let message = "Hello from the outer function!"; // Outer variable
    
    function innerFunction() {
      console.log(message); // Accesses outer variable
    }
    
    return innerFunction;
}
  
const closure = outerFunction();
closure(); // Outputs: Hello from the outer function!

// 2. Closure with Private Data and Methods
function createCounter() {
let count = 0; // Private variable

    return {
        increment: function() {
        count++;
        return count;
        },
        reset: function() {
        count = 0;
        return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // Outputs: 1
console.log(counter.increment()); // Outputs: 2
console.log(counter.reset());     // Outputs: 0
  