// 1. Basic Function with Global Scope
let globalMessage = "I'm a global variable!";

function sayHello() {
  console.log("Hello, world!");
}

sayHello(); // Outputs: Hello, world!

// Accessing global variable inside a function
function showGlobalMessage() {
  console.log(globalMessage); // Outputs: I'm a global variable!
}

showGlobalMessage(); 

// 2. Function with Parameters and Return Value
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Outputs: Hello, Alice!

// 3. Local Scope
function localScopeExample() {
  let localMessage = "I'm local!";
  console.log(localMessage); // Accessible inside the function
}

localScopeExample();
// console.log(localMessage); // Error: localMessage is not defined outside

// 4. Block Scope with let/const
if (true) {
  let blockScopedVar = "I'm block-scoped!";
  console.log(blockScopedVar); // Outputs: I'm block-scoped!
}

// console.log(blockScopedVar); // Error: blockScopedVar is not defined outside the block
