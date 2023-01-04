function reverse(word){
  // const wordArray = word.split("") 
  // const reverseWordArray = wordArray.reverse()
  // const reverseWord = reverseWordArray.join("")
  // return reverseWord
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
 const wordPal = reverse(word)// Write your algorithm here
   
 return word === wordPal;
//  if (word === wordPal) {
//   return true
//  } else{
//   return false
//  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
// mom === mom //true
//abba === abba //true

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
