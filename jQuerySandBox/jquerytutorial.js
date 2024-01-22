// What is jQuery?
// Simplifies JavaScript: jQuery abstracts complex operations, making the code shorter and easier to write and understand.
// Cross-browser Compatibility: It handles many of the headaches of cross-browser inconsistencies.
// Extends JavaScript: Adds useful methods and properties to enhance JavaScript's capabilities.
// Using jQuery
// Before using jQuery, you need to include it in your HTML. Usually, it's included via a CDN in the <head> section of your HTML document.

<head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

// Examples of Using jQuery
// Selecting Elements:
// With jQuery, selecting elements becomes much more straightforward.

// Selecting an element with id="myElement"
$('#myElement');

// Selecting elements with class="myClass"
$('.myClass');

// Selecting all <p> elements
$('p');

// Manipulating Elements:
// jQuery makes it easy to manipulate DOM elements.

// Changing the text of an element
$('#myElement').text('New Text');

// Changing the HTML content
$('#myElement').html('<strong>Bold Text</strong>');

// Changing CSS properties
$('#myElement').css('color', 'red');

// Event Handling:
// Handling events is more intuitive with jQuery.

// Click event
$('#myButton').click(function() {
    alert('Button clicked!');
});

// Hover event
$('#myElement').hover(function() {
    $(this).css('color', 'green');
}, function() {
    $(this).css('color', 'black');
});

// Animations and Effects:
// jQuery provides methods for animations and effects.

// Hiding an element
$('#myElement').hide();

// Showing an element
$('#myElement').show();

// Toggling visibility
$('#myElement').toggle();

// Fading out an element
$('#myElement').fadeOut();

// AJAX Calls:
// Making AJAX calls is simplified with jQuery.

$.ajax({
    url: 'https://api.example.com/data',
    type: 'GET',
    success: function(data) {
        console.log('Data retrieved:', data);
    },
    error: function(error) {
        console.error('Error fetching data:', error);
    }
});

// Why Use jQuery?
// Simplicity: jQuery significantly reduces the amount of code you need to write.
// Compatibility: It handles many cross-browser issues for you.
// Community and Plugins: There's a vast array of plugins available, extending its capabilities even further.
// However, it's important to note that with modern advances in vanilla JavaScript and CSS, many tasks that once required jQuery can now be accomplished without it. This has led to a decrease in its usage in favor of native JavaScript, especially in newer projects. Nonetheless, jQuery remains a useful tool, especially for maintaining older projects or for those who prefer its syntax and capabilities.

// 1. Using $ to Replace document.querySelector
// jQuery simplifies the way we select elements from the DOM. The $ function in jQuery is essentially a shortcut for document.querySelector or document.querySelectorAll.

// Example:
// Plain JavaScript
const header = document.querySelector('#header');

// With jQuery
const header = $('#header');

// 2. Importing the jQuery Script
// To use jQuery, you first need to include it in your HTML file. This can be done by adding a script tag pointing to a CDN.

// Example:

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

// 3. Using .click, .text, .val, .append, and .change Methods
// .click(): Binds an event handler to the "click" JavaScript event.
$('#button').click(function() {
    alert('Button clicked!');
});
// .text(): Get the text content of an element or set the text content of an element.
// Get text
const buttonText = $('#button').text();

// Set text
$('#button').text('New Button Text');
// .val(): Get the current value of the first element in the set of matched elements or set the value of every matched element.
// Get value
const inputValue = $('#input').val();

// Set value
$('#input').val('New Value');
// .append(): Insert content to the end of each element in the set of matched elements.
$('#container').append('<p>New Paragraph</p>');
// .change(): Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
$('#selectBox').change(function() {
    alert('Selection changed!');
});

// 4. Local Storage and Session Storage
// Local Storage: Allows you to save key/value pairs in a web browser. Data stored in localStorage has no expiration time.

// Session Storage: Similar to localStorage but with a shorter lifespan. Data in sessionStorage is cleared when the page session ends.

// 5. Using getItem and setItem of localStorage
// setItem: Stores data in localStorage.
localStorage.setItem('key', 'value');
// getItem: Retrieves data from localStorage.
const value = localStorage.getItem('key');

// 6. Utilizing Functions for Modular Code
// Functions allow you to create reusable blocks of code. This makes your code more modular and easier to maintain.

// Example:
function updateLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

// Using the functions
updateLocalStorage('username', 'JohnDoe');
const username = getFromLocalStorage('username');
// By breaking down complex tasks into smaller functions, you can simplify your code and make it easier to understand and debug. This approach is fundamental in programming and is especially useful in larger projects.