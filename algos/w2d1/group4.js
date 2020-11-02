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


function intersect(arr1, arr2) {
    if (arr1.length < 1 || arr2.length < 1) {
        return []
    }
    let j = 0;
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr1[i - 1]) {
            console.log("i is:", i)
            while (arr2[j] <= arr1[i]) {
                console.log("j is:", j)
                if (arr2[j] == arr1[i]) {
                    console.log(arr1[i])
                    newArr.push(arr1[i])
                    j++
                    break;
                }
                j++
            }
        }
    }
    return newArr
}



const arr1 = [1, 2, 2, 2, 7]
const arr2 = [2, 2, 6, 6, 7]

const interSet = [...(new Set(arr1.filter(element => arr2.includes(element))))];
console.log(interSet)