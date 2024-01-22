// 1. 'for...of' Loops:
// The for...of loop is used for iterating over iterable objects, such as arrays, strings, maps, sets, etc. It provides a more concise syntax compared to traditional for loops when you want to iterate over values rather than indices.
const colors = ['red', 'green', 'blue'];

// Using for...of loop to iterate over values
for (const color of colors) {
  console.log(color);
}
// Output: red, green, blue

// In this example, color takes on each value in the colors array one by one. It's especially useful when you don't need the index and just want to work with the values directly.


// 2. Assign Functions to Variables:
// In JavaScript, functions are first-class citizens, which means you can assign them to variables. This is useful when you want to create more flexible and reusable code.

// Example:

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // Assigning the function to a variable
  const greetingFunction = greet;
  
  // Using the variable as a function
  const message = greetingFunction('John');
  console.log(message);
  // Output: Hello, John!

//   In this example, greet is assigned to the variable greetingFunction. Now, you can use greetingFunction as if it were the original greet function.

// This technique is handy when you want to pass functions as arguments to other functions, return functions from functions, or store functions in data structures.

// These principles make your code more readable, concise, and maintainable.



// Challenge 1: 'for...of' Loop
// Objective: Use 'for...of' loop to iterate over an array and perform specific tasks.

// Instructions:

// Create an array of your choice (e.g., favorite foods, numbers, etc.).
// Write a function that takes an array as a parameter and uses 'for...of' loop to log each element to the console.
// Call the function with your created array.

const Foods =['Pizza', 'Chocolate', 'Taco', 'Sushi', 'Tamales']

for(const food of Foods){
    console.log(food)
}



// Challenge 2: Assigning Functions to Variables
// Objective: Assign a function to a variable and use that variable to invoke the function.

// Instructions:

// Create a function that takes a number as a parameter and returns the square of that number.
// Assign the function to a variable called calculateSquare.
// Use the calculateSquare variable to find the square of a given number (e.g., 5) and log the result.
function squareNumber(num){
    return num * num
}
const calculateSquare = squareNumber


console.log(calculateSquare(5))