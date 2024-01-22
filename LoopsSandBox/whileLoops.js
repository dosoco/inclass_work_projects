// Topic 1: While Loops
// Explanation:
// A while loop in JavaScript repeatedly executes a block of code as long as a specified condition is true. It's often used when the number of iterations is not known beforehand.

// When to use:
// Use a while loop when:

// The number of iterations is not predetermined.
// You need to loop until a certain condition is met, which is not necessarily tied to a counter.
// Example:
// Here's a basic example of a while loop.

let counter = 1;

while (counter <= 5) {
    console.log(`Iteration ${counter}`);
    counter++;
}

// This loop will print "Iteration 1" to "Iteration 5". It stops executing when counter becomes 6, making the condition counter <= 5 false.