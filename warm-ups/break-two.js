/*
function breakTwo(number) {
  var largest = 1;
  var larger = 1;
  for ( i = 1; i < number; i++) {
    var left = number - i;
    var right = i;
    //console.log("left: " + left + "; right: " + right);
    if (largest < left * right) {
      largest = left * right;
    }
  }
  return largest;
}
*/

function maxProduct(number) {

  if (number <= 4) {
    return number;
  }

  if (cache[number] > 0){
    return cache[number];
  }

  var larger = 0;
  var largest = 0;
  var pn = 1;
  var pm = 1;

  for (var i = 1; i < number; i++) {
    pn = i * (number - i);
    pm = i * maxProduct(number - i);

    if (larger < pn) {
      larger = pn;
    }
    if (larger < pm) {
      larger = pm;
    }
    if (largest < larger) {
      largest = larger;
    }
  }
  cache[number] = largest;
  return largest;
}
var length = 1938;
var cache = Array(length+1).fill(0);

let result = maxProduct(length);
console.log(result);
