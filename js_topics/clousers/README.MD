### Closures in JavaScript:

A **closure** in JavaScript occurs when an inner function has access to the variables of its outer function, even after the outer function has finished executing. Closures allow the inner function to "remember" and interact with the environment it was created in, including:

1. **Variables in the outer function's scope.**
2. **Parameters of the outer function.**
3. **Global variables.**

Closures are essential for:

- **Data privacy**: Keeping variables private while exposing only specific methods to interact with them.
- **Maintaining state**: Storing state between function calls.

### Key Characteristics of Closures:

- The inner function has access to variables of its outer function, even after the outer function has returned.
- Useful in functional programming, callbacks, event listeners, and more.