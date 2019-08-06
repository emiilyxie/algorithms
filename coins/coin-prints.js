
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

function coinChange(amount, setsize, coins, usedcoins){

  if (amount == 0) {
    console.log(usedcoins); //print the s
    return 1;
  }

  if (amount < 0 || setsize == 0 && amount >= 0) {
    return 0;
  }

  let used2 = usedcoins.slice(0);
  let branch2 = coinChange(amount, setsize-1, coins, used2);

  let used1 = usedcoins.slice(0);
  used1[setsize-1] = used1[setsize-1] + 1;
  let branch1 = coinChange(amount-coins[setsize-1], setsize, coins, used1);

  var result = branch1 + branch2;
  return result;
}

var coins = [1, 5, 10, 25];
var usedcoins = [0, 0, 0, 0];
let answer = coinChange(425, coins.length, coins, usedcoins);

console.log(answer);
