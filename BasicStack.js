//Most basic implementation of a stack, using arrays (these already have methods such as push, or pop)
//used for finding palindromes
var stack = [];

var word="tacocat";
var wordReverse="";

//push to stack
for (var i=0; i < word.length; i++){
  stack.push(word[i]);
}

//pop from stack, reversing our word
for (var i=0; i < word.length; i++){
  wordReverse += stack.pop();
}

if (word === wordReverse){
  console.log("Palindrome!");
} else {
  console.log("Not a palindrome!");
}
