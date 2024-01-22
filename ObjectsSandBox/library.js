let library = []

function addBook(){
let title = prompt("Enter the book title:")
let author = prompt("Enter the author's name:")
let book = {
    title: title,
    author: author
}
library.push(book)
alert("Book added successfully!")
}

function displayBooks(){
let bookList = document.getElementById('bookList')
bookList.innerHTML = ""
library.forEach((book, index) => {
    bookList.innerHTML += (index + 1) + ". " + book.title + " by " + book.author + "<br>"
})
}