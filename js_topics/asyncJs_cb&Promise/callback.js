// Simulate a delay and use a callback
function simulateAsyncCallback(callback) {
    console.log("Starting async task...");
    
    setTimeout(() => {
      const data = { message: "Task completed!" };
      callback(data); // Trigger callback after 2 seconds
    }, 2000);
  }
  
  function displayResult(result) {
    console.log("Callback Result:", result.message);
  }
  
  simulateAsyncCallback(displayResult); // Run with a callback
  