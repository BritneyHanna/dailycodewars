1.//do Fibonacci problem both iteratively and recursively
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






2.//return a fibonnaci sequence that is K numbers long 

const fib=(K)=>{
  let fibarr=[0,1];
  while(K>2){
    const[firstnum,secondnum]=fibarr.slice(-2)
    fibarr.push(firstnum+secondnum);
    K--
  }
  return fibarr
}

console.log(fib(12))

//Time complexity O(N)
