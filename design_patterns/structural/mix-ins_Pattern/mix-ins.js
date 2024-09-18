const loggerMixin = {
    log(message) {
        console.log(`Log: ${message}`);
    }
};

const eventMixin = {
    on(eventName, callback) {
        if (!this.events) this.events = {};
        if (!this.events[eventName]) this.events[eventName] = [];
        this.events[eventName].push(callback);
    },
    
    trigger(eventName, data) {
        if (this.events && this.events[eventName]) {
            this.events[eventName].forEach(callback => callback(data));
        }
    }
};

// We can use Object.assign to copy methods and properties from the mix-in to the target class.

class User {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Apply the mix-ins to the User class
Object.assign(User.prototype, loggerMixin);
Object.assign(User.prototype, eventMixin);

const user = new User('Alice');

// Now the user object has both logging and event-handling capabilities
user.sayHello();            // Hello, my name is Alice
user.log('This is a log');  // Log: This is a log
user.on('login', (data) => console.log(`User logged in with: ${data}`));
user.trigger('login', 'SessionToken123');  // User logged in with: SessionToken123


// Mix-in Methods: The methods log, on, and trigger are defined in loggerMixin and eventMixin respectively.
// Object.assign: This method copies the properties and methods from the mix-ins into the User class's prototype,
//  meaning every instance of User will now have access to these methods.