// #1 Missing Value

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
    sum = 0;
    sum2 = 0;
    for(var i = 0; i <= arr.length; i++) {
        sum += i;
        if (i != arr.length)
            sum2 += arr[i];
    }
    return sum - sum2;
}

console.log(findMissingValue([5, 2, 7, 8, 4, 9, 3, 0, 1]))




function findMissing(arr){
    let missing= []
    for(let i = 0; i < arr.length; i++){
      if(!arr.includes(i,[0,arr.length])){
        missing.push(i);
      }
    }

    return missing;
  }

  console.log(findMissing([1,0,3]));

// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

// Given [10, 11, 12, 13, 17, 18, 3, 5, 6, 9]
// return 3


function minOfSortedRotated(arr, left=-1, right=-1) {
    if (left == -1 && right == -1) {
        left = 0;
        right = arr.length - 1;
    }
    let middle = Math.floor((right - left) / 2) + left;
    if(arr[middle] < arr[middle - 1])
        return arr[middle];

    return arr[middle] < arr[left] ? minOfSortedRotated(arr, left=left, right=middle) : minOfSortedRotated(arr, left=middle, right=right);
}
console.log(minOfSortedRotated([10, 11, 12, 13, 17, 18, 3, 5, 6, 9]));



function minOfSortedRotatedBad(arr){
    min = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < min)
            min = arr[i];
    }
    return min;
}