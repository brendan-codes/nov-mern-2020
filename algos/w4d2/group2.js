/*
  https://leetcode.com/problems/backspace-string-compare/

  BACKSPACE STRING COMPARE

  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.

  # character means a backspace character.

aq
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
function backSpace(str) {
  let strArray = [];
  let count = 0;
  for(let i = 0; i < str.length; i++) {
      if(str[i] !== "#") {
          strArray.push(str[i]);
      } else if(str[i] === "#" && strArray.length > 0) {
          strArray.pop();
      } else {
          count++;
      }
  }
  console.log(strArray);
  return strArray;
}

function compareStr(str1, str2) {
  let str1Array = backSpace(str1);
  let str2Array = backSpace(str2);
  console.log(str1Array);
  console.log(str2Array);
  return str1Array === str2Array ? true : false;
}

console.log(compareStr("ab##", "c#d#"));


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