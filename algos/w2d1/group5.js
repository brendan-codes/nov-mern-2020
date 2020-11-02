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

function intersect(arr, arr2) {
  arr3 = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] === arr2[j]) {
        if (!arr3.includes(arr[i], [0, arr3.length])) {
          arr3.push(arr[i]);
        }
      }
    }
  }
  return arr3
}

console.log(intersect([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]))