### Asynchronous JavaScript: Callbacks and Promises

**Asynchronous JavaScript** allows you to perform tasks without blocking the main thread, like making API requests, reading files, or waiting for timers. These tasks take time to complete, and rather than waiting for them, JavaScript uses **callbacks**, **promises**, or **async/await** to handle these tasks asynchronously.

### 1. **Callbacks**

A **callback** is a function that is passed as an argument to another function and is executed after the asynchronous operation is completed. This is one of the original ways to handle asynchronous tasks in JavaScript.

### 2. **Promises**

A **Promise** is an object that represents a value that might not be available yet but will be resolved (or rejected) in the future. It is a modern and cleaner way to handle asynchronous code compared to callbacks.

A promise can be in one of three states:

1. **Pending**: The promise is still being processed.
2. **Resolved**: The promise has been successfully completed.
3. **Rejected**: The promise has failed.


### Summary of Asynchronous JavaScript:

- **Callbacks**: Functions passed as arguments and executed after the asynchronous operation.
- **Promises**: A modern, more readable approach to handle async tasks, replacing callbacks and reducing "callback hell."
- Both are fundamental to working with asynchronous operations like API calls, timers, and events.