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
function firstNonConsecutive2(arr) {
  let result = arr.find((val, index) => val !== index + arr[0]);

  return Number.isInteger(result) ? result : null;
}

//4.Merge two arrays the result should be in descending order and there should be no duplicates 

//My solution I concatenated the arrays filtered using the index of to find the first instance of that element and used sort method to sort ascending
function mergeArrays(arr1, arr2) {
  let mergedArr = arr1.concat(arr2);
  mergedArr = mergedArr.filter(
    (num, index) => mergedArr.indexOf(num) === index
  );
  return mergedArr.sort((a, b) => a - b);
}
//other solution seems to convert concat sort and wrap that in method to convert to a set to get the unique values then use the .from method to turn back to an array
function mergeArrays2(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}