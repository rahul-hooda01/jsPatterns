// Third-party logging library
class Logger {
    log(message) {
        console.log(message);
    }
}

// Decorator that extends the Logger
class TimestampLogger {
    constructor(logger) {
        this.logger = logger;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logger.log(`[${timestamp}] ${message}`);
    }
}


// Using the original Logger
const logger = new Logger();

// Extending the Logger with Timestamp functionality
const timestampLogger = new TimestampLogger(logger);

// Logging messages with timestamp
timestampLogger.log("This is a log message.");  
// Output: [2024-09-11T12:00:00.000Z] This is a log message.

timestampLogger.log("Another message with timestamp.");  
// Output: [2024-09-11T12:01:00.000Z] Another message with timestamp.
