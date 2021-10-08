"use strict";
// Exercises
console.log("Hello from External JavaScript");

// Exercise 1 Use the alert function to show a message that says 'Welcome to my Website!'.
var alertWelcome = alert("Welcome to my website!");

// Exercise 2 Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
// For example, if the user enters "blue", your code should alert a message that says:
// "Great, blue is my favorite color too!"

var favoriteColor = prompt("What is your favorite color?");
alert("Great, " + favoriteColor + " is my favorite color too!!");


//Exercise 3 Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.

//Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

// You have rented some movies for your kids:
// The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

var numberOfDaysMovie1 = prompt("How many days will you be renting The Little Mermaid?");
var numberOfDaysMovie2 = prompt("How many days will you be renting Brother Bear?");
var numberOfDaysMovie3 = prompt("How many days will you be renting Hercules?");
var pricePerDay = 3;
var amountOwed = ((parseInt(numberOfDaysMovie1) + parseInt(numberOfDaysMovie2) + parseInt(numberOfDaysMovie3)) * pricePerDay);
alert("The amount you owe is $" + amountOwed +".");


// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var googleHoursWorked = prompt("How many hours did you work at Google this week?");
var facebookHoursWorked = prompt("How many hours did you work at Facebook this week?");
var amazonHoursWorked = prompt("How many hours did you work at Amazon this week?");
var googlePayRate = 400;
var amazonPayRate = 380;
var facebookPayRate = 350;
var amountEarned = (googlePayRate * parseInt(googleHoursWorked) + (amazonPayRate * (parseInt(amazonHoursWorked))) + (facebookPayRate * parseInt(facebookHoursWorked)));
alert ("You have earned $" + amountEarned + " this week!!");

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
var classFull = confirm("Is the class full?");
var studentScheduleConflict = confirm("Is there a conflict with your schedule?");

// This section would result in just a true or false at the end
// var enroll = !classFull && !studentScheduleConflict;
// alert(enroll);


if(classFull === false && studentScheduleConflict === false){
    alert("Congratulations, You may enroll!!");
}else{
    alert("Sorry you can not enroll at this time.");
}


// A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired. Premium members do not need to buy a specific amount of products.
var premiumMember = confirm("Are you a premium member?");
if (premiumMember === true){
    var offerNotExpiredPremium = confirm("Is the coupon expired?");
    if (offerNotExpiredPremium === false){
        alert("Great, the offer has been applied.");
    }else{
        alert("Sorry, the offer has expired.");
    }
}else{
    var itemsBought = prompt("How many items did you purchase?");
    if (parseInt(itemsBought) >= 2) {
        var offerNotExpiredNotPremium = confirm("Is the coupon expired?");
        if (offerNotExpiredNotPremium === false){
            alert("Great, the offer has been applied.")
        }else{
            alert("Sorry, the offer has expired.");
        }
    }else{
        alert("Sorry, you must purchase 2 items or more.");
    }
}


//          This is done with minimal if/else

// var offerExpired = confirm("Is the coupon expired?");
//
// var itemBought = prompt("How many items did you purchase?");
//
// var premiumMembers = confirm("Are you a Premium Member?");
//
// var itemsGreaterThan = 2;
//
// var discountApplied = premiumMembers && itemBought >= itemsGreaterThan || itemBought >= itemsGreaterThan && !offerExpired
// if (discountApplied === true){ alert("Congratulations");}
// if (discountApplied === false){alert("Sorry");}
