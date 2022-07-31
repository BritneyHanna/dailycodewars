// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

function Dog(breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

Dog.prototype.bark = function () {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");
//**************************************************************************** */
// Here is a piece of code:

// function getStatus(isBusy) {
//   var msg = (isBusy ? "busy" : "available");
//   return
//   {
//     status: msg
//   }
// }
// Expected Behaviour
// Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

// But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.

const getStatus = (isBusy) => {
  let msg = isBusy ? "busy" : "available";
  return { status: msg };
};

//More concise syntax I found on codewars
const getStatusB = (isBusy) => ({ status: isBusy ? "busy" : "available" });

//**************************************************** */
//Come here to practice the Arrow style functions Not much else to say good luck!
// Details
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a
let ArrowFunc = (arr) => arr.map((el) => String.fromCharCode(el)).join("");

//The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).
function numberToPower(number, power) {
  let num = 1;
  for (let i = 1; i <= power; i++) {
    num = num * number;
  }
  return num;
}

//Node applications require a file named package.json on the root of the project.

// You can create this file manually or have the command npm init to assist you in this process.

// The fields name and version are mandatory. But there a lot of other fields that you can include:

const configuration = {
  name: "your-pack-name",
  description: "Test",
  version: "5.2.3",
};

//****************************************************************** */
// Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.

// One of the simplest, yet most important factors is compensation. As developers we know how much money we need to support our lifestyle, so we generally have a rough idea of the minimum salary we would be satisfied with.

// Let's give this a try. We'll create a function match which takes a candidate and a job, which will return a boolean indicating whether the job is a valid match for the candidate.

// A candidate will have a minimum salary, so it will look like this:

// let candidate = {
//   minSalary: 120000
// }
// A job will have a maximum salary, so it will look like this:

// let job = {
//   maxSalary: 140000
// }
// If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

// For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary. However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the candidate is a rockstar who enjoys programming on Codewars in their spare time. The company offering the job may be able to work something out.

function match(candidate, job) {
  return !candidate.minSalary || !job.maxSalary
    ? error
    : candidate.minSalary * 0.9 <= job.maxSalary;
}
//While making a zork-type game, you create an object of rooms. Unfortunately, the game is not working. Find all of the errors in the rooms object to get your game working again.

let rooms = {
  first: {
    description: "This is the first room",
    items: {
      chair: "The old chair looks comfortable",
      lamp: "This lamp looks ancient",
    },
  },
  second: {
    description: "This is the second room",
    items: {
      couch: "This couch looks like it would hurt your back",
      table: "On the table there is an unopened bottle of water",
    },
  },
};
//*********************************************************** */

// DESCRIPTION:
// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
//need to review

Array.prototype.filter = function (func) {
  let answer = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) answer.push(this[i]);
  }
  return answer;
};
//***************************** */

// Generate user links
// Your task is to create userlinks for the url, you will be given a username and must return a valid link.

// Example
// generate_link('matt c')
// http://www.codewars.com/users/matt%20c

let generateLink = (user) =>
  `http://www.codewars.com/users/${encodeURIComponent(user)}`;
  //******************************************************** */
//   Overview
// A circular object is any object containing a property that refers to itself. An example of a circular object can be found right here at Codewars - the very programming environment that they provide you with. Just try it - print the details of the current programming environment to the console (I will not be giving you any hints - you'll have to figure this out yourself) and scroll through the printed text until you find a property named global. As you would expect, the printed output would say that it is [circular]. Now let's try printing the global property of the programming envoronment to the console. What do you see? If you followed the instructions properly you would see the exact same thing being printed out! Impressed? You can test this further by then printing the global property of the global property of the current environment to the console and you would still see the exact same thing being printed. In fact, no matter how many levels you go "inside" the object, you would still see the exact same thing being printed out.

// Which leads us to the task described below ...

// Task
// Define a circular object circular such that the following are true:

let circular = {
  value: "Hello World",
};
circular.self = circular;
//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30

const cockroachSpeed = (s) => Math.floor(s * 27.7778);