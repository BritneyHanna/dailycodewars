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
