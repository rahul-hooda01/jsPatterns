// Target object to be protected by the proxy
const product = {
    name: "Laptop",
    price: 1000
  };
  
  // Proxy with validation
  const productProxy = new Proxy(product, {
    // Intercept setting of properties
    set(target, property, value) {
      if (property === "price") {
        if (typeof value !== "number" || value <= 0) {
          throw new Error("Price must be a positive number.");
        }
      }
  
      if (property === "name") {
        if (typeof value !== "string" || value.trim() === "") {
          throw new Error("Product name must be a non-empty string.");
        }
      }
  
      target[property] = value;
      return true; // Indicate success
    }
  });
  
  try {
    productProxy.name = "Smartphone"; // Works fine
    productProxy.price = 500;         // Works fine
    console.log(productProxy);        // Output: { name: 'Smartphone', price: 500 }
  
    productProxy.price = -10;         // Error: Price must be a positive number.
  } catch (err) {
    console.error(err.message);
  }
  