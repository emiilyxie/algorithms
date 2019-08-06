var term = "racec2ar";
var word = term.split("");

function isPalindrome(word) {
  if ( word.length == 0 || word.length == 1) {
    return "it's a palindrome";
    // console.log("it is a palindrome");
    // return true;
  }

  if ( word[0] == word[word.length - 1] ) {
    console.log("before slice: " + word);
    word = word.slice(1, word.length - 1);
    console.log("after slice: " + word);
    return isPalindrome(word);
  }
  else {
    return "not a palindrome";
    // return false;
  }
}

var result = isPalindrome(word);
console.log(term + " is a palindrome: " + result);



racec2ar
acec2a
cec2
