
// Simple interest on a loan is calculated by simply taking the initial amount (the principal, p) and multiplying it by a rate of interest (r) and the number of time periods (n).

// Compound interest is calculated by adding the interest after each time period to the amount owed, then calculating the next interest payment based on the principal PLUS the interest from all previous periods.

// Given a principal p, interest rate r, and a number of periods n, return an array [ total owed under simple interest, total owed under compound interest ]

// Notes:

// Round all answers to the nearest integer
// Principal will always be an integer between 0 and 9999
// interest rate will be a decimal between 0 and 1
// number of time periods will be an integer between 0 and 50


function interest(P, r, n) {
  //create an array and added the first value total with simple interest
  const result = [Math.round(P * r * n + P)];
  //calculate second value of total with compound interest multiply r*P to get interest and add to P to find the total owed after each term then reassign it . Repeat for the number of terms
  for (i = 1; i <= n; i++) {
    P = P * r + P;
  }
  //push the P value to the array
  result.push(Math.round(P));
  return result;
}
console.log(interest(100, 0.1, 2));
//Your task is to sum the differences between consecutive pairs in the array in descending order.
//Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).

function sumOfDifferences(arr) {
  let sortedarr = arr.sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
  let total = 0;
  for (let i = 0; i < sortedarr.length - 1; i++) {
    total += sortedarr[i] - sortedarr[i + 1];
  }
  return total;
}
//Other solution
const sumOfDifferences = (arr) =>
  arr
    .sort((a, b) => b - a)
    .map((a, i) => a - arr[i + 1] || 0)
    .reduce((a, b) => a + b, 0);