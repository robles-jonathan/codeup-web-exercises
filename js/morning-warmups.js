"use strict";
(function () {
    // WARM-UP FOR  10-13-21
// Write a function that returns the number 7.
    function returnSeven() {
        return 7;
    }

    console.log(returnSeven());

// Write an if statement with a condition set to the boolean false.
// Does it run?

    if (true) {
        console.log("Am I seen?");
    }


    // WARM-UP FOR 10-14-21
    var hadBreakfast = Boolean(Math.round(Math.random()));
    var hadBreakfastMessage = (hadBreakfast) ? "Yes, I had breakfast!" : "No, I did not have breakfast.";
    console.log(hadBreakfast);
    console.log(hadBreakfastMessage);

    // WARM-UP FOR 10-15-21
    // Write a function called 'typeCheck' that takes an input and returns a string of the data type entered. If the data type is a string, return the string "Haha, it's a string of string!"
    //
    // Tests:
    //     typeCheck('')
    // typeCheck(isNaN());
    // typeCheck(!false * 3);
    // typeCheck(4 + '4');

    function typeCheck(input) {
        if (typeof input === 'string') {
            return "Haha, it's a string of string!";
        } else {
            return typeof input;
        }
    }

    console.log("Input is an empty string: \n" + typeCheck(''));
    console.log("Input isNaN(): \n" + typeCheck(isNaN()));
    console.log("Input is !false * 3: \n" + typeCheck(!false * 3));
    console.log("Input is 4 + '4': \n" + typeCheck(4 + '4'));


    console.log("Morning Warmup \"FizzBuzz\"");
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i);
        }
    }

    //Warmup: Create a function named secondToLast that accepts an array as an argument and will return the second to last element of the array.

    function secondToLast(array) {
        return array[array.length - 2]
    }

    console.log(secondToLast(["first", "second", "second to last", "last"]))
})();

// WARM-UP October 21, 2021

//Write a function named ‘moveToEnd’ that takes in an array, and returns the array with the original first index moved to the last index of the array.
//
// Example:
// moveToEnd([1, 2, 3, 4]) 		  // returns [2, 3, 4, 1];
// moveToEnd([‘roll’, ‘rock’, ‘and’]  // returns [‘rock’, ‘and’, ‘roll’];
function moveToEnd(array) {
    var removedElement = array.shift();
    array.push(removedElement);
    console.log(array);
    return array;
}

moveToEnd([1, 2, 3, 4]);
moveToEnd(["rock", "and", "roll"]);


var slowbro = {
    pokedexNumber: 79,
    name: "Slowbro",
    height: {
        feet: 5,
        inches: 3
    },
    weight: 173.1,
    description: "Slowpoke became Slowbro when a Shellder bit on to its tail. Sweet flavors seeping from the tail make the Shellder feel as if its life is a dream.",
    category: "Hermit Crab",
    abilities: ["Oblivious", "Own Tempo"],
    type: ["Water", "Psychic"],
    weaknesses: ["Ghost", "Dark", "Grass", "Electric", "Bug"]
}
console.log(slowbro);
var wrestlers = [
    {
        name: "Bret Hart",
        nationality: "Canadian"
    }, {
        name: "Shawn Michaels",
        nationality: "American"
    }, {
        name: "Christian Cage",
        nationality: "Canadian"
    }, {
        name: "Keiji Mutoh",
        nationality: "Japanese"
    }, {
        name: "Eddy Guerrero",
        nationality: "American"
    }, {
        name: "Owen Hart",
        nationality: "Canadian"
    }
];

function getCanadianWrestlers(array) {
    var canadianWrestlers = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].nationality === "Canadian") {
            canadianWrestlers.push(array[i]);
        }
    }
    return canadianWrestlers;
}

//Alternate using forEach loop
function filterForCanadians(arr) {
    var bucket = [];
    arr.forEach(function (element) {
        if (element.nationality === "Canadian") {
            bucket.push(element);
        }
    });
    return bucket;
}


console.log(getCanadianWrestlers(wrestlers));
console.log(filterForCanadians(wrestlers));

//Warmup
//
// Find the area of the circle, and round it to the nearest whole number using the Math object.
var circle = {
    radius: 36
}


// hint: area = pi * radius^2
var areaOfCircle = function () {
    return Math.round(Math.PI * Math.pow(circle.radius, 2));
}
console.log("The area of the circle rounded to the nearest whole number is: " + areaOfCircle())


// WARM-UP 11-02-21
// Create a function that takes in an array of objects, and returns the object with the highest quantity property.
// Ex. getHighestQuantityObject(groceries)//returns {name: “yams”, quantity: 50};

var groceries = [
    {
        name: "carrots",
        quantity: 5
    }, {
        name: "yams",
        quantity: 50
    }, {
        name: "oranges",
        quantity: 9
    }, {
        name: "onions",
        quantity: 2
    }, {
        name: "cucumbers",
        quantity: 6
    }, {
        name: "potatoes",
        quantity: 8
    }
];

// MY SOLUTION NEEDS WORK
function highestQuantity(arr) {
    var highest = 0;

    for (var i = 0; i < arr.length; i++) {
        var name = arr[i].name;
        if (arr[i].quantity > highest) {
            highest = arr[i].quantity;
        }
    }
    return 'name: "' + name + '", quantity: ' + highest;
}

console.log(highestQuantity(groceries))


//David's solution
function getHighestQuantityObject(arr) {
    var obj = {
        name: "something",
        quantity: 0
    }
    arr.forEach(function (element) {
        if (element.quantity > obj.quantity) {
            obj = element;
        }
        // console.log(obj);
    })
    return obj;
}

console.log(getHighestQuantityObject(groceries))


// Morning Warm-up 11-04-21
// Write a function named ‘sortByName’ that takes in an array of objects,
// and returns an array of objects in alphabetical order based on the name property.
var products = [
    {
        name: 'Playstation 5',
        price: 599.99
    }, {
        name: 'Logitech Wireless Mouse',
        price: 23.99
    }, {
        name: 'Macbook Pro',
        price: 1099.99
    }, {
        name: 'GoPro HERO10',
        price: 399.99
    }, {
        name: '12" & 6" Metal Ruler Set',
        price: 5.99
    }]

function sortByName(array) {
    return array.sort(function (a, b) {
        var aLower = a.name.toLowerCase();
        var bLower = b.name.toLowerCase();
        if (aLower < bLower) {
            return -1;
        } else if (aLower > bLower) {
            return 1;
        } else {
            return 0;
        }
    });
}

console.log(sortByName(products));

// Morning Warmup:
//     Write a function in JavaScript that takes in an array of objects and returns the object with the lowest height property.
//     Consider the following array to test your code.

var bBallPlayers = [
    {
        name: "Hakeem Olajuwon",
        height: 213
    }, {
        name: "Muggsy Bogues",
        height: 160
    }, {
        name: "Chris Paul",
        height: 183
    }, {
        name: "Bol Bol",
        height: 218
    }, {
        name: "Moochie Norris",
        height: 185
    }, {
        name: "Manu Ginobili",
        height: 198
    }
];

function lowestHeight(arr) {
    var obj = {
        name: "string",
        height: 0
    };
    arr.forEach(function (element) {
        if (element.height > obj.height) {
            obj = element;
        }
        // console.log(obj);
    });
    arr.forEach(function (element) {
        if (element.height < obj.height) {
            obj = element;
        }
        // console.log(obj);
    })

    return obj;
}

console.log(lowestHeight(bBallPlayers));

//DAVID'S Solution
function findShortest(arr){
    var holdthis={height: Number.MAX_VALUE}
    arr.forEach(function (el) {
        if(el.height < holdthis.height){
            holdthis = el;
        }
    });
    return holdthis;
}

console.log(findShortest(bBallPlayers));