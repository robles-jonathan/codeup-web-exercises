// Conditionals: Code that runs when we meeet certain requirements.

// IF STATEMENTS - Code that runs when a condition is met.

// if(condition){
//          this code will run if our condition is true;
// }

/** Consider the sentence: "When I run out of milk: I go to the store to get more." */
// Condition : When I Run Out Of Milk
// Action: I go to the store to get more milk.

// if (milk === 0){
//     goToStore();
// }

/** TO-DO: I want to make a block of code that logs a message to the console when
 *  a variable is set to the number 5.
 */
var five = 55;
if(five === 5){
    console.log("Hey, that's five");
}
// We can also use our conditional logic in functions.
/** TO-DO: I want to build a function that returns a string when I pass a number as
 * an argument. */

function isItANumber(parameter) {
    var str = "Oi, that aint a number."
    if(typeof parameter === "number"){
        str = "Hey, That's a number.";
    }
    return str;
}

console.log(isItANumber(73));
console.log(isItANumber("Doug"));


