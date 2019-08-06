var answers = [];
answers[0] = 0;
answers[1] = 1;
answers[2] = 2;

function numberWays(steps) {
  if( steps == 1 ) {
    console.log(steps);
    return 1;
   }
  if( steps == 2 ) {
    console.log(steps);
    return 2;
   }
  //var c1 = numberWays(steps-1);
  //var c2 = numberWays(steps-2);

  if(answers[steps] !== undefined && answers[steps] > 1) {
    return answers[steps];
  }

  console.log(steps);
  var sum = numberWays(steps-1) + numberWays(steps-2); // + numberWays(steps-3);
  console.log(steps);
  answers[steps] = sum;
  console.log(sum);
  return sum;
}

let result = numberWays(5);
console.log("total: " + result);
