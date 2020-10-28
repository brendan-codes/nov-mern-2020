// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call merge(arr, l, m, r)

// [88, 22, 44, 12, 99, 111, 9, 15, 49];

var arr = [22, 88, 44, 12, 99, 111, 9, 15, 49];
function mergeSort(arr) {
    var m = Math.floor(arr.length / 2)
    var l = arr.slice(0, m);
    var r = arr.slice(m, arr.length);
    if(arr.length == 1) {
        return arr;
    } else {
        left = mergeSort(l);
        right = mergeSort(r);
        return mergeSortedArrays(left,right);
    }
}
console.log(mergeSort(arr));


// return a new sorted array with all of the values of arr1 and arr2
function mergeSortedArrays(arr1, arr2) {
    let newArr = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            j--;
            newArr.push(arr1[i]);
        } else {
            i--;
            newArr.push(arr2[j]);
        }
        j++;
        i++;
        if(j == arr2.length) {
            newArr.push(arr1[i]);
        } else if (i == arr1.length) {
            newArr.push(arr2[j]);
        }
    }
    return newArr;
}

console.log(mergeSortedArrays([22,55,77],[99,111]))


// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - var x = arr1.concat(array2, array3)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals


//   - arr.slice([begin[, end]])
//     - returns a copy of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

// var arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m, arr.length);