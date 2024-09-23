// Simulate an asynchronous task using Promises
function simulateAsyncPromise() {
    return new Promise((resolve, reject) => {
      console.log("Starting async task...");
      
      setTimeout(() => {
        const success = true; // Toggle to false to simulate an error
        if (success) {
          resolve({ message: "Task completed!" });
        } else {
          reject("Task failed!");
        }
      }, 2000);
    });
  }
  
  simulateAsyncPromise()
    .then((result) => {
      console.log("Promise Result:", result.message);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  