//1.In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

function dontGiveMeFive(start, end) {
  //initialize a variable total and set to 0
  //start counting at start and iterate end times
  //convert the digit at each index to a String and check if the String includes 5
  //if it does not include 5 increment the count

  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) {
      count++;
    }
  }
  return count;
  //note to self remember to return outside of the loop
}
//2. We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.
function plural(n) {
  return n === 1 ? false : true;
}

//alternative
function plural(n) {
  return n !== 1;
}


//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  return !num >= 0 ? -Math.abs(num) : num;
  //or return !num>=0?-1*num:num
}
//Implement a function which convert the given boolean value into its string representation.
function booleanToString(b){
  return b.toString()
}
//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
function between(a, b) {
  let arr = [];

  for (let i = a; i <= b; i++) {
    arr.push(i);
  }

  return arr;
}

// **** need to review
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

//best practice answer 
function chain(v, fns) {
  return fns.reduce(function (v, fn) {
    return fn(v);
  }, v);
}