class Light {
    turnOn() {
        console.log('Light is on');
    }
    turnOff() {
        console.log('Light is off');
    }
}

class Thermostat {
    setTemperature(temp) {
        console.log(`Temperature set to ${temp}°C`);
    }
}

class SecuritySystem {
    activate() {
        console.log('Security system activated');
    }
    deactivate() {
        console.log('Security system deactivated');
    }
}

// Facade Class:
class HomeAutomationFacade {
    constructor() {
        this.light = new Light();
        this.thermostat = new Thermostat();
        this.securitySystem = new SecuritySystem();
    }

    activateHome() {
        this.light.turnOn();
        this.thermostat.setTemperature(22);
        this.securitySystem.activate();
    }

    deactivateHome() {
        this.light.turnOff();
        this.securitySystem.deactivate();
    }
}

// Usage:
const homeFacade = new HomeAutomationFacade();

homeFacade.activateHome();
// Outputs:
// Light is on
// Temperature set to 22°C
// Security system activated

homeFacade.deactivateHome();
// Outputs:
// Light is off
// Security system deactivated


/*
Suppose you have a complex system with several classes handling different aspects of a home automation system.
The Facade Pattern can be used to provide a simplified interface for controlling the home automation system.

Explanation:
Light, Thermostat, and SecuritySystem: These classes represent a complex subsystem with multiple classes handling different aspects of home automation.
HomeAutomationFacade: The facade provides a simplified interface with methods activateHome and deactivateHome that internally interact with the various subsystem classes.
*/