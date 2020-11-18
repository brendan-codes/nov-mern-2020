// "Possible Palindrome"

// Given a string
// return whether or not it's possible for it to be re-ordered into a palindrome
// What is it about a string that makes it possible for it to be a palindrome?

// palindrome is a string that when reversed is still equal to itself.

// "aabbccdde" => true
// "abcdedcba"

// "racecar"
// "tacocat"

// "baba" => true
// "baab"


// "bcda" => false
// "abcd"


function canStrBecomePalindrome(str) {
  let newDict = {};
  let counter = 0;
  for (let i = 0; i<str.length; i++){
    if (newDict.hasOwnProperty(str[i])){
      newDict[str[i]]++;
    }
    else{
      newDict[str[i]] = 1;
    }
  }
  for (const val in newDict){
    if (newDict[val]%2 != 0){
      counter++;
    }
    if (counter > 1){
      return false;
    }
  }
  return true;
}


console.log(canStrBecomePalindrome('aabbccdde'));


function canStrBecomePalindromePretty(str) {
  let newDict = {};
  let counter = 0;
  for (let i = 0; i<str.length; i++){
    newDict.hasOwnProperty(str[i]) ? newDict[str[i]]++ : newDict[str[i]] = 1;
  }
  console.log(newDict)
  for (const val in newDict){
    newDict[val]%2 != 0 ? counter++ : counter
  }
  return counter <= 1
}