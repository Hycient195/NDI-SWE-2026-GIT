// Book class

class Book {
    // tracks how many books have been created
    static totalBooksCreated = 0;

    // this private field prevents external access to an internal class field, used for internal implementations.
    #isAvailable;

    constructor(title, author, isbn, yearPublished) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.yearPublished = new Date(yearPublished);

        this.#isAvailable = true;

            Book.totalBooksCreated++;

    }

    // use the get to allow read access to a property while preventing write access

    get isAvailable() {
       return this.#isAvailable;
    }

    // use the set to allow the write to an internal property of a class, whilst preventing read access to that property

    set isAvailable(status) {
        this.#isAvailable = status;
    }

    // Return complete information about a book
    getBookInfo() {
        return {
            title: this.title,
            author: this.author,
            isbn: this.isbn,
            yearPublished: this.yearPublished.getFullYear(),
            isAvailable: this.#isAvailable

        }
    }
}

// Member class

class Member {
    // tracks total members created
    static totalMembers = 0;

    // private array of borrowed books
    #borrowedBooks;

    constructor(name, memberId) {
        this.name = name;
        this.memberId = memberId;
        this.#borrowedBooks = [];
        
        // used to update the static property of the totalmembers by 1, which belongs to the class itself
        Member.totalMembers++;
    }

    /*
    Allows a member to borrow a book.
    - check if book is available
    - Mark it unavailable
    - Add to members borrowed books
    */

    borrow(book) {
        try {
            if (!book.isAvailable) {
                throw new Error(
                    `${book.title} is currently unavailable`
                );
            }

            // used by the setter to update the private field, before and after returning the book
            book.isAvailable = false; 
            this.#borrowedBooks.push(book);

            console.log(
                `${this.name} borrowed "${book.title}"`
            );
        } catch(err) {
            console.log(err);
        }
    }

      /*
    Allows a member to return a book.
    - Find the book using findIndex(), to find the first element in the array
    - Remove it from borrowed list using splice()
    - Mark book as available again
    */

    returnBook(book) {
        try {
            const index = this.#borrowedBooks.findIndex(
                borrowedBooks => borrowedBooks.isbn === book.isbn
            );

            if (index === -1) {
                throw new Error(
                    `${this.name} did not borrow "${book.title}"`
                );
            }

            this.#borrowedBooks.splice(index, 1);

            book.isAvailable = true;

            console.log(
                `${this.name} returned "${book.title}"`
            );
        } catch(err) {
            console.log(err)
        }
    }

    // Displays all books currently borrowed by the member.
    getBorrowedBooks() {
        return this.#borrowedBooks.map(book => book.title);
    }

     // use the get to allows read access to a property while preventing write access
    get borrowedBooks() {
        return this.#borrowedBooks;
    }

}

// Library class

class Library {

    // private fields
    #books;
    #members;

    constructor(libraryName) {
        this.libraryName = libraryName;

        this.#books = [];
        this.#members = [];
    }

    // Add a new book to the library using push() to add new element to the end of the array

    addBook(book) {
        this.#books.push(book);

        console.log(
            `${book.title} Added to library`
        );
    }

    // Remove the book using isbn

    removeBook(isbn) {
        const bookIndex = this.#books.findIndex(
            book => book.isbn === isbn
        );

        if (bookIndex === -1) {
            console.log("Book not found");
            return;
        }

        this.#books.splice(bookIndex, 1);

        console.log(
            "Book removed successfully"
        );
    }

    // Register a member, but first check if member registered
    registerMember(member) {
        const existingMember = this.#members.find(
            m => m.memberId === member.memberId
        );

        if (existingMember) {
            console.log("Member already registered");
            return;
        }

        this.#members.push(member);

        console.log(`${member.name} registered`);
    }

    // search book by title using find()
    searchBook(title) {
        const result = this.#books.find(
            book => book.title.toLowerCase() === title.toLowerCase()
        );

        return result || "Book not found";
    }

    // Get all available books using filter() to return the element in the array that meets the condition in the callback
    getAvailableBooks() {
        return this.#books.filter(
            book => book.isAvailable
        );
    }

    // Get all borrowed books
    getBorrowedBooks() {
        return this.#books.filter(
            book => !book.isAvailable
        );
    }


    /*
    Generate Library report
    The report should display:
    - Library name
    - Total books
    - Total available books
    - Total borrowed books
    - Total registered members
    */

    generateLibraryReport() {

        const totalBooks = this.#books.length;

        const TotalAvailableBooks = this.getAvailableBooks().length;

        const TotalBorrowedBooks = this.getBorrowedBooks().length;

        const TotalRegisteredMembers = this.#members.length;

        console.log(`
            ============ Library Report =============

            Library Name: ${this.libraryName}

            Total Books: ${totalBooks}

            Total Available Books: ${TotalAvailableBooks}

            Total Borrowed Books: ${TotalBorrowedBooks}

            Total Registered Members: ${TotalRegisteredMembers}

            =========================================
            `);

    }

    // use the get to allow read access to a property while preventing write access
    get books() {
        return this.#books;
    }

    get members() {
        return this.#members;
    }
}

/*
===========================
// create library instance
===========================
*/

const library = new Library("Community Library");

/*
===========================
// create books 
===========================
*/

const book1 = new Book(
    "To Pimp a Butterfly",
    "Ken Reilly",
    "ISBN001",
    2021
);

const book2 = new Book(
    "Javascript Fundamentals",
    "Ben John",
    "ISBN002",
    2023
);

const book3 = new Book(
    "Meditations",
    "Gabi mark",
    "ISBN003",
    2023
);


const book4 = new Book(
    "48 Laws of Power",
    "Grace Smith",
    "ISBN004",
    2024
);


const book5 = new Book(
    "Nodejs Fundamentals",
    "John Doe",
    "ISBN005",
    2026
);


/*
===========================
// create members 
===========================
*/

const member1 = new Member(
    "Ebube",
    "001"
);

const member2 = new Member(
    "Ngozi",
    "002"
);


const member3 = new Member(
    "Mark",
    "003"
);


/*
===========================
// register members 
===========================
*/

library.registerMember(member1);
library.registerMember(member2);
library.registerMember(member3);

/*
===========================
// add books 
===========================
*/

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

/*
===========================
// borrow books 
===========================
*/

member1.borrow(book1)
member2.borrow(book3);
member1.borrow(book4);
member3.borrow(book5);

/*
===========================
// return books 
===========================
*/

member1.returnBook(book1);
member3.returnBook(book5);

/*
===========================
// search books 
===========================
*/

console.log("Search book:", library.searchBook("CSS fundamentals"));
console.log("Search book:", library.searchBook("Real estate guide"));

/*
===========================
// display available books
===========================
*/

console.log("Available books:", library.getAvailableBooks().map(book => book.title));

/*
===========================
// display borrowed books
===========================
*/

console.log("Borrowed books:", library.getBorrowedBooks().map(book => book.title));

/*
===========================
// generate final report
===========================
*/

library.generateLibraryReport();

console.log("Total books created:", Book.totalBooksCreated);
console.log("Total members created:", Member.totalMembers);


/**
 * Methods used
 * 
 * find() - used to search for a book, and returns the first matching item.
 * 
 * filter() - used to get the available books, and returns all matching books.
 * 
 * map() - used to display book titles and tranforms an arry into another array
 * 
 * findIndex() - used when returning a borrowed book, it finds the index before removing with splice()
 * 
 * splice() - used to remove returned book, it Removes the elements from the books array and, returning the deleted element
 */