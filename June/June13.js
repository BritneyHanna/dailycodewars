//Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
//eg. ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]


function evenNumbers(array, number) {
  return array.filter((el) => el % 2 === 0).splice(-number);
}

//.splice -3 will elete and return the last 3 numbers, -2 last 2 numbers etc 