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