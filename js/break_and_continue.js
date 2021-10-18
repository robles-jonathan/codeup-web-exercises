'use strict';
(function() {
/*
    1. Create a file named break_and_continue.js in the js directory.

    2. Prompt the user for an odd number between 1 and 50.
    Use a loop and a break statement to continue prompting the user if they enter invalid input.
*/

// COMPLETE
//     for(var i = 1; i<=10; i++){
//         var userInput = prompt("Enter an odd number between 1 and 50.");
//         if(userInput % 2 === 1){
//             break;
//         }
//     }
/*
    3. Use a loop and the continue statement to output all the odd numbers between 1 and 50,
    except for the number the user entered.
*/
    // prompt user for odd number 1 - 50
    var userInput = parseInt(prompt('Enter an odd number between 1 and 50.'));
    if (userInput < 0 || userInput > 50){
        alert('Invalid Input! Must enter a number between 1 and 50')
    }else {
// use loop and break statement to continue prompting user if invalid input
        for (var b = 1; b <= 50; b++) {
            if (b === userInput) {
                console.log('Yikes! We are skipping number: ' + b);
                continue;
            }
            if (b % 2 !== 0) {
                console.log(' Odd number: ' + b);
            }
        }
    }



    /*
        Your output should look like this:
        Number to skip is: 27
        Here is an odd number: 1
        Here is an odd number: 3
        Here is an odd number: 5
        Here is an odd number: 7
        Here is an odd number: 9
        Here is an odd number: 11
        Here is an odd number: 13
        Here is an odd number: 15
        Here is an odd number: 17
        Here is an odd number: 19
        Here is an odd number: 21
        Here is an odd number: 23
        Here is an odd number: 25
        Yikes! Skipping number: 27
        Here is an odd number: 29
        Here is an odd number: 31
        Here is an odd number: 33
        Here is an odd number: 35
        Here is an odd number: 37
        Here is an odd number: 39
        Here is an odd number: 41
        Here is an odd number: 43
        Here is an odd number: 45
        Here is an odd number: 47
        Here is an odd number: 49
         */


    /*
    Do While Loop
An ice cream seller can't go home until she sells all of her cones.
First write enough code that generates a random number between 50 and 100 representing the amount of cones to
sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5,
simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of
cones sold to each person. This is a way get the random numbers for this exercise.


//This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;
The output should be similar to the following:

5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones
     */

    var allCones = Math.floor(Math.random() * 50)+50;
    console.log("I have " + allCones + " cones to sell.")
    do{
        var conesOrdered = Math.floor(Math.random()*5);
        console.log("The next customer ordered " + conesOrdered + " number of cones.");
        if(conesOrdered <= allCones){
            allCones = allCones - conesOrdered;
            console.log("I now have " + allCones + " left.")
        }else {
            console.log("I can not sell you " + conesOrdered + " cones I only have " + allCones + " next customer, please.");
        }
    } while (allCones > 0);
    console.log("Yay! I sold them all!!")

})();