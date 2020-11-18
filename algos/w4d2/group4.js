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

function stringCompare (s,t) {
  let backspaceSign = [];
  [...s].forEach((char, idx) => {
    if(char == "#") {
      backspaceSign.push(indx)
    }
  })

}

stringCompare("ab##", "c#d#");


function stringCompare(s, t) {
  let sArr = [...s], tArr = [...t];
  while(tArr.includes("#") || sArr.includes("#")) {
    for (let i = 0; i < sArr.length; i++) {
      if (sArr[i] == "#") {
        i != 0 ? sArr.splice(i - 1, 2) : sArr.splice(i, 1);
        break;
      }
    }
    for (let i = 0; i < tArr.length; i++) {
      if (tArr[i] == "#") {
        i != 0 ? tArr.splice(i - 1, 2) : tArr.splice(i, 1);
        break;
      }
    }
  }
  return sArr.join() == tArr.join();
}

console.log(stringCompare("a##c", "#a#c"));
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


function stringOneFromStringTwo(a,b){
  if(b.length<a.length) return false;
  const bCopy = b.toUpperCase();
  let frequencyTable = {};
  [...a.toUpperCase()].forEach(val => {
    frequencyTable[val] ? frequencyTable[val]++ : frequencyTable[val] = 1;
  });
  console.log(frequencyTable);
  [...b.toUpperCase()].forEach(val => {
    frequencyTable[val] ? frequencyTable[val]-- : null;
  })
  return Object.keys(frequencyTable).filter(val=> frequencyTable[val]>0).length == 0;
}

stringOneFromStringTwo("Hello World", "lloeh wordl")