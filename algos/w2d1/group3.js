// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]


// inputs are always to be sorted
// not the same length
// negative numbers? no
// output has to be sorted? yes
// space constraints (return a new array)
// no speed constraints ( ideal O(n) )
// can the arrays be empty? yes
// can the arrays have floats or doubles? no, alwahys integers
// fail case: empty array

function sortInersect(arr1, arr2) {
    if (arr1.length == 0 || arr2.length == 0) return [];

    var mySet = new Set(arr1);
    var returnArr = arr2.filter((i) => mySet.has(i));
    return returnArr;
}

function intersect(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0) return [];

    let uniqueSet1 = new Set(arr1);
    let uniqueSet2 = new Set(arr2);
    // console.log(uniqueSet1);
    // console.log(uniqueSet2);
    let set2arr = Array.from(uniqueSet2)
    let sorted = set2arr.filter((i) => uniqueSet1.has(i));
    // console.log(sorted);
    return sorted;
}

function intersect2(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0) return [];

    let uniqueSet1 = new Set(arr1); // (1, 2, 7)
    let uniqueSet2 = new Set(arr2); // (2, 6, 7)

    let sorted = []
    for (value of uniqueSet1) {
        if (uniqueSet2.has(value)) {
            sorted.push(value);
        }
    }
    return sorted;
}

console.log(intersect2([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]))