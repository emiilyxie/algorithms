
// amount: total amount of money you want to make
// coins: array of the value of the coins (1, 2, or 5)
// setsize: how types of coins are used

/*
coinChange(amount, setsize, coins)

=

coinChange(amount, setsize-1, coins) // without 5

+

coinChange(amount-coins[setsize], setsize, coins) // with 5
*/

function coinChange(amount, setsize, coins){

  if (amount == 0) {
    return 1;
  }

  if (amount < 0 || setsize == 0 && amount >= 0) {
    return 0;
  }

  //console.log("amount: " + amount +"; setsize: " + setsize + "; coins: " + coins);
  //console.log(coins[setsize-1]);
  var result = coinChange(amount, setsize-1, coins) + coinChange(amount-coins[setsize-1], setsize, coins);
  return result;
}

var coins = [1, 5, 10];
let answer = coinChange(154, 3, coins);

console.log(answer);
