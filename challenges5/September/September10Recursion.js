// Find the factorial of a number Recursive method 
const findFactorial = (num) => {
    if (num === 2) {
        return 2 
    }
  
    return num*findFactorial(num-1)
}

console.log(findFactorial(5));


Iterative 
function findFactorialIterative(number) {
  let answer = 1;
// we start at 2 because 1*1 is 1 doesnt make a diff
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}


