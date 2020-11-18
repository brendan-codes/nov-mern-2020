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

function honorificName(prefix, names) {
let arr= [] //final array
let nameArr =[] //array to arrange names to correct order
let name =[]
for (let i = 0; i<names.length;i++){
  for(let char of names[i]){
    if(char == ",") {
      continue;
    } else if(char == " " || i == (namesArr.length -1)){
nameArr.unshift(name.join(''))
}
}
}
}

const AddHonorific = (honorific, names) => {

  let resArr = []
  let singleName = []


  for (let name of names) {
      for (var i = 0; i<name.length; i++){
          if (name[i] === ' '){
              console.log(i, name[i])
              singleName.push(honorific)
              // resArr.unshift(prefix)
              singleName.push(name.slice(i+1, name.length))
              singleName.push(name.slice(0,i))
              resString = singleName.join(' ')
              resArr.push(resString)
              singleName = []
          }
      }
  }


  return resArr

}
console.log(addHonorific(honorific1, names3))


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

function lengthofLongestSubstring(str){
let max_len = 0;
let curr = 0;
let hash = {};
if(s.length < 2) {
    return s.length;
}
for(let i = 0; i < s.length;  i++) {
    if(hash[s[i]] == null) {
        curr += 1;
    } else {
        curr = Math.min(i - hash[s[i]], curr + 1);
    }
    max_len = Math.max(max_len, curr);
    hash[s[i]] = i; //save the index
}
return max_len;
};
console.log(lengthOfLongestSubstring('aabbcc'))