// 1. Synchronous vs. Asynchronous Code:
// Explanation:

// Synchronous Code:

// In synchronous code, tasks are executed one after another, in a sequence. Each task waits for the previous one to finish before starting.

// Use Case:

// Useful when the next step in your program relies on the result of the previous one.
// Asynchronous Code:

// In asynchronous code, tasks can be initiated and continue without waiting for the previous ones to complete. The program doesn't halt; it proceeds to the next task while waiting for certain operations to finish.

// Use Case:

// Ideal for handling tasks that take time, like reading files, making API requests, or waiting for user input.

// Synchronous Code
function synchronousTask() {
    console.log("Start");
    console.log("Middle");
    console.log("End");
  }
  
  synchronousTask();
  
  // Asynchronous Code
  function asynchronousTask() {
    console.log("Start");
  
    setTimeout(() => {
      console.log("Middle (Async)");
    }, 1000);
  
    console.log("End");
  }
  
  asynchronousTask();

//   2. Promises and .then() Method:
// Explanation:

// Promise:
// A promise is an object representing the eventual completion or failure of an asynchronous operation. It is used to handle asynchronous code more elegantly.

// Example:
  
  let fetchData = new Promise((resolve, reject) => {
    // Asynchronous operation (e.g., API request)
    if (operationSuccessful) {
      resolve(data); // If successful
    } else {
      reject(error); // If an error occurs
    }
  });
  
  fetchData.then(data => {
    // Code to execute when the promise is resolved
  }).catch(error => {
    // Code to handle errors
  });
  
//   3. Callback Hell:
// Explanation:

// Callback Hell (Pyramid of Doom):
// Callback hell refers to the situation when you have multiple nested callbacks within each other, making the code hard to read and maintain.

// Example:
fetchData1(() => {
  fetchData2(() => {
    fetchData3(() => {
      // ...and so on
    });
  });
});

// 4. Nested Asynchronous Code vs. Promises:
// Explanation:

// Nested Asynchronous Code:

// When dealing with multiple asynchronous operations, nested callbacks can lead to callback hell. It's hard to read and prone to errors.

// Example:
fetchData1(() => {
  fetchData2(() => {
    // ...nested callbacks
  });
});
// Promises:

// Promises provide a more structured and readable way to handle asynchronous operations. They allow you to chain .then() methods, improving readability and reducing nesting.

// Example:
fetchData1()
  .then(() => fetchData2())
  .then(() => fetchData3())
  .then(() => {
    // ...code after all operations
  })
  .catch(error => {
    // ...handle errors
  });

//   5. Reading API Docs:
// Explanation:

// API Documentation:
// API documentation provides information on how to interact with a particular API. Look for details on available endpoints, request methods, parameters, and response formats.

// Steps:

// Endpoint:
// Identify the endpoint you want to access. It's like the URL for a specific functionality.
// Request Method:
// Check which HTTP method (GET, POST, etc.) is used to interact with the endpoint.
// Parameters:
// Determine if any parameters are required or optional for the request.
// Response Format:
// Understand the format in which the API will return data (JSON, XML, etc.).
// Example:

// If you want to fetch user data, the API documentation might have an endpoint like /users with the method GET, and it may require parameters like userId. The response could be in JSON format.
// API Request using Fetch API
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => {
    // Process data from the API response
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });

