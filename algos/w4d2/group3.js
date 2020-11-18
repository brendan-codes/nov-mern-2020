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
const s = "ab##", t = "c#d#"
function stringCompare(s,t){
    let arr=[]
    let arr2 = []

    for(var i = 0; i<s.length;i++){
        // console.log(s[i])
        if(s[i]!=="#"){
            arr.push(s[i])
        }
        if(s[i]==="#"){
            arr.pop(arr[i])
        }
    }
    console.log(arr)
    for(var i = 0; i<t.length;i++){
        console.log(t[i])
        if(t[i]!=="#"){
            arr2.push(t[i])
        }
        if(t[i]==="#"){
            arr2.pop(arr[i])
        }
    }
    return arr2.length === arr.length;
}
console.log(stringCompare(s,t))

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

function stringLength(x,y){
  let dic = {}
  let dic1 = {}
  for(var i = 0; i<x.length;i++){
      if(dic.hasOwnProperty(x[i])){
          dic[x[i]]++
      }else{
          dic[x[i]]=1
      }
  }
  for(var i = 0; i<y.length;i++){
      if(dic1.hasOwnProperty(y[i])){
          dic1[y[i]]++
      }else{
          dic1[y[i]]=1
      }
  }
  if(Object.keys(dic)===Object.keys(dic1)){

  }

  console.log(dic, dic1)
}
console.log(stringLength(x,y))