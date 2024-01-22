// 1. Understanding Ternary Statements:
// Explanation:
// A ternary statement is a concise way to write an if-else statement in a single line. It's like a shortcut for making decisions in your code.

let isRaining = true
let message

if(isRaining){
    message = "Bring an umbrella"
}else{
    message = "enjoy the sunshine"
}

let message = isRaining ? "Bring an umbrella" : "enjoy the sunshine"

// 2. .push()
// Explanation:
// The push method is used to add one or more elements to the end of an array.

let fruits = ['apple', 'banana', 'orange']
fruits.push('grape', 'kiwi')
// Result: ['apple', 'banana', 'orange', 'grape', 'kiwi']


// 3. .pop()
// Explanation:
// The pop method removes the last element from an array.
let fruits = ['apple', 'banana', 'orange']
let removedFruit = fruits.pop()
// Result: removedFruit = 'orange', fruits = ['apple', 'banana']

// 4. .shift()
// Explanation:
// The shift method removes the first element from an array.
let fruits = ['apple', 'banana', 'orange'];
let removedFruit = fruits.shift();
// Result: removedFruit = 'apple', fruits = ['banana', 'orange']

// 5. .unshift()
// Explanation:
// The unshift method adds one or more elements to the beginning of an array.
let fruits = ['banana', 'orange'];
fruits.unshift('apple', 'kiwi');
// Result: ['apple', 'kiwi', 'banana', 'orange']

// 6. .slice()
// Explanation:
// The slice method creates a new array by extracting a portion of an existing array.
let numbers = [1, 2, 3, 4, 5];
let slicedNumbers = numbers.slice(2, 4);
// Result: slicedNumbers = [3, 4], numbers is unchanged

// 7. .splice()
// Explanation:
// The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements.
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 10, 11);
//First Parameter(number) = index at which you want to insert or delete from the array.
//Second Parameter(number) = number of characters you want to remove starting at the first parameter
//Last Parameters = what new items are being added to the array.
// Result: numbers = [1, 2, 10, 11, 4, 5]

// 8. .split()
// Explanation:
// The split method is used to split a string into an array of substrings based on a specified separator.
let sentence = "Hello, how are you?";
let words = sentence.split(' ');
// Result: words = ['Hello,', 'how', 'are', 'you?']

// 9. .join()
// Explanation:
// The join method is used to create a string from the elements of an array, with a specified separator.
let words = ['Hello,', 'how', 'are', 'you?'];
let sentence = words.join(' ');
// Result: sentence = 'Hello, how are you?'

// 10. .indexOf()
// Explanation:
// The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let fruits = ['apple', 'banana', 'orange'];
let index = fruits.indexOf('banana');
// Result: index = 1

// 11. .concat()
// Explanation:
// The concat method is used to merge two or more arrays, creating a new array.
let fruits1 = ['apple', 'banana'];
let fruits2 = ['orange', 'kiwi'];
let allFruits = fruits1.concat(fruits2);
// Result: allFruits = ['apple', 'banana', 'orange', 'kiwi']
