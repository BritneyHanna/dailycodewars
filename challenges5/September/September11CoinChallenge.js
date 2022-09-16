//Problem statement#
// Given an array of coins, write a function to compute the number of ways you can make that amount using those coins.

// Note: There is an unlimited number of each coin type available.

// Input#
// an amount

// an array, coins, containing different coins (in cents ¢
// ¢
// )

// Output#
// The number of ways to get the amount using the coins available
//recursive 
function returnWays(coins, numOfCoins, amount) {
  if (amount === 0) return 1; // only one way to return zero amount

  if (amount < 0) return 0; // No solution exists for negative amount

  if (numOfCoins < 0 && amount > 0) return 0; // If no coins left

  return (
    returnWays(coins, numOfCoins, amount - coins[numOfCoins]) +
    returnWays(coins, numOfCoins - 1, amount)
  );
}

var coins = [1, 2, 3];
var amount = 4;
console.log(returnWays(coins, coins.length - 1, amount));

// Dynamic solution need to review 
function returnWays(amount, coins) {
  //initialize the numOfways array with zeros
  var numOfways = [];
  for (var i = 0; i <= amount; i++) {
    numOfways[i] = 0;
  }
  //there is only one way to return zero cents
  numOfways[0] = 1;
  //traverse the "coins" array
  for (var j = 0; j < coins.length; j++) {
    //store the coin value at current index in the variable coin
    var coin = coins[j];
    //starting bottom up and reducing amount with current coin each time
    for (var hAmount = coin; hAmount <= amount; hAmount++) {
      var change = hAmount - coin;
      numOfways[hAmount] += numOfways[change];
    }
  }

  return numOfways[amount];
}

var coins = [1, 2, 3];
var amount = 4;
console.log(returnWays(amount, coins));

function main(listsize, distances, start, end) {
  //I want a list of the numbers that are between start and end
  //if the distances are an array I can just filter for the ones >start<end or I can do a for loop since I know the length of the list
  //r=the output says to print the space separated integars so maybe I can just console log?
  //Ill save the ints in an array
  let result = [];
  for (let i = 1; i <= listsize; i++) {
    if (i > start && i < end) {
      result.push(i);
    }
  }
  if (result.length > 0) {
    return result;
  } else {
    return -1;
  }
}


function main(orderPlaced_size, N, K) {
  // so we check the list every 3 elements at a time and we return the first element that is less than 0,
  //Ok so I thought this wrong I would check every three elements and then the first of those elements that is less than zero is what I would return  
  //return the array
  let result = [];
  for (let i = 0; i < orderPlaced_size - K; i++) {
    for (let j = i; j < i + K; j++) {
      if (orderPlaced_size[j] < 0) {
        result.push(orderPlaced_size[j])
      }

    }
    return result
  }
  return -1
}
