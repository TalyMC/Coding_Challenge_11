//Task 1 Creating a Book Class
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    };//book details
    updateCopies(quantity) {
        this.copies += quantity;
    }//modifies available copies when book is borrowed or return
};
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//Task 2 Creating a Borrower Class
class Borrower {
    constructor(name, borrowerId, borrowedBooks) {
        this.name = name;
        this. borrowerId = borrowerId;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        this.borrowedBooks.push(book)
    }//adding book to borrowedBooks
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter (libro => libro.isbn !== libro.isbn)
    }//removes book from borrowedBooks
};
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []

//Task 3 Creating a Library Class
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }
    addBook(book) {
        let existingBook = this.books.find(libraryBook => libraryBook.isbn === book.isbn);
        if (!existingBook) {
            this.books.push(book);
        } else {
            console.log(`Holt: Book with this ISBN already exists`);
        }
    } // Adds new book to the library
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    } // Logs all books' details
}
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//Task 4 