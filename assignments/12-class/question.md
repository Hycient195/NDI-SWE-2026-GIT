## Library and Book Rental System

A community wants a digital system for managing books and library members. The system should allow members to borrow and return books while the library keeps track of all availiable and borrowed books.

Using JavaScript classes, build a complete Library Management System that sasifies the requirements below.


Requirements


Part A: Book Class
Create a Book class with the following properties:
> title
> author
> isbn
> yearPublished
> isAvailable

Marks the book as available.
> getBookInfo()
Returns all information about the book.


Part B: Member Class
Create a Member class with the following properties:
> name
> memberId
> borrowedBooks

Implement the following methods:
> borrow(book)
Allows a member to borrow a book.
> returnBook(book)
Allows a member to return a book.
> getBorrowedBooks()
Displays all books currently borrowed by the member.


Part C: Library Class
Create a Library class with the following properties:
> libraryName
> books
> members

Implement the following methods:
> addBook(book)
> removeBook(isbn)
> registerMember(member)
> searchBook(title)
> getAvailableBooks()
> getBorrowedBooks()
> generateLibraryReport()

The report should display:
Library name
Total books
Total available books
Total borrowed books
Total registered members


### Validation
Create:
At least 5 books
At least 3 members

Perform the following actions:
> Register all members.
> Add all books to the library.
> Borrow multiple books.
> Return some books.
> Search for books.
> Generate a final library report.



Key Notes
>> some or more of the methods below would be used.
    map(), filter(), reduce(), find()

>> Remember to add private fields for sensitive information to encapsulate it in the class and only allow access to them using "get" and "set" where appropriate

>> Store dates ad Date Object

>> You may add static properties to track total books created, borrowsed and members registered

>> Use meaningful variable and method names.

>> Add comments where necessary to explain key concepts

>> Handle Errors gracefully