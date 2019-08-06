function valueReference(num, str, arr) {
  // console.log("======= inside of function : START =======")
  // console.log("num = " + num);
  // console.log("str = " + str);
  // console.log("arr = " + arr);

  // make some changes inside the function now!

  num = num + 5;
  str = str + " and stuff";
  arr.push("elei");

  // console.log("changed num = " + num);
  // console.log("changed str = " + str);
  // console.log("changed arr = " + arr);
  //console.log("====== inside of function : END ======")
}



let num = 2;
let str = "hi";
let arr = ["ele1", "ele2"];

console.log("changed num = " + num);
console.log("changed str = " + str);
console.log("changed arr = " + arr);

valueReference(num, str, arr);

console.log("======== after function call ==========")
console.log("changed num = " + num);
console.log("changed str = " + str);
console.log("changed arr = " + arr);
