// A 'for' loop is a control flow statement in JavaScript that allows you to repeatedly run a block of code as long as a condition is true. The syntax looks like this:

// for (initialization; condition; update) {
    // code to be executed
//   }

//   Initialization: This part is executed before the loop starts. It's often used to declare and initialize a counter variable.

// Condition: The loop continues as long as this condition is true. Once it becomes false, the loop stops.

// Update: This part is executed after each iteration of the loop. It's usually used to increment or decrement the counter variable.

for (let i = 0; i < 5; i++) {
    console.log(i); // Prints 0, 1, 2, 3, 4
  }

// The ++ operator is used to increment a variable by 1, and -- is used to decrement it by 1.
//   let count = 5;
//   count++; // Increment by 1
//   console.log(count); // Prints 6
  
//   let anotherCount = 10;
//   anotherCount--; // Decrement by 1
//   console.log(anotherCount); // Prints 9

// These operators are handy in loops, especially in for loops. They help in controlling the loop and iterating through elements.
  
// for (let i = 0; i < 3; i++) {
//     console.log("Iteration " + (i + 1));
//   }
  // Prints:
  // Iteration 1
  // Iteration 2
  // Iteration 3
//   for (let i = 5; i > 0; i--) {
//     console.log(i); // Prints 5, 4, 3, 2, 1
//   }
// Arrays in JavaScript are zero-indexed, meaning the first element is at index 0. You can use a for loop to iterate through array elements.
const fruits = ["Apple", "Banana", "Orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Prints:
// Apple
// Banana
// Orange


// Nesting Loops

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      console.log(`i: ${i}, j: ${j}`);
    }
  }
  // Prints:
  // i: 0, j: 0
  // i: 0, j: 1
  // i: 1, j: 0
  // i: 1, j: 1
  // i: 2, j: 0
  // i: 2, j: 1
  