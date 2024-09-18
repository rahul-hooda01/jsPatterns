// A Logger class is created as a singleton.
// The log method appends messages to an internal logs array (in a real-world scenario, you'd write to a file or database).
// By using the Logger singleton, all parts of your application can access the same log instance, ensuring consistent logging behavior.

class Logger {
    static instance;
  
    constructor() {
      if (Logger.instance) {
        return Logger.instance;
      }
  
      Logger.instance = this;
      this.logs = [];
    }
  
    log(message) {
      this.logs.push(message);
      console.log(message); // For demonstration purposes
    }
  
    static getInstance() {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
  }
  
  const logger1 = Logger.getInstance();
  logger1.log("First log message");
  
  const logger2 = Logger.getInstance();
  logger2.log("Second log message");

  // console.log(logger2.logs); // Output: true
  
  console.log(logger1 === logger2); // Output: true
  