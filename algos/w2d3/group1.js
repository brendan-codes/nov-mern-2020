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
// Sn = n()
// Sn = n((a1 + an)/2)
// sum += arr[i]
// Sn - sum

function findMissingValue(arr) {
    let min = arr[0];
    let max = arr[0];
    let sn = 0;
    let sum = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i]
        }
        sum += arr[i];
    }
    sn = (len + 1) * ((min + max) / 2);
    return sn - sum;
}

var arr = [1, 2, 3, 4, 6, 7, 8, 9]


// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

// Given [ 11, 12, 13, 17, 18,3, 5, 6, 9,10]
// ex given [10, 5, 6, 13, 17, 18, 3, 11, 12, 9]
// return 3

function minOfSortedRotatedOn(arr){
    let min = arr[0]
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        }
    }
    return min
}

function minOfSortedRotateOlogn(arr, middle) {
    if (middle == null) {
        let middle = Math.floor(arr.length / 2);
    }
    let left = middle - 1;
    let right = middle + 1;

    if (arr[middle] > arr[left] && arr[middle] < arr[right]) {
        return arr[middle];
    }

    return arr[middle] < arr[left] ? minOfSortedRotateOlogn(arr, ) : minOfSortedRotateOlogn(arr, left, right);
}
