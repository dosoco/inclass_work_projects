// Topic 2: Do While Loops
// Explanation:
// A do...while loop is similar to a while loop, but it executes the code block at least once before checking the condition, unlike the while loop that checks the condition first.

// When to use:
// Use a do...while loop when:

// You want the loop to execute at least once, regardless of whether the condition is initially true or false.
// The condition to continue the loop is evaluated after the first iteration.
// Example:
// Here's an example of a do...while loop.

let counter = 1;

do {
    console.log(`Iteration ${counter}`);
    counter++;
} while (counter <= 5);

// Even if counter starts greater than 5, the loop body will run at least once.