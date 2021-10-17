'use strict';


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
function lessThan100(x,y){
    return (x+y<100);
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
    return ((base * height)/2);
}

console.log(triArea(3, 2));
console.log(triArea(7, 4));
console.log(triArea(10, 10));
