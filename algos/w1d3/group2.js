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

arr = [88, 22, 44, 12, 99, 111, 9, 15, 49];
console.log(mergeSort(arr));

// THIS WORKS :D
function mergeSort(arr) {
    if(arr.length<2)
        return arr;
    let middle= Math.floor(arr.length/2);
    let tempArr1, tempArr2;
        tempArr1= arr.slice(0, middle);
        tempArr2= arr.slice(middle);
        //tempArr2= arr.slice(middle, arr.length);
       // mergeSort(tempArr1);
       // mergeSort(tempArr2);
       // mergeSortedArrays(tempArr1,tempArr2);
    return mergeSortedArrays(mergeSort(tempArr1),mergeSort(tempArr2));
}


// return a new sorted array with all of the values of arr1 and arr2
function mergeSortedArrays(arr1, arr2) {
var newarr=[]

var arr1tracker=0
var arr2tracker=0

while(arr1tracker<arr1.length && arr2tracker<arr2.length)
{
    if(arr1[arr1tracker]<arr2[arr2tracker])
        {
            newarr.push(arr1[arr1tracker])
            arr1tracker+=1;
        }
    else
        {
            newarr.push(arr2[arr2tracker])
            arr2tracker+=1;
        }
}

if(arr1tracker<arr1.length)
{
    while(arr1tracker<arr1.length)
    {
        newarr.push(arr1[arr1tracker])
        arr1tracker+=1;
    }
}
if(arr2tracker<arr2.length)
{
    while(arr2tracker<arr2.length)
    {
        newarr.push(arr2[arr2tracker])
        arr2tracker+=1;
    }
}
console.log(newarr);
return newarr;

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