// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24


function miniMaxSum(arr) {
  let minVal = Math.min(...arr);
  let maxVal = Math.max(...arr);
  let minSum = arr.reduce((a, c) => a + c) - maxVal;
  let maxSum = arr.reduce((a, c) => a + c) - minVal;
console.log(`${minSum} ${maxSum}`);
}

//Alternative solution
