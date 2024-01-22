// Topic 3: Avoiding Infinite Loops
// Explanation:
// Infinite loops occur when the loop's condition always evaluates to true, causing the loop to run indefinitely. This can freeze or crash the program.

// Tips to Avoid Infinite Loops:

// Ensure the loop condition is correctly written and will eventually become false.
// Update the variables involved in the condition within the loop.
// Be cautious with complex conditions or multiple variables.
// Example:
// Here's a while loop that avoids an infinite loop by correctly updating the counter and having a clear exit condition.

let counter = 1;

while (counter <= 5) {
    console.log(`Iteration ${counter}`);
    // Correctly updating the counter is crucial to avoid an infinite loop
    counter++;
}

// If counter++ were omitted, this loop would run indefinitely, as counter would always be 1, making counter <= 5 always true.

// By understanding these concepts and following best practices, you can effectively use loops in JavaScript to control the flow of your programs. Remember to always have a clear exit condition to avoid infinite loops!