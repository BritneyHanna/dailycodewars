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

