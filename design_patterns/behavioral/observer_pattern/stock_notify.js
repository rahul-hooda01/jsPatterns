class Subject {
    constructor() {
        this.observers = [];  // List to store observers
    }

    // Method to add an observer
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Method to remove an observer
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Method to notify all observers of a change
    notifyObservers() {
        this.observers.forEach(observer => observer.update(this));
    }
}

// Concrete Subject (Stock):
class Stock extends Subject {
    constructor(name) {
        super();
        this.name = name;  // Name of the stock
        this.price = 0;    // Initial price of the stock
    }

    // Method to update the stock price and notify observers
    setPrice(price) {
        this.price = price;
        this.notifyObservers();  // Notify observers of the price change
    }

    // Method to get the current stock price
    getPrice() {
        return this.price;
    }

    // Method to get the stock name
    getName() {
        return this.name;
    }
}

// Observer Interface:
class Observer {
    update(subject) {
        throw new Error('This method should be overridden');
    }
}

// Concrete Observer (Investor):
class Investor extends Observer {
    constructor(name) {
        super(); // Calls the constructor of the Observer class
        this.name = name;  // Name of the investor
    }

    // Method to update the investor with the latest stock price
    update(subject) {
        console.log(`${this.name} has been notified. ${subject.getName()} is now $${subject.getPrice()}`);
    }
}

// Usage:
// Create a new stock
const appleStock = new Stock('Apple');

// Create investors
const investor1 = new Investor('Investor 1');
const investor2 = new Investor('Investor 2');

// Add investors as observers to the stock
appleStock.addObserver(investor1);
appleStock.addObserver(investor2);

// Update the stock price, which will notify all observers
appleStock.setPrice(150);  
// Outputs:
// Investor 1 has been notified. Apple is now $150
// Investor 2 has been notified. Apple is now $150

// Remove an observer and update the stock price again
appleStock.removeObserver(investor1);
appleStock.setPrice(155);  
// Outputs:
// Investor 2 has been notified. Apple is now $155


/*
Explanation:
Subject: Manages a list of observers and provides methods to add, remove, and notify them.
Stock: A concrete subject that holds the stock's name and price. It notifies observers when the stock price changes.
Observer: Defines an interface for updating observers.
Investor: Implements the observer interface to receive updates about stock price changes.
Key Points:
The Stock class uses the Observer Pattern to notify Investor objects about price changes.
When the stock price is updated using setPrice, the notifyObservers method is called to alert all registered investors.
Observers are updated dynamically and can be added or removed without changing the stock class or other observers.
*/