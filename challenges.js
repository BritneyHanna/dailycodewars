//Fundamentals

//1. Create a function that multiples 2 numbers
let multiply = (num1, num2) => num1 * num2;



//2.Create a function that takes a string and turns it into an array of words
//my solution
function stringToArray(string) {
  return string.split(" ");
}


//as an arrow function
const stringToArray2 = (string) => string.split(" ");



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
//5.Given an array of integers, return a new array with each value doubled.
//My solution I used the map method
let doubledArr = (arrNum) => arrNum.map((num) => num * 2);



//6. Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
//My solution I used the join method with a space as the separator 
function smash (words) {
   return words.join(" ")
};
//7.Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//My solution

function removeEveryOther(arr) {
  const modifiedarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      modifiedarr.push(arr[i]);
    }
  }
  return modifiedarr;
}
//solution I really liked for each item in the array he used the .splice method -by adding one to the index he ensured he removed every other element 
function removeEveryOther(arr) {
  arr.forEach((item, index) => {
    arr.splice(index + 1, 1);
  });
  return arr;
}

//8.Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them. *** need to review 

//best practice 
function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}
//9 Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string. The input will never be an empty string

//My solution
function fakeBin(x) {
  const newarr = x
    .split("")
    .map((num) => (num < 5 ? 0 : 1))
    .join("");

  return newarr;
}
 // Best practice 
 function fakeBi2n(x) {
   return x
     .split("")
     .map((n) => (n < 5 ? 0 : 1))
     .join("");
 }

 //Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 //MY solution I used the .from method to covert to an array. To achieve this I first converted the number to a string so the .from method be applicable and used the second paramenter which is the callback function to convert each element of the array back to a number. Then I used the .reverse method to get it in reverse order 

 function digitize(n) {
   const reversed = Array.from(String(n), (n) => Number(n)).reverse();
   return reversed;
}
 
// This other solution I really liked 
function digitize2(n) {
  return String(n).split("").map(Number).reverse();
}

//10.Return the average of the given array rounded down to its nearest integer.
// note to self outer function has to return also the callback function has to return since the arrow function is  multiple lines
function getAverage(marks) {
  return Math.floor(
    marks.reduce((a, c) => {
      return a + c;
    }, 0) / marks.length
  );
}

// More concise solution
function getAverage(marks) {
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}


//You are given a string containing a sequence of character sequences separated by commas.

//Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
//If the string is empty return null
const array = (arr) => {
  arr = arr.split(',')
  arr.pop()
  arr.shift()
  return arr.join(' ') === '' ? null : arr.join(' ')
}

// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array 
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
function multipleOfIndex(array) {
  return array.filter((el, index) => el % index === 0);
}