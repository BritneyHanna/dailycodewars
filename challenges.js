//Fundamentals

//1. Create a function that multiples 2 numbers
let multiply = (num1, num2) => num1 * num2;



//2.Create a function that takes a string and turns it into an array of words
//my solution
function stringToArray(string) {
  return string.split(" ");
}


//as an arrow function
const stringToArray = (string) => string.split(" ");



//3.Your task is to find the first element of an array that is not consecutive.
// My solution note:remember to use arr-length-1 to avoid going over and getting undefined 
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}
//best practice
function firstNonConsecutive(arr) {
  let result = arr.find((val, index) => val !== index + arr[0]);

  return Number.isInteger(result) ? result : null;
}

