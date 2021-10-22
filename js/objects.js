(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Jonathan",
        lastName: "Robles"
    }
    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return "Hello, from " + this.firstName + " " + this.lastName + "!";
    }
    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper) {
        var output = "";
        if (shopper.amount > 200){
            var discount = shopper.amount * .12;
            var discountedTotal = shopper.amount - discount;
            output += "Thank you for shopping with us " + shopper.name + "! \n" +
                "SUB TOTAL: " + shopper.amount.toFixed(2) + "\n" +
                "DISCOUNT: " + discount.toFixed(2) + "\n" +
                "TOTAL: " + discountedTotal.toFixed(2);
            console.log(output)
            return output;
        }else {
            output += "Thank you for shopping with us " + shopper.name + "! \n" +
                "TOTAL: " + shopper.amount.toFixed(2);
            console.log(output);
            return output;
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books;
    books =[
        {
            title: "Pride and Prejudice",
            author: {
                firstName: "Jane",
                lastName: "Austen"
            }
        },
        {
            title: 'To Kill a Mockingbird',
            author: {
                firstName: 'Harper',
                lastName: 'Lee',
            }
        },
        {
            title: 'The Da Vinci Code',
            author: {
                firstName: 'Dan',
                lastName: 'Brown',
            }
        },
        {
            title: 'The Hunger Games',
            author: {
                firstName: 'Suzanne',
                lastName: 'Collins',
            }
        },
        {
            title: 'Lord of the Flies',
            author: {
                firstName: 'William',
                lastName: 'Golding',
            }
        }
    ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // for (var j = 0; j < books.length; j++) {
    //     var output;
    //     output = 'Book # ' + (j+1) + '\nTitle: ' + books[j].title + '\nAuthor: ' + books[j].author.firstName + ' ' + books[j].author.lastName + '\n---';
    //     // console.log('Book # ' + (j+1) + '\nTitle: ' + books[j].title + '\nAuthor: ' + books[j].author.firstName + ' ' + books[j].author.lastName + '\n---');
    //     console.log(output);
    //     // return output;
    // }

    books.forEach(function(book,index){
        var output;
        output = "Book #" + (index + 1) + "\n" +
            "Title: " + book.title + "\n" +
            "Author: " + book.author.firstName + " " + book.author.lastName + "\n" +
            "---";
        console.log(output);
        return output;
    })
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     */
    function createBook(title, author){
        var firstName = author.split(" ")[0];
        var lastName = author.split(" ")[1];
        var newBook = {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        }
        console.log(newBook);
        books.push(newBook);
    }
    createBook("The Outsider", "Stephen King");
    console.log(books);
    /**
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function showBookInfo(book, number){
        var output;
        output = "Book #" + number + "\n" +
            "Title: " + book.title + "\n" +
            "Author: " + book.author.firstName + " " + book.author.lastName + "\n" +
            "---";
        console.log(output);
        return output;
    }
    books.forEach(function(book, index){
        showBookInfo(book,index + 1);
    })

})();
