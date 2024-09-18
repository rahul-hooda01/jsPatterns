### **Factory Pattern** (also known as Factory Method):

- **Purpose**: The Factory Pattern is used to create objects without specifying the exact class of the object that will be created.
- **Focus**: It focuses on a single method or class that is responsible for generating an object of a specific type.
- **Implementation**: You define an interface or an abstract class for creating an object, but you let subclasses decide which class to instantiate.

- **summary:**
    
    > It's a function or class that creates objects based on specific inputs or conditions, hiding the complex creation logic from the rest of your code. This makes your code more flexible, easier to change, and less coupled.
    > 
- Defines an interface for creating an object
    - **Description:** Creates objects without specifying the exact class of the object that will be created.
    - Why Use a Factory Pattern?
        - **Decoupling:** Separates object creation from the client code, making it more flexible.
        - **Encapsulation:** Hides the creation logic, making the code cleaner.
        - **Extensibility:** You can easily add new product types without modifying the client code.