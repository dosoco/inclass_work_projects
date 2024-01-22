// What are Template Literals?
// Template literals are a way to work with strings in a more flexible and convenient manner. They were introduced in ECMAScript 6 (ES6) and are denoted by backticks ( ) instead of single or double quotes.

// Key Features:
// String Interpolation:
// Template literals allow you to embed expressions inside the string using ${}. This makes it easy to include variables and expressions directly in the string.

const name = 'John';
const greeting = `Hello, ${name}!`;
console.log(greeting);
// Output: Hello, John!

// Multiline Strings:
// With template literals, you can create multiline strings without needing to use escape characters or concatenation.
const multilineString = `This is
a multiline
string.`;
console.log(multilineString);
/*
Output:
This is
a multiline
string.
*/

// Expression Evaluation:
// Inside ${}, you can include any valid JavaScript expression, not just variables.
const a = 5;
const b = 10;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum);
// Output: The sum of 5 and 10 is 15.

// Use Cases:
// Dynamic Strings:
// When you need to create strings dynamically based on variables or expressions.
const username = 'Alice';
const welcomeMessage = `Welcome back, ${username}!`;

// Complex String Compositions:
// When you need to include expressions, calculations, or function calls directly within a string.
const price = 19.99;
const quantity = 3;
const totalPrice = `Total: $${price * quantity}`;

// Compatibility:
// Template literals are supported in all modern browsers, including Chrome, Firefox, Safari, Edge, and others. However, if you need to support older browsers, consider using a transpiler like Babel to convert modern JavaScript features into an older version.

// In summary, template literals offer a more powerful and expressive way to work with strings in JavaScript. They make your code more readable, concise, and flexible. Incorporate them into your coding practices to enhance your JavaScript development experience.