// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort🎃

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr, length=-1) {
    if (length == -1)
        length = arr.length - 1;
    else
        length = length - 1;
    console.log(length);
    var isSorted = true;
    for (var i = 0; i < length; i++) {
        if (arr[i] > arr[i + 1]) {
            isSorted = false;
            temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }
    }
    if (isSorted) {
        return arr;
    } else {
        return bubbleSort(arr, length);
    }
}


console.log(bubbleSort([0,-3,4,1,2,10,9,-5,3,20,100,-200]));

// Time Complexity💀
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/




// Selection Sort🎃


// Selection sort works by iterating through the list,
// finding the minimum value,
// and moving it to the beginning of the list.

// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.


function selectionSort(arr, length=-1) {
    if (length == -1)
        length = 0;
    else
        length = length + 1;
    var min = arr.length - 1;
    for (var i = arr.length-1; i >= length; i--){
        if(arr[min] < arr[i]){
            min = i;
        }
    }
    temp = arr[min];
    arr[min] = arr[length];
    arr[length] = temp;
``
    if (length == arr.length - 1)
        return arr;
    return selectionSort(arr, length);
}

console.log(selectionSort([0, -3, 400, 4, 1, 2, 10, 9, -5, 3, 20, -100, 200]));

// [-200, 100, 20, 10,
//     9, 4, 3, 2,
//     1, 0, -3, -5
// ]

// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.png
// https://www.geeksforgeeks.org/selection-sort/c/selection-sort.png