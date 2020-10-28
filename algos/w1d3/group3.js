//  Array: Merge Sort
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

function mergeSort(arr) {
  if(arr.length<1){
    return arr
  }
  if(arr.length==1){
    return arr
  }
  let m=Math.floor((arr.length/2))
  return mergeSort(arr.slice(1,m)) + mergeSort(arr.slice(m+1))
}


// return a new sorted array with all of the values of arr1 and arr2
function mergeSortedArrays(arr1, arr2) {
  let newArr = []
  let len = arr1.length + arr2.length - 1
  let index1=0;
  let index2=0;
  for(let i =0;i<len;i++){
    if(arr1[index1]<arr2[index2]){
      newArr.push(arr1[index1])
      index1++
    }else{
      newArr.push(arr2[index2])
      index2++
    }
  }
  return newArr
}

console.log(mergeSortedArrays([1,5,8,10,13], [2,3,4,6,9,11]))

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