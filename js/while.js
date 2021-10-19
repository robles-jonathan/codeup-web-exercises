'use strict';
(function() {

    var multipliedNum = 2;
    while(multipliedNum <= 65536){
        console.log(multipliedNum)
        multipliedNum *= 2;
    }

    multipliedNum = 1;
    while(multipliedNum < 65536){
        multipliedNum *= 2;
        console.log(multipliedNum)
    }




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
        var conesOrdered = Math.floor((Math.random()*5)+1);
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