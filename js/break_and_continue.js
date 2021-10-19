'use strict';
(function() {
/*
    1. Create a file named break_and_continue.js in the js directory.

    2. Prompt the user for an odd number between 1 and 50.
    Use a loop and a break statement to continue prompting the user if they enter invalid input.
*/

    // DAVID'S SOLUTION DAVID USED QUESTIONS 2 AND 3 TOGETHER
    // var userNum;
    // while (true){
    //     userNum = parseInt(prompt("Give me an odd number between 1 and 50!"));
    //     if (userNum >= 1 && userNum <= 50 && userNum % 2 !== 0){
    //         break;
    //     }
    // }
// MY SOLUTION COMPLETE
    for(var i = 1; i<=10; i++){
        var userInput = prompt("Enter an odd number between 1 and 50.");
        if(userInput % 2 === 1){
            break;
        }
    }
/*
    3. Use a loop and the continue statement to output all the odd numbers between 1 and 50,
    except for the number the user entered.
*/
    // DAVIDS SOLUTION
    // for(var b = 1; b <=50; b++){
    //     if (b % 2 === 0){
    //         continue;
    //     }
    //     if(b === userNum){
    //         console.log("We don't talk about " + userNum + " around these parts....");
    //         continue;
    //     }
    //     console.log("Odd number: " + b);
    // }

    // My solution needs to be Refactored
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



})();