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
//Iterative solution

const fibAtPosition = (position) => {
  //first numbers in the fibonacci sequence are the same value as their index
  if (position <= 1) return position;
  const fibseq = [0, 1];

  for (let i = 0; i <= position; i++) {
    const [nexttoLastNum, lastNum] = fibseq.slice(-2);
    fibseq.push(nexttoLastNum + lastNum);
  }
  return fibseq[position];
};



//********************************************************************************************** */


2.//return a fibonnaci sequence that is K numbers long 
//iterative solution
const fib=(K)=>{
  let fibarr=[0,1];
  while(K>2){
    const[firstnum,secondnum]=fibarr.slice(-2)
    fibarr.push(firstnum+secondnum);
    K--
  }
  return fibarr
}

//recursive solution 
const fib = (K, fibarr = [0, 1]) => {
  if (K <= 2) {
    return fibarr;
  }
  const [firstnum, secondnum] = fibarr.slice(-2);
  return fib(K - 1, [...fibarr, firstnum + secondnum]);
};

console.log(fib(12));


