//do Fibonacci problem both iteratively and recursively
// Given n, calculate F(n).
function fib(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}
//Time complexity is 02^N
