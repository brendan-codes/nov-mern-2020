// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1,2,2,2,7], [2,2,6,7,8]
// output: [2,7]

const intersectSorted = (arr1, arr2) => {
    output = [];
    freq1 = {};
    for (let i = 0; i < arr1.length; i++) {
        freq1[arr1[i]] = 1;
    }
    for (let i = 0; i < arr2.length; i++) {
        if (freq1[arr2[i]]) {
            output.push(arr2[i]);
            delete freq1[arr2[i]];
        }
    }
    return output;
}
console.log(intersectSorted([1, 2, 2, 6, 7], [2, 2, 6, 7, 8]));

// inputs are always to be sorted
// not the same length
// negative numbers? no
// output has to be sorted? yes
// space constraints (return a new array)
// no speed constraints ( ideal O(n) )
// can the arrays be empty? yes
// can the arrays have floats or doubles? no, alwahys integers
// fail case: empty array