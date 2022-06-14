//Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
//eg. ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]


function evenNumbers(array, number) {
  return array.filter((el) => el % 2 === 0).splice(-number);
}

//.splice -3 will delete and return the last 3 numbers, -2 last 2 numbers etc
//************************************************************************* */


// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
//https://www.codewars.com/kata/5748838ce2fab90b86001b1a/javascript

function squareArea(A) {
  //multiply the arch by 4 to get the circmfrence then divide by 2 and PI to obtain the radius. Square this radius to get the area of the square
  //in order to round to 2 decimals I used .toFixed method and converted the resulting string back to a number
  let result = ((A * 4) / 2 / Math.PI) ** 2;
  return Number(result.toFixed(2));
}

//**************************************************************************** */

//Create a method to see whether the string is ALL CAPS. REVIEW 
String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};
//************************************************************************* */
// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string.Notice the colon and space in between.
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

let number = function (array) {
  return array.map((el, i) => `${i + 1}: ${el}`);
};

//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

function solution(a, b) {
  return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
}



