  // Time Complexity: O(n) - linear order
  // Space complexity: constant   

function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  arr1 = []
  arr2 = []

  for 0 through word.length
    store each char in arr1

  for word.length through 0
    store each char in arr2

  is arr1 equal to arr2 ?
    yes: return true
    no: return false
*/

/*
  2 loops through word
  First loop, store order of letters in word in arr1
  Second loop, store order of letters backwards in word in arr2
  compare arrays' equality, return true if equal else return false
*/

/*
  Add written explanation of your solution here
*/

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
