// #1 Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 0-9 and it's missing a number, how do you find it?

// given [3, 0, 1]
// return 2

//     i  0, 1, 2, 3, 4, 5, 6, 7, 8 : ExpectedSum=36 + 9 =45
// given [5, 2, 7, 8, 4, 9, 3, 0, 1]: Sum = 39
// return 6                           Difference = 45 -39 = 6

// 0(n)
// 
arr= [3, 0, 1]
arr3= [3,2, 1]

function findMissingValue(arr) {
    let max = arr.length
    let expectedSum = 0
    let sum = 0
    let i;
    for (i = 0 ;i<max;i++){
        expectedSum += i
        sum += arr[i];
        // console.log(sum); 
    }
    expectedSum += i ;
    return expectedSum - sum;
}

console.log(findMissingValue(arr))

    // find min  start at min, i+1 exist?  arr.length



// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

// Given [10, 11, 12, 13, 17, 18, 3, 5, 6, 9]
// return 3

arr1 = [10, 11, 12, 13, 17, 18, 2, 3, 5, 6, 9]
arr2 = [10, 11, 12, 13, 17, 18]
function minOfSortedRotated(arr){

let i = 0;
while(arr[i] < arr[i+1] && i < arr.length){
    i++;
}

// if(i == arr.length-1){
//     return arr[0]
// }

// return arr[i+1];

return i==arr.length -1 ?  arr[0] : arr[i+1]
}

console.log(minOfSortedRotated(arr2))