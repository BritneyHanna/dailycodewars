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
//Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"
const rps = (p1, p2) => {
  if (p1 == p2) return "Draw!";

  if (p1 == "rock" && p2 == "scissors") return "Player 1 won!";
  else if (p1 == "scissors" && p2 == "paper") return "Player 1 won!";
  else if (p1 == "paper" && p2 == "rock") return "Player 1 won!";
  else return "Player 2 won!";
};
//Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number * number;
  });
  return sum;
}

//or

function squareSumb(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}
function isNarcissistic(n) {
let arr=Array.from(n.toString())
arr=arr.map(el=>Number(el))
  let sum=0;
for (let i=0;i<arr.length;1++){
  sum+=arr[i]**arr.length
}
  return sum===arr

  
}
//*************************************************************************** */

//A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.

// Need to Review

function isNarcissistic(n) {
    return String(n).split('').reduce((acc, curr) => acc + Math.pow(+curr, String(n).length), 0) === n;
}

//********************************************************************************************** */
//You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
function getAge(inputString){
  return Number(inputString.split(' ')[0]);
}
//********************************************************************************************************* */
//The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?
//NEED TO REVIEW
//My solution
//first sorted the numbers in ascending order then did a for loop I didnt set the icrementation since the instructions said 1 number would always be missing
//I ran the loop until I found a number that didnt match its index. I then returned the index since this would correspond with whichever number was supposed to be there 
function missingNo(nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i=0;;i++){
    if (nums[i]!=i){
      return i;
      break;
    }
  }
   
  
 
}

//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= fuelLeft * mpg;
};