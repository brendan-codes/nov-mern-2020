/*
  https://leetcode.com/problems/backspace-string-compare/

  BACKSPACE STRING COMPARE

  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.

  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time

  Examples:
  Input: S = "ab#c", T = "ad#c"
  Output: true
  Explanation: Both S and T become "ac"

  Input: S = "ab##", T = "c#d#"
  Output: true
  Explanation: Both S and T become ""

  Input: S = "a##c", T = "#a#c"
  Output: true
  Explanation: Both S and T become "c"
*/
const backSpace = (strOne, strTwo) => {
  let strOneArr = strOne.split('');
  let strTwoArr = strTwo.split('');
  strOneArr.map((val, i) => {
      if(val === '#')
      {
          strOneArr.splice(i - 1, 2);
      }
  })
  strTwoArr.map((val, i) => {
      if(val === '#')
      {
          strTwoArr.splice(i - 1, 2);
      }
  })
  if(strOneArr.join() === strTwoArr.join())
  {
      return true;
  } else {
      return false;
  }
}
console.log(backSpace('ab#c', 'ad#cd#'));


/*
    CAN STRING ONE BE MADE FROM STRING TWO

    Given two strings,
    return true if the first string can be built from the letters in the 2nd string

    Ignore case

    Input: "Hello World", "lloeh wordl"
    Output: true

    Input: "Hey", "hello"
    Output: false, second string is missing a "y"

    Input: "hello", "helo"
    Output: false, second string doesn't have enough "l" letters
 */

function stringCheck(str1, str2){
if (str1 == "" || str2 == ""){
  return true;
}
if (str1.length > str2.length){
  return false;
}

var arr1 = str1.toLowerCase().split("").sort();
var arr2 = str2.toLowerCase().split("").sort();

for (var i = 0; i<str1.length; i++){
  if (arr1[i]!=arr2[i]){
    return false;
  }
}
return true;
}

stringCheck("Hello World", "lloeh wordl");
stringCheck("Hey", "helo");
stringCheck("waters wait", "water waits");
stringCheck("hello", "helo");