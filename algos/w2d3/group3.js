f// #1 Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 1-9 and it's missing a number, how do you find it?

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6

// 0(n)

function findMissingValue(arr) {
    var currentindex = 0;
    for (i = 1; i < 10; i++){
        while (i != arr[currentindex]){
            if (currentindex = arr.length-1){
                return i;
            }
        }
    }
}

console.log(findMissingValue([3,0,1]));

// function findMissingValue(arr) {
//   let min = 0;
//   let max = arr.length;
//   for(let i=0;i<arr.length;i++){
//     if (!arr.includes(i)){
//       return i
//     }
//   }
// }
function findMissingValue(arr){
    var dict={};
    for(var count=0;count<=arr.length;count++)
    {
        dict[count]=count;
    }
    for(count=0;count<arr.length;count++)
    {
        if(dict[arr[value]])
            delete dict[arr[value]];
    }
    return dict;
}

function findMissingValue(arr) {
  var currentindex = 0;
  for (i = 1; i < 10; i++){
      while (i != arr[currentindex]){
          if (currentindex == arr.length){
              return i;
          }
          currentindex++;
      }
      currentindex = 0;
  }
}

console.log(findMissingValue([3,0,1,2,5,4,8,6]));


function findMissingValue(arr){
  let n = arr.length
  let total = n*(n+1)/2
  for (let i=0; i<n; i++){
    total -= arr[i]
  }
  return total;
}

// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

// Given [9, 10, 11, 12, 13, 17, 18, 3, 5, 6]
// return 3

function minOfSortedRotated(arr){
  if (arr.length<=1){
    return arr[0]
  }
  if (arr[0]<arr[arr.length-1]){
    return arr[0]
  }
  const length = arr.length
  let copies = [...arr]
  for (let i=0;i<length;i++){
    if (copies[copies.length-1]<arr[i]){
      copies.pop()
    }else{
      return arr[copies.length]
    }
  }
}

console.log(minOfSortedRotated([9, 3, 5, 6]))

function minOfSortedRotated2(arr){
    if(arr.length === 0) return [];
    if(arr.length === 1) return arr[0];
    var start = 0
    if(arr[0] > arr[arr.length-1]) {
        start = arr.length - 1;
        while(arr[start] > arr[start-1]) {
            start--;
        }
    }
    return arr[start];
}
console.log(minOfSortedRotated2([10, 11, 12, 13, 17, 18, 3, 5, 6, 9]));

function minOfSortedRotated2(arr){
  var min = arr[0];
  for (i = 0; i<arr.length/2; i++){
    if (min > arr[i]){
      min = arr[i]
    }
    if (min > arr[arr.length-i]){
      min = arr[arr.length-i]
    }
  }
  return min;
}
console.log(minOfSortedRotated2([10, 11, 12, 13, 17, 18, 3, 5, 6, 9]));