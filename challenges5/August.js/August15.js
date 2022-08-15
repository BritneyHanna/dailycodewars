// Find the anonymous function in the given array and use the function to filter the array
// Input
// Your input. First Parameter will be an array with an anonymous function somewhere in the lot, The second Parameter will be an array which you will filter using the anonymous function you find.
// Output
// Your output. Output a filtered version of the second parameter using the function found in the first parameter.

const FindFunction = function (func, arr) {
  const anonymous = func.find((el) => typeof el == "function");
  return arr.filter(anonymous);
};