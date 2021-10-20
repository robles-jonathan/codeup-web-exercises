(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ['Tiffany', 'Khaleesi', 'Sophie', 'Gina'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("There are " + names.length + " names on the array.");
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);



    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var n=0; n<names.length; n++) {
        console.log("List of names: " + names[n]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name) {
        console.log(name);
    })


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(array){
        return array[0]
    }
    // function first([]){
    //     var first = names[0];
    //     console.log(first);
    // }

    function second(array){
        return array[1]
    }
    // function second([]){
    //     var second = names[1];
    //     console.log(second);
    // }

    function last(array){
        return array[array.length-1]
    }

    // function last([]){
    //     var second = names[names.length -1];
    //     console.log(second);
    // }

    function secondToLast(array) {
        return array[array.length-2]
    }

    console.log(first([1, 2, 3, 4, 5])); //returns 1
    console.log(second([1, 2, 3, 4, 5])); //returns 2
    console.log(last([1, 2, 3, 4, 5])); //returns 5

    var ticTacToe =[
        ["o", 1, 2],
        [0, "x", 2],
        [0, 1, 2]
    ];
    var middleRow = ticTacToe[1];
    console.log(middleRow[1]);
    console.log(ticTacToe[1][1]);


})();
