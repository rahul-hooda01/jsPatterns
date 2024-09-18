const draggableMixin = {
    enableDrag() {
        console.log('Drag enabled');
    },
    disableDrag() {
        console.log('Drag disabled');
    }
};

const resizableMixin = {
    enableResize() {
        console.log('Resize enabled');
    },
    disableResize() {
        console.log('Resize disabled');
    }
};

class Button {
    constructor(label) {
        this.label = label;
    }
    
    click() {
        console.log(`${this.label} button clicked`);
    }
}

class Slider {
    constructor(range) {
        this.range = range;
    }

    slide() {
        console.log(`Slider moved to ${this.range}`);
    }
}

// Mix in draggable and resizable behaviors
Object.assign(Button.prototype, draggableMixin);
Object.assign(Slider.prototype, resizableMixin);

const button = new Button('Submit');
button.click();           // Submit button clicked
button.enableDrag();       // Drag enabled

const slider = new Slider(50);
slider.slide();            // Slider moved to 50
slider.enableResize();     // Resize enabled


// Reusable Behaviors: The draggableMixin and resizableMixin mix-ins provide shared functionality
//  that can be added to the Button and Slider classes.

// Separation of Concerns: The mix-ins are focused on specific tasks (dragging and resizing),
//  allowing the core classes (Button, Slider) to focus on their main responsibilities.