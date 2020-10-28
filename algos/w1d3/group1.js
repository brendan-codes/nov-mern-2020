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

function mergeSort(arr) {}


// return a new sorted array with all of the values of arr1 and arr2
function mergeSortedArrays(arr1, arr2) {
const finalArr = []
for(let i = 0; i < arr1.length; i++) {
    let key = arr[i]
    for (let j=0; j<arr2.length;i++){
        if (arr2[j] < key){
        finalArr.push(arr2[j])
        } else {
        finalArr.push(key);
        }
    }
    finalArr.push(arr[i])
}


}

// [3, 4, 5, 6,][1,2,9, 10]



function mergeSortedArrays1(arr1, arr2) {
    let finalArr = [];
    if (arr1.length > arr2.length) {
        let length = arr1.length;
    } else {
        let length = arr2.length;
    }
    for (i=0; i<length; i++) {
        if (arr1[i]<arr2[i]) {
            finalArr.push(arr1[i]);
            finalArr.push(arr2[i]);
        } else {
            finalArr.push(arr2[i]);
            finalArr.push(arr1[i]);
        }
    }

}
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