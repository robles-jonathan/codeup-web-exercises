"use strict";
$(document).ready(function() {
    let foodOptions = [
        {type: "drive-thru", name: "McDonald's", specialty: "burgers"},
        {type: "drive-thru", name: "Dairy Queen", specialty: "burgers"},
        {type: "drive-thru", name: "Wendy\'s", specialty: "burgers"},
        {type: "drive-thru", name: "Jack in the Box", specialty: "burgers"},
        {type: "drive-thru", name: "Raising Cane\'s", specialty: "chicken"},
        {type: "drive-thru", name: "Arby\'s", specialty: "sandwiches"},
        {type: "drive-thru", name: "Bill Miller\'s BBQ", specialty: "BBQ"},
        {type: "drive-thru", name: "Sonic", specialty: "burgers"},
        {type: "drive-thru", name: "Whataburger", specialty: "burgers"},
        {type: "drive-thru", name: "Taco Bell", specialty: "burritos"},
        {type: "drive-thru", name: "Panda Express", specialty: "asian cuisine"},
        {type: "drive-thru", name: "Busch\'s Chicken", specialty: "chicken"},
        {type: "drive-thru", name: "Taco Cabana", specialty: "mexican-food"},
        {type: "drive-thru", name: "Churches Chicken", specialty: "chicken"},
        {type: "drive-thru", name: "Popeye\'s", specialty: "chicken"},
        {type: "drive-thru", name: "KFC", specialty: "chicken"},
        {type: "drive-thru", name: "Freddy\'s Frozen Custard", specialty: "burgers"},
        {type: "drive-thru", name: "Arby\'s", specialty: "sandwiches"},
        {type: "drive-thru", name: "Schlotzsky\'s", specialty: "sandwiches"},
        {type: "drive-thru", name: "Chick-fil-a", specialty: "chicken"},
        {type: "drive-thru", name: "Laguna Madre", specialty: "fish"},
        {type: "drive-thru", name: "Little Caesar\'s", specialty: "pizza"},
        {type: "drive-thru", name: "In-N-Out", specialty: "burgers"},
        {type: "drive-thru", name: "Carl\'s Jr.", specialty: "burgers"},
        {type: "drive-thru", name: "Las Palapas", specialty: "mexican-food"},
        {type: "drive-thru", name: "Taco Palenque", specialty: "mexican-food"},
        {type: "drive-thru", name: "Mama Margie's", specialty: "mexican-food"},
        {type: "order-to-go", name: "La Madeleine", specialty: "sandwiches"},
        {type: "order-to-go", name: "Pizza Hut", specialty: "pizza"},
        {type: "order-to-go", name: "Domino\'s", specialty: "pizza"},
        {type: "order-to-go", name: "Papa John\'s", specialty: "pizza"},
        {type: "order-to-go", name: "Wing Stop", specialty: "wings"},
        {type: "order-to-go", name: "Plucker\'s", specialty: "wings"},
        {type: "order-to-go", name: "Wing Daddy\'s", specialty: "wings"},
        {type: "order-to-go", name: "Goomba\'s Pizzeria", specialty: "pizza"},
        {type: "order-to-go", name: "Oblate Cafe", specialty: "mexican-food"},
        {type: "order-to-go", name: "Panchito\'s", specialty: "mexican-food"},
        {type: "order-to-go", name: "Rusty Bucket\'s Jaw-Smacking BBQ", specialty: "BBQ"},
        {type: "order-to-go", name: "Rudy's BBQ", specialty: "BBQ"},
        {type: "order-to-go", name: "Freebird's", specialty: "burritos"},
        {type: "order-to-go", name: "Chipotle", specialty: "burritos"},
        {type: "order-to-go", name: "Blanco BBQ", specialty: "BBQ"},
        {type: "dine-in", name: "Chili's Grill & Bar", specialty: "bar-grill"},
        {type: "dine-in", name: "J. Alexander's Restaurant", specialty: "bar-grill"},
        {type: "dine-in", name: "Cheddar's Scratch Kitchen", specialty: "bar-grill"},
        {type: "dine-in", name: "Twin Peaks", specialty: "bar-grill"},
        {type: "dine-in", name: "Walk-Ons", specialty: "wings"},
        {type: "dine-in", name: "Guillermo's", specialty: "mexican-food"},
        {type: "dine-in", name: "Applebee's", specialty: "bar-grill"},
        {type: "dine-in", name: "T.G.I. Friday's", specialty: "bar-grill"},
        {type: "dine-in", name: "Kona Grill", specialty: "asian cuisine"},
        {type: "dine-in", name: "Republic of Texas", specialty: "bar-grill"},
        {type: "dine-in", name: "Iron Cactus Mexican Restaurant and Margarita Bar", specialty: "mexican-food"},
        {type: "dine-in", name: "Paesanos Rivervalk", specialty: "italian"},
        {type: "dine-in", name: "Olive Garden", specialty: "italian"},
        {type: "dine-in", name: "Macaroni Grill", specialty: "italian"},
        {type: "dine-in", name: "Luciano's Neighborhood Pizzeria", specialty: "italian"},
        {type: "dine-in", name: "Acenar Mexican Restaurant", specialty: "mexican-food"},
        {type: "dine-in", name: "Bourbon Streen Seafood Kitchen Downtown", specialty: "seafood"},
        {type: "dine-in", name: "Red Lobster", specialty: "seafood"},
        {type: "dine-in", name: "Sea Island", specialty: "seafood"},
        {type: "dine-in", name: "Ostra Restaurant", specialty: "seafood"},
        {type: "dine-in", name: "Tomatillo's", specialty: "mexican-food"},
        {type: "dine-in", name: "Rosario's", specialty: "mexican-food"},
        {type: "dine-in", name: "Dick's Last Resort", specialty: "bar-grill"},
        {type: "dine-in", name: "Jim's", specialty: "breakfast"},
        {type: "dine-in", name: "Denny's", specialty: "breakfast"},
        {type: "dine-in", name: "IHOP", specialty: "breakfast"},
        {type: "dine-in", name: "Waffle House", specialty: "breakfast"},
        {type: "dine-in", name: "Fogo de Chao Brazilian Steakhouse", specialty: "mexican-food"},
        {type: "dine-in", name: "Mi Tierra Cafe y Panaderia", specialty: "mexican-food"},
        {type: "dine-in", name: "Pico De Gallo", specialty: "mexican-food"},
        {type: "dine-in", name: "Margaritaville", specialty: "seafood"},
        {type: "dine-in", name: "Hooters", specialty: "wings"}
    ];

    // MAP METHOD
    // Creates a new array populated with the results of calling a provided function on every element in the array.


    //OLD WAY
    // foodOptions.forEach(function(restaurant){
    //     $('#foodList').append('<li>' + restaurant.name + '</li>')
    // })

    //NEW WAY
    //NOT WORKING!!
    let foodHTML = foodOptions.map(restaurant => `<li>${restaurant.name}</li>`)
    $('#foodList').append(foodHTML)

    let numbers = [1,2,3,4,5];
    let numbersPlusFive =  numbers.map(number => number + 5);
    console.log(numbers);
    console.log(numbersPlusFive);

    //FILTER METHOD
    // Creates a new array with all the elements that pass the test implemented by the provided function.

    //OLD WAY
    var bucket = [];
    foodOptions.forEach(function(restaurant){
        if(restaurant.specialty === 'seafood'){
            bucket.push(restaurant);
        }
    })
    console.log(bucket);


    //NEW AND IMPROVED WAY
    let seafoodOptions = foodOptions.filter(restaurant => restaurant.specialty === 'seafood');
    console.log(seafoodOptions);

    let oddNumbers = numbers.filter(num => num % 2 === 1);
    console.log(oddNumbers);


    //REDUCE METHOD
    //

    let grades = [92, 88, 76, 88, 70, 100]
    let total = grades.reduce((previousValue, currentValue) => previousValue + currentValue);

    console.log(total/grades.length);


    let specialties = foodOptions.reduce((uniqueSpecialties, restaurant) => {
        if(uniqueSpecialties.includes(restaurant.specialty)){
            uniqueSpecialties.push(restaurant.specialty)
        }
        return uniqueSpecialties;
    },([]))
    console.log(specialties)


    let sentenceArray = ["Mary", "Had", "A", "Little", "Lamb"];
    let combinedSentence = sentenceArray.reduce((previousValue, currentValue) => previousValue + currentValue, 'Hey Jon!')
    console.log(combinedSentence);
})

