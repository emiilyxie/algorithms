// Warm-Up #1 -- 9/23/18
//10 = 3 * 3 * 2 * 2

function maxProduct(n) {
  var product = 1;
  for (var i = n; i > 4; i = i - 3 ){
    product = product * 3;
  }
  product = product * i;

  console.log(product);
}

maxProduct(78);
