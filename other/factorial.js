function factorial(n) {
  if ( n == 1 ){
    return 1;
  }
  return n * factorial(n-1);
}

let number = factorial(1938);
console.log(number);
