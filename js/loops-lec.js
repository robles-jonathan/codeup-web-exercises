'use strict';
(function() {

    //For Loops: Loops that are designed to run a given number of times. Think more math thinking.
    for(var increment = 1; increment <= 10; increment++){
        console.log("This loop will run " + increment + " time(s).");
    }

    function sayHelloXTimes(num){
        for (var j = 1; j <= num; j++){
            console.log(j+": Hello!!")
        }
    }
    sayHelloXTimes(20)


    // Below is a funky example that works, but will rely on moving between different data types.
    for (var i = "A"; i.length < 8; i += "A"){
        console.log("This is a bit of a tricky way to run a for loop, but hey, it works...");
    }

    // We can get a loop to stop using break;
    // var x = 0;
    // while(true) {
    //     alert("this is the song that never ends. It just goes on and on my friends. Somebody started singing not knowing what it was, and now we'll all just keep on singing this because");
    //
    //     x++;
    //     if (x === 5) {
    //         break;
    //     }
    // }
    //


    // while(true) {
    //     var ticketsToMtSplashmore = confirm("Can we get tickets to Mt. Splashmore?");
    //     if (ticketsToMtSplashmore === true){
    //         break;
    //     }
    // }
    // alert("Thanks Homer, you're the best!!")

    // for(var j = 5; j < 10000; j += 5){
    //     if ( j === 25){
    //         break;
    //     }
    //     console.log(j);
    // }

    // Notice that by having the break, we're able to get out of the loop that would otherwise run forever.

    // we can also use continue to allow a loop to skip an iteration.

    function allOddNumbersToX(x){
        for (var num = 1; num <= x; num++){
            if(num % 2 === 0){
                continue;
            }
            console.log(num);
        }
    }
allOddNumbersToX(18)

    // How'd i'd start a function like the one above without continue. Notice that id doesnt allow for odd numbers to appear when we pass it an even number.
    function allOddNumbersFromX(x) {
        for (var num = x; num >= 1; num--){
            if ( num % 2 === 0){
                continue;
            }
            console.log(num);
        }
    }

    allOddNumbersFromX(18)

    // The above function will only log the odd numbers until the argument is passed.
})();
