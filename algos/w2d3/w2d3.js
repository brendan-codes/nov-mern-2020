// #1 Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 0-9 and it's missing a number, how do you find it?

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6

// 0(n)
function findMissingValue(arr) {
    let arrSum = 0;
    let realSum = arr.length;

    for (var i = 0; i < arr.length; i++) {
        arrSum += arr[i];
        realSum += i;
    }

    return realSum - arrSum;
}


// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

// Given [17, 18, 3, 5, 6, 9, 10, 11, 12, 13]
// return 3

function minOfSorted(arr, low = 0, high = arr.length - 1) {
    // define middle
    let middle = Math.floor((low + high) / 2);

    // not rotated
    if (high < low) {
        return arr[0]
    }

    // one element
    if (high === low) {
        return arr[low];
    }

    // check if middle+1 is minimum element
    if (middle < high && arr[middle + 1] < arr[middle]) {
        return arr[middle + 1];
    }

    // check if mid itself is min
    if (middle > low && arr[middle] < arr[middle - 1]) {
        return arr[middle]
    }

    // otherwise recurse left or right
    if (arr[high] > arr[middle]) {
        return minOfSorted(arr, low, middle - 1)
    } else {
        return minOfSorted(arr, middle - 1, high);
    }

}