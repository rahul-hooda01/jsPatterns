## ****Proxy Pattern****

The **Proxy Pattern** is a **structural design pattern** that provides a surrogate or placeholder object to control access to another object. This pattern involves creating an interface that the proxy object implements, allowing it to act as an intermediary between the client and the real object.

### Key Characteristics:

1. **Surrogate Object**: The proxy acts as a stand-in for the real object, managing interactions with it.
2. **Control Access**: It can control or manage access to the real object, adding additional functionality or handling tasks like logging, caching, or access control.
3. **Interface Compatibility**: The proxy implements the same interface as the real object, so clients can use the proxy as if it were the real object.

### Types of Proxies:

1. **Virtual Proxy**: Delays the creation of an expensive or resource-intensive object until it is actually needed.
2. **Protection Proxy**: Controls access to the real object by enforcing access control rules, such as authentication and authorization.
3. **Remote Proxy**: Represents an object that is located in a different address space, often used in distributed systems.
4. **Cache Proxy**: Stores results of operations to improve performance by avoiding repeated computations.

---

### Benefits:

1. **Lazy Initialization**: Delays the creation of resource-intensive objects, improving performance and efficiency.
2. **Access Control**: Provides a way to enforce access restrictions or permissions before interacting with the real object.
3. **Enhanced Functionality**: Can add extra features like logging or caching without modifying the real object's code.

### Drawbacks:

1. **Increased Complexity**: Introduces additional classes or objects that can complicate the design.
2. **Performance Overhead**: Adding a proxy can introduce a slight overhead in method calls and interactions.

---

### Summary:

- The **Proxy Pattern** provides an intermediary object that controls access to another object.
- It can manage resource-intensive operations, control access, or add additional functionality.
- By using a proxy, you can improve performance and maintain control over interactions with the real object, though it can add complexity and slight performance overhead.