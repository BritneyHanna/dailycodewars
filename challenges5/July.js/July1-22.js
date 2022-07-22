// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:
//example: [45, 120] --> [3, 8]
//this answer was copied from codewars
function reduce(fraction) {
    let result = [];
    // started from the highest common  factor immediately 
  for (let i = fraction[0]; i > 0; i--) {
    if (fraction[0] % i == 0 && fraction[1] % i == 0) {
      result.push(fraction[0] / i);
      result.push(fraction[1] / i);
      return result;
    }
  }
}


//******************************************************************************* */



// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.


let number = function (busStops) {
  let total = 0;
  for (let i = 0; i < busStops.length; i++) {
    let peopleon = busStops[i][0];
    let peopleoff = busStops[i][1];

    total += peopleon;
    total -= peopleoff;
  }

  return total;
};

// Other solution on codewars
const numberb = (busStops) => busStops.reduce((p, n) => p + n[0] - n[1], 0);


//#############################################################################

//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
function gimme(triplet) {
    //important to copy the array because sort will mutate the original array in place 
  const ordered = [...triplet].sort((a, b) => a - b)[1];
  return triplet.indexOf(ordered);
}

//####################################################################
//Given an integer n and two other values, build an array of size n filled with these two values alternating.
// 5, true, false     -->  [true, false, true, false, true]

function alternate(n, firstValue, secondValue) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      arr.push(firstValue);
    } else {
      arr.push(secondValue);
    }
  }
  return arr;
}
//*********************************************************************** */
//Calculate the remainder of the division by 256 without the %-operator.
//Need to Review 
function mod256WithoutMod(number) {
  while (number > 255) number -= 256;
  while (number < -255) number += 256;
  return number;
}
//alternative answer on codewars
const mod256WithoutMod = (number) => number - 256 * parseInt(number / 256);

//********************************************************************** */
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
//In order to find the next number that is a square of itself first find the square root of n round that up to the next nearest whole number and then multiply that next whole number by itself
function nearestSq(n) {
  return Math.round(Math.sqrt(n)) ** 2;
}
//could have also wrapped everything inside Math.pow method
//***************************************************************** */

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function friend(friends) {
  return friends.filter((el) => el.length === 4);
}


//Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.

//"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"

function vaporcode(string) {
  let str = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] != " ") {
      str.push(string[i]);
    }
  }
  return str.join("  ").toUpperCase();
}
      
//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

let countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};
//Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.
function divCon(x) {
  return x.reduce(
    (acc, cur) => (typeof cur === "number" ? acc + cur : acc - Number(cur)),
    0
  );
}
//We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
}
//Javascript has a handy built-in Math.round(x) method that rounds a number to the nearest integer:
// But that is sometimes not enough! What if we wanted to round 3.1415926535 to two decimal places? While some languages (such as PHP) has a round() function that supports rounding to a specified number of decimal places (e.g. <?php round(3.1415926535, 4); /* 3.1416 (rounded to 4 d.p. as specified) */ ?>), Javascript does not!

// Task
// Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

Math.roundTo = function (number, precision) {
  return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
};

//alternative 
Math.roundToB = (number, precision) => Number(number.toFixed(precision));
//**************************************************************** */
// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

// Add the method

// isWorthIt
// to decide if the ship is worthy to loot. For example:

function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;

  this.isWorthIt = function () {
    return this.draft - this.crew * 1.5 >= 20;
  };
}
// I prefer this solution
function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}

Ship.prototype.isWorthItB = function () {
  return this.draft - this.crew * 1.5 > 20;
};

//Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

let Ghost = function () {
  this.color = ["white", "yellow", "purple", "red"][
    Math.floor(Math.random() * 4)
  ];
};

//******************************************************** */
//Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

//A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}
//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
const getMiddle = (s) =>
  s.length % 2 === 0
    ? `${s[s.length / 2 - 1]}${s[s.length / 2]}`
    : s[Math.round(s.length / 2 - 1)];

    //other solution that I saw on codewars 
    function getMiddleB(s) {
      return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
    
//My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.


function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  const ages = [];
  ages.push(age1, age2, age3, age4, age5, age6, age7, age8);
  let age = ages
    .map((el) => {
      return el * el;
    })
    .reduce((a, c) => a + c, 0);

  return Math.floor(Math.sqrt(age) / 2);
}

// other solutions I found on codewars 
function predictAgeB(age1, age2, age3, age4, age5, age6, age7, age8) {
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8];
  return Math.floor(
    Math.sqrt(arr.map((a) => a * a).reduce((b, c) => b + c)) / 2
  );
}

//other solutions I found on codewars 
function predictAge(...age) {
  var sum = 0;
  for (var i = 0; i < age.length; i++) {
    sum = age[i] * age[i] + sum;
  }

  return Math.floor(Math.sqrt(sum) / 2);
}