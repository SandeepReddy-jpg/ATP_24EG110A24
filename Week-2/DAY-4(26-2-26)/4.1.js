/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise

  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.

  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/

class Book {
constructor(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
 this.isAvailable = true; // Book is available by default
    }

    borrow() {
        this.isAvailable = false;
    }

    returnBook() {
        this.isAvailable = true;
    }

    getInfo() {
        return `${this.title} by ${this.author} (${this.pages} pages)`;
    }

    isLongBook() {
        return this.pages > 300;
    }
}

// Creating book objects
const books = [
    new Book("Harry Potter", "J K Rowling", 500),
    new Book("1984", "J K L", 280),
    new Book("The Hobbit", "J R R Tolkien", 320),
    new Book("Tested", "Pat Cummins", 314),
    new Book("Wings of Fire", "A P J Abdul Kalam", 210)
];

// Display all book details
books.forEach(book => console.log(book.getInfo()));

// Borrow and return operations
books[2].borrow();  
books[3].borrow();  
books[3].returnBook();

console.log("Availability of The Hobbit:", books[2].isAvailable);
console.log("Availability of Tested:", books[3].isAvailable);

// Count long books
let longBookCount = 0;
books.forEach(book => {
    if (book.isLongBook()) {
        longBookCount++;
    }
});

console.log("Number of books which are long:", longBookCount);

// Display only available books
console.log("Available Books:");
books.forEach(book => {
    if (book.isAvailable) {
        console.log(book.getInfo());
    }
});