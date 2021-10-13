// Conditionals: Code that runs when we meet certain requirements.

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

// function isItANumber(parameter) {
//     var str = "Oi, that aint a number."
//     if(typeof parameter === "number"){
//         str = "Hey, That's a number.";
//     }
//     return str;
// }
//
// console.log(isItANumber(73));
// console.log(isItANumber("Doug"));


// IF/ELSE IF// ELSE FUNCTIONS


function isThisThirtyFive(parameter) {
    if (parameter > 35){
        return "No. " + parameter + " is greater than 35.";
    }else if ( parameter < 35){
        return "No. " + parameter + " is less than 35.";
    }
    else{
        return "Yes!! That sure is 35!!";
    }
}

console.log(isThisThirtyFive(34));
console.log(isThisThirtyFive(36));
console.log(isThisThirtyFive(-35));


// TERNARY EXPRESSION: A expression to set a value based on a boolean evaluation.

// var message = (booleanValue) ? "Expression was true." : "Expression was false.";

/** Consider the following statement: "Are we out of milk? If we are: I'll head to the store, but if we do have milk: I want to make a bowl of cereal." */

// How would we write this as a ternary expression?

var doWeHaveMilk = false;

var action = (doWeHaveMilk) ? "Time to eat some corn pops." : "Time to go to the store.";

console.log(action);



function isItANumber(parameter) {
    return (typeof parameter === "number") ? "Hey, That's a number." : "Hey, you're not a number!";
    }
console.log(isItANumber(73));
console.log(isItANumber("Doug"));

// SWITCH STATEMENT: A statement with multiple conditions that will trigger based on the value of a variable.

var color = prompt("what is your favorite color?").toLowerCase();

switch (color) {
    case "blue": //will return same as the next
    case "green":
        alert("What a coincidence, that's my favorite color!");
        break;
    case "orange":
        alert("That's my brother's favorite color!");
        break;
    default: // default should always be last
        alert(color + " is a weird color, my dude.");
        break;
}


/** Consider the following sentence: "I dont have a cow, goat, or camel. I guess I'll have to go to the store for milk." */

// How would we write this as a switch statement?

var animal = "Blue Tongued Skink";
switch (animal) {
    case "cow":
        console.log("Milking Bessie.");
        break;
    case "goat":
        console.log("Milking Gertrude.");
        break;
    case "camel":
        console.log("Milking Camille.");
        break;
    default:
        console.log("Headed to Kroger for milk, want anything?");
        break;
}

/** TO-DO: Lets make a switch statement with a prompt for the user to input their facorite sandwich meat. If they live 'olive loaf'
 * we should return an alert to congratulate them on their bold choice, and if they chose 'brisket' we should return a differnet alert:
 * this one for congratulating them on the 'right' answer. All other responses should trigger an alert stating apathy.
 *  */

var favLunchMeat = prompt ("What is your favorite Lunch Meat?").toLowerCase();

switch (favLunchMeat) {
    case "olive loaf":
        alert("You have a bold palette; good for you!");
        break;
    case "brisket":
        alert("Congratulations, you chose the right answer.");
        break;
    default:
        alert("That's fine. Nothing wrong with that.");
}

