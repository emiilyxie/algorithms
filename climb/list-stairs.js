var answers = [];
answers[0] = [""];
answers[1] = ["1"];
answers[2] = ["1 2", "- 2"]

function numberWays(n) {

  if( n == 1 ) {
    //console.log(steps);
    return [1];
   }
  if( n == 2 ) {
    //console.log(steps);
    return ["1 2", "- 2"];
   }

  if(answers[n] !== undefined) {
    return answers[n];
  }

  var ways = [];

  var pre1 = numberWays(n-1);
  for( var i = 0; i < pre1.length; i++) {
    ways.push(pre1[i] + " " + n);
  }

  var pre2 = numberWays(n-2);
  for( var i = 0; i < pre2.length; i++) {
    ways.push(pre2[i] + " - " + n);
  }

  answers[n] = ways;
  return answers[n];
}

let methods = numberWays(30);
for (i = 0; i < methods.length; i++) {
  console.log(methods[i]);
}
