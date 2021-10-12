"use strict";
// A function is a block of reusable code that performs a specific task.
// Functions typically take in an input, and produce an output.

// Functions we have used so far:
// - prompt();
// - alert();
// - Number();
// - parseFloat();
// - parseInt();
// - .toFixed();
// - .toUpperCase();


//When executing a function, we call the name of the function, following
//inside of the parenthesis known as arguments.

// prompt("What is your name?"); // returns a string;

/*
 Function Structure
function todaysDate(parameter1, parameter2, parameter3){
    Do something
     return something using return
}
*/

function todaysDate(greeting){
    return greeting + Date();
}

// Execute function

var date = todaysDate("Today's date is: ");
console.log(date);


// Function declaration
function echo(phrase){
    return phrase + " " + phrase
}

console.log(echo("Help!!"))
console.log(echo("Help!!"))
//Help!! Help!!

console.log(echo(echo("hello!!")));
// hello!! hello!! hello!! hello!!

//Function expression / anonymous
var sayBye = function(name){
    return 'Goodbye ' + name;
}

console.log(sayBye('Jon'));;

// Example:

// Create a function which takes in two
// numer parameters to find the Hypotenuse angle.

// Parameter are the placeholders stated in the function definition.
function findHypotenuse(a,b){
    var result;
    result = Math.sqrt((a*a) + (b*b))
    return result;
}

// Have a triangle with the sides of 4 and 5.
// Execute our function to find the hypotenuse.


// Arguments are the values that are put into the function when executed.
console.log(findHypotenuse(4, 5));
console.log(findHypotenuse(5, 5));
console.log(findHypotenuse(14, 9));
console.log(findHypotenuse(4, 0));


// FUNCTION SCOPE


// Scope is a term to describe where a variable can be accessed.

// With my global variable that exists in the HTML document,
// I can console.log its value.

console.log(global);

function gretting(){
    var firstName = 'David ';
    var lastName = 'Stephens';
    return 'Hello, ' + firstName + lastName;
}

console.log(gretting());
console.log(firstName, lastName);

// Immediately Invoked Function Expression (IIFE)

// FROM NOW ON THIS IS HOW TO WRITE FUNCTIONS
(function (){
    var ifyVar = 'I am local to IIFE'
})();

console.log(ifyVar);

