// 1. Using Promise.all to Process an Array of Promises
// Promise.all is a powerful method in JavaScript that allows you to handle multiple promises concurrently. It takes an array of promises as input and returns a single promise that is fulfilled with an array of the resolved values of the input promises.

// Let's take a scenario where we want to fetch data from multiple APIs simultaneously:
// Example: Fetching data from multiple APIs using Promise.all

const api1 = fetch('https://api.example.com/data1');
const api2 = fetch('https://api.example.com/data2');
const api3 = fetch('https://api.example.com/data3');

Promise.all([api1, api2, api3])
    .then(responses => {
        // Responses is an array containing the resolved values of the promises
        const [data1, data2, data3] = responses.map(response => response.json());
        console.log(data1, data2, data3);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


    // 2. Comparing and Contrasting Promise.all() and Looping Results Separately
    // Using Promise.all() is beneficial when you need to wait for multiple asynchronous operations to complete before proceeding. It ensures that all promises are settled (either resolved or rejected) before the then or catch block is executed.

    // Using Promise.all

const promises = [fetch('url1'), fetch('url2'), fetch('url3')];

Promise.all(promises)
    .then(results => {
        // Handle results
        console.log(results);
    })
    .catch(error => {
        // Handle error
        console.error(error);
    });


    // Looping through results separately might look like this:

    // Looping through promises separately

const promises = [fetch('url1'), fetch('url2'), fetch('url3')];

const results = [];
const errors = [];

promises.forEach(promise => {
    promise
        .then(result => results.push(result))
        .catch(error => errors.push(error));
});

// Process results and errors as needed
console.log(results);
console.error(errors);

// In the loop example, there's no guarantee of the order of results, and you need to handle errors manually.

// 3. Feeding Request Responses into New API Requests
// In scenarios where you need to make sequential API requests based on the results of previous requests, you can chain promises using the then method. Here's an example:

// Chaining API requests

fetch('https://api.example.com/data1')
    .then(response => response.json())
    .then(data1 => {
        // Use data1 and make a new request
        return fetch(`https://api.example.com/newdata/${data1.id}`);
    })
    .then(response => response.json())
    .then(newData => {
        console.log(newData);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    // In this example, we fetch data1 and then use its result to construct a new URL for the second request. The return statement inside the first then block ensures that the next then block receives the result of the second API request.

    // 4. Using and Understanding .gitignore
    // The .gitignore file is used to specify intentionally untracked files that Git should ignore. This is useful for excluding files like build artifacts, logs, or configuration files that are not meant to be versioned.
    
    // Here's a simple example of a .gitignore file:  

    // # .gitignore

// # Ignore node_modules directory
// node_modules/

// # Ignore log files
// *.log

// # Ignore build artifacts
// build/
// dist/
// Explanation:

// node_modules/: Ignores the entire node_modules directory.
// *.log: Ignores all files with the .log extension.
// build/ and dist/: Ignores entire directories named build and dist.
// Adding a .gitignore file helps keep your repository clean and prevents unintended files from being committed, making collaboration and repository management more efficient.