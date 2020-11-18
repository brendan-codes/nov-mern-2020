/*
  ADD HONORIFIC

  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format

  Return a new array of strings in this format: "Honorific FirstName LastName"

  Bonus: avoid built in methods besides simple ones like .push

  // avoid  .split() as a bonus

*/

// Inputs
const honorific1 = "Mr.";
const names1 = [];
// Output: []

// Inputs
const honorific2 = "Sir";
const names2 = ["John, Elton", "Mckellen, Ian"];
// Output: ["Sir Elton John", "Sir Ian Mckellen"]

// Inputs
const honorific3 = "Dr.";
const names3 = ["Wright, Jane"];
// Output: ["Dr. Jane Wright"]

function fullName(honorific, arr){
  var output=[];
  for (let a=0; a<arr.length; a++) {
      //Go through each name entry: arr[0],arr[1],arr[2], ...
      for (let i=0; i<arr[a].length; i++) {
          //check for the space character
          if (arr[a][i] == " ") {
              var first="";
              var last="";
              var full=""

              //build first name
              for (let j=i+1;j<arr[a].length;j++) {
                  first = first+=arr[a][j];
              }

              //build last name
              for (let k=0;k<=i-2;k++) {
                  last = last+=arr[a][k];
              }
              //assemble full name
              full=honorific+" "+first+" "+last;
              output.push(full);
          }
      }
  }
  return output;
}
console.log(fullName(honorific3,names3));
// Outputs:
// []
// [ 'Sir Elton John', 'Sir Ian Mckellen' ]
// [ 'Dr. Jane Wright' ]



// LONGEST NONREPEATING SUBSTRING

// Given a string, find the length of the longest substring without repeating characters.
// bonus: O(n)

// str = "abc"
// => 3

// str = "bbb"
// => 1

// str = "cabc"
// => 3

// str = "aabbc"
// => 2


// str = "dvadf"
// => 4

// O(n)

let nonRepeating = str => {
  let obj = {};
  let longestLen = 0;
  let currentLen = 0;
  let strArr = [...str]
  for (let i = 0; i < strArr.length; i++) {
    if (obj.hasOwnProperty(strArr[i])) {
      currentLen = 0;
      i = obj[strArr[i]];
      obj = {};
    } else {
      currentLen++;
      if (currentLen > longestLen)
        longestLen = currentLen;
      obj[strArr[i]] = i;
    }
    console.log(i);
    console.log(obj);
  }
  return longestLen;
}

console.log(nonRepeating("dvadf"))