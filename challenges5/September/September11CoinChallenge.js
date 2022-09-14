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

