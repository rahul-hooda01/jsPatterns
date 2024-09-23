### Prototypes in JavaScript:

In JavaScript, every object has an internal property called `[[Prototype]]`, which refers to another object. This object is used as a fallback source of properties if the original object does not have a requested property or method. This is known as **prototypal inheritance**.

Objects can inherit properties and methods from other objects through their **prototype**. Functions, arrays, and objects all have prototypes. The most common way to use prototypes is through constructor functions.

JavaScript uses **prototypes** to implement inheritance, where objects inherit properties from other objects rather than classes (as in class-based programming).

### Key Characteristics:

1. **Prototype Chain**: When you try to access a property or method on an object, JavaScript will first look at the object itself. If it doesn't find the property, it will look up the chain, following the prototype chain.
2. **Inheritance**: Objects can inherit properties and methods from other objects using prototypes.
3. **Efficiency**: Prototypes allow objects to share methods, which saves memory.

### Summary of Prototypes:

- Objects inherit from other objects using the prototype chain.
- You can add methods and properties to an object's prototype, allowing all instances of the object to share the methods.
- Prototypes are the foundation for inheritance in JavaScript and provide an efficient way to share code between objects.