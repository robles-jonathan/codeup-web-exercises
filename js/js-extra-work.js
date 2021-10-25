'use strict';
(function () {

// Less Than 100

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
    /*
    EXAMPLES
    lessThan100(22, 15) ➞ true
    // 22 + 15 = 37

    lessThan100(83, 34) ➞ false
    // 83 + 34 = 117

    lessThan100(3, 77) ➞ true
    */
    function lessThan100(x, y) {
        return (x + y < 100);
    }

    console.log(lessThan100(22, 15));
    console.log(lessThan100(83, 34));
    console.log(lessThan100(3, 77));

// Area of a Triangle
    /*
    Write a function that takes the base and height of a triangle and return its area.

        Examples
    triArea(3, 2) ➞ 3

    triArea(7, 4) ➞ 14

    triArea(10, 10) ➞ 50

     */

    function triArea(base, height) {
        return ((base * height) / 2);
    }

    console.log(triArea(3, 2));
    console.log(triArea(7, 4));
    console.log(triArea(10, 10));


    //Bitwise Operations
    /*
    A decimal number can be represented as a sequence of bits. To illustrate:

        6 = 00000110
    23 = 00010111
    From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

        bitwiseAND(6, 23) ➞ 00000110

    bitwiseOR(6, 23) ➞ 00010111

    bitwiseXOR(6, 23) ➞ 00010001
    Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

        Examples
    bitwiseAND(7, 12) ➞ 4

    bitwiseOR(7, 12) ➞ 15

    bitwiseXOR(7, 12) ➞ 11
    Notes
    JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.

     */

    function bitwiseAND(n1, n2) {
        return n1 & n2;
    }

    function bitwiseOR(n1, n2) {
        return n1 | n2;
    }

    function bitwiseXOR(n1, n2) {
        return n1 ^ n2;
    }


    /*
     * Title: JS Objects Practice
     * Author: Ryan Orsinger
     * Topics: JS Objects, arrays, writing methods, iteration
     */


// Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}
    function makeCar(make, model) {
        console.log({make: make, model: model});
        return {make: make, model: model}
    }

    makeCar("VW", "Beetle")

// Exercise 2. Use the following data to create an object named salesReport.
//     The object should have the following properties:
//       title, date, office, and employees.
//       the employees property should hold an array of objects.
//       each employee should be represented by an object with the following properties:
//         employee-number, first-name, last-name, sales-units
//
// Monthly Sales Report
// Date: 03-17-2015
// Office: Codeup
// ===================================================
// Employee Number, First Name, Last Name, Sales Units
// ***************************************************

    var salesReport = {
        title: "Monthly Sales Report",
        date: "03-17-2015",
        office: "Codeup",
        employees: [
            // 1, Jane, Janeway, 3
            {
                employeeNumber: 1,
                firstName: "Jane",
                lastName: "Janeway",
                salesUnits: 3
            },
            // 3, Tricia, Triciason, 5
            {
                employeeNumber: 1,
                firstName: "Jane",
                lastName: "Janeway",
                salesUnits: 3
            },
            // 4, Jeannette, Jeanson, 4
            {
                employeeNumber: 1,
                firstName: "Jane",
                lastName: "Janeway",
                salesUnits: 3
            },
            // 5, Charles Emmerson III, Winchester, 2
            {
                employeeNumber: 1,
                firstName: "Jane",
                lastName: "Janeway",
                salesUnits: 3
            },
            // 6, Chet, Chedderson, 8
            {
                employeeNumber: 1,
                firstName: "Jane",
                lastName: "Janeway",
                salesUnits: 3
            },
            // 7, Chaiam, Chaiamson, 12
            {
                employeeNumber: 1,
                firstName: "Jane",
                lastName: "Janeway",
                salesUnits: 3
            },
            // 8, Dale, Dalesinger, 1
            {
                employeeNumber: 1,
                firstName: "Jane",
                lastName: "Janeway",
                salesUnits: 3
            },
            // 9, Zig, Ziglar, 50
            {
                employeeNumber: 1,
                firstName: "Jane",
                lastName: "Janeway",
                salesUnits: 3
            },
            // 10, Henry, Kissinger, 1
            {
                employeeNumber: 1,
                firstName: "Jane",
                lastName: "Janeway",
                salesUnits: 3
            },
            // 11, Arthur Herbert, Fonzarelli, 23
            {
                employeeNumber: 1,
                firstName: "Jane",
                lastName: "Janeway",
                salesUnits: 3
            },
            // 12, Betty, Boop, 67
            {
                employeeNumber: 1,
                firstName: "Jane",
                lastName: "Janeway",
                salesUnits: 3
            },
        ]
    }
// Exercise 3. On the salesReport object you made, add the following methods.
// getEmployeeCount() should return the total number of employees
// getTotalNumberOfSales() should return the total number of units sold
// getAverageSalesPerEmployee() should return the average units sold per employee


// Exercise 4. Go to https://gist.githubusercontent.com/ryanorsinger/f77e5ec94dbe14e21771/raw/d4a1f916723ca69ac99fdcab48746c6682bf4530/profiles.json
// then copy the JSON and assign it to a variable named profiles.

// Exercise 5. Create an object named profileReport and add the following methods that use the "profiles" JSON data.
//  getProfileCount() should return the total number of profiles
//  getActiveCount() should return the number of active profiles
//  getInactiveCount() should return the number of inactive profiles
//  sumOfAllBalances() should return sum of the balance of all profiles
//  getAverageBalance() should return the average balance per users
//  getLowestBalance() should return the customer name with the lowest balance
//  getHighestBalance() should return the customer name with the highest balance
//  getMostFavoriteFruit() should return the most common fruit
//  getLeastFavoriteFruit() should return the least favorite fruit
//  getTotalNumberOfUnreadMessages() should return the number of unread messages for all users
//  getAverageNumberOfUnreadMessages() should return the average number of unread mesages per user.
//  getAverageAge() should return the average age of all users
//  getGenderCounts() should return gender count of users as an object: example {"m": 23, "f", 32}
//  getAllCompanyNames() should return an array of all companies represented by the users
//  getMostCommonEyeColor() should return the most commonly occuring eye-color.
//  getBalancesForActiveAndNonActive() should return the balance of all non-active accounts vs. the balance of all active accounts?
//     this last method should return an object that looks like {"active-balances": 23000, "inactive-balances": 4000} w/ different numbers.


// Exercise 6. Practice with assignment by reference
// create a variable named person1 with a name property. Assign it a name property.
// Now create a variable named person2 and assign person1 to it.
// Then reassign the name property on person2 with person2.name = "Bob";
// console.log the name property on person 1.
// Why do you think changing person2 altered person1?
// The term for this behavior is assignment by reference.


// Exercise 7. More practice with assignment by reference
// Add the following HTML to your index.html page in this project.
// <input type="text" id="input" name="input">
// now, create a variable named input and assign it document.getElementById("input").
// now run input.value = "Hello" from the JS console. Did you see any HTML change?
// Create a second variable named inputElement.
// var inputElement = document.getElementById("input");
// now, run inputElement.value = "I am altering an object by altering its properties" in your JS console.
// See how both the "input" and "textInput" varialbes are referencing the same underlying HTML element?
// This behavior is another example of "assignment by reference"

})();