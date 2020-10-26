// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr) {
    for(var x=0;x<arr.length;x++)
    {
        for(var y=0;y<arr.length - 1 - x;y++)
        {
            if(arr[y]>arr[y+1])
            {
                var z= arr[y]
                arr[y]=arr[y+1]
                arr[y+1]=z
            }
        }
    }
    return arr;
}


// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/



// Selection Sort


// Selection sort works by iterating through the list,
// finding the minimum value,
// and moving it to the beginning of the list.

// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.


function selectionSort(arr) {

    for(var x=0;x<arr.length;x++)
    {
        var storedplace=x;
        for(var y=x;y<arr.length;y++)
        {
            if(arr[storedplace]>arr[y])
            {
                storedplace=y;
            }
        }
        var temp=arr[x]
        arr[x]=arr[storedplace]
        arr[storedplace]=temp
    }
    return arr;
}




// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.png
// https://www.geeksforgeeks.org/selection-sort/c/selection-sort.png