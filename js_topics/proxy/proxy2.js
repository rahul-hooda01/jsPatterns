// Target object (for sensitive data)
const sensitiveData = {
    apiKey: "12345-ABCDE",
    userData: { name: "John", age: 25 }
  };
  
  // Proxy for logging and access control
  const loggingProxy = new Proxy(sensitiveData, {
    get(target, property) {
      console.log(`Accessing ${property}`);
      if (property === "apiKey") {
        throw new Error("Unauthorized access to API key!");
      }
      return target[property];
    },
    
    set(target, property, value) {
      console.log(`Setting ${property} to ${value}`);
      target[property] = value;
      return true;
    }
  });
  
  try {
    console.log(loggingProxy.userData);   // Logs: Accessing userData, returns the userData object
    loggingProxy.userData.age = 30;       // Logs: Setting age to 30
    loggingProxy.apiKey;                  // Throws error: Unauthorized access to API key!
  } catch (err) {
    console.error(err.message);           // Logs the unauthorized access error
  }
  