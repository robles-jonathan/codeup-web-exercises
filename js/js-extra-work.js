'use strict';
(function() {

// Less Than 100

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
    /*
    EXAMPLES
    lessThan100(22, 15) ➞ true
    // 22 + 15 = 37

    lessThan100(83, 34) ➞ false
    // 83 + 34 = 117

    lessThan100(3, 77) ➞ true
    */
    function lessThan100(x, y) {
        return (x + y < 100);
    }

    console.log(lessThan100(22, 15));
    console.log(lessThan100(83, 34));
    console.log(lessThan100(3, 77));

// Area of a Triangle
    /*
    Write a function that takes the base and height of a triangle and return its area.

        Examples
    triArea(3, 2) ➞ 3

    triArea(7, 4) ➞ 14

    triArea(10, 10) ➞ 50

     */

    function triArea(base, height) {
        return ((base * height) / 2);
    }

    console.log(triArea(3, 2));
    console.log(triArea(7, 4));
    console.log(triArea(10, 10));


    //Bitwise Operations
    /*
    A decimal number can be represented as a sequence of bits. To illustrate:

        6 = 00000110
    23 = 00010111
    From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

        bitwiseAND(6, 23) ➞ 00000110

    bitwiseOR(6, 23) ➞ 00010111

    bitwiseXOR(6, 23) ➞ 00010001
    Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

        Examples
    bitwiseAND(7, 12) ➞ 4

    bitwiseOR(7, 12) ➞ 15

    bitwiseXOR(7, 12) ➞ 11
    Notes
    JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.

     */

    function bitwiseAND(n1,n2){
        return n1 & n2;
    }

    function bitwiseOR(n1, n2) {
        return n1 | n2;
    }

    function bitwiseXOR(n1, n2) {
        return n1 ^ n2;
    }

})();