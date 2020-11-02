// Array: Quick Sort
// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https: //upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif
// https://github.com/brendan-codes/nov-mern-2020/tree/main/algos/w1d4

// Create a function that uses yesterday’s partition to sort an array in-place.
//   Time Complexity
//     - Best: O(n log(n))
//     - Average: O(n log(n))
//     - Worst: O(n^2)


//   Steps:
// - recursively partition the array
// - start by partitioning the full array (use the previously built partition algo)
// - then partition the left side of the array (left of new pivot idx)
//   and the right side (right of new pivot idx), recursively



function quickSort(arr, left = 0, right = arr.length - 1) {}



// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif


function partition(arr, left, right) {
    // Taking the last element as the pivot
    const pivotValue = arr[right];
    let pivotIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            pivotIndex++;
        }
    }

    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]]
    return arr;
};

arr = [1, 5, 3, 2, -1, 6, 4];
console.log(partition(arr, 0, 6));
