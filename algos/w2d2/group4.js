// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// findConsqSums([2,5,3,6,7,0,0,23,12], 16)

// O(n2)

// sum = 16
// outputs: [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]

function findConsqSums(arr, k){

}

function findConsqSums(arr, k){
    let results_arr = [];
    for (i=0; i<arr.length;i++) {
        let solution_arr = [arr[i]];
        let sum = 0;
        let j = i+1;
        sum = arr[i];
        while (sum <= k && j<arr.length) {
            sum = sum + arr[j];
            solution_arr.push(arr[j]);
            // console.log(solution_arr,sum);
            if (sum == k) {
                console.log(solution_arr);
                console.log(results_arr);
                results_arr.push([...solution_arr]);
            }
            j++;
        }
    }
    return results_arr;
}
// findConsqSums([2,5,3,6,7,0,0,23,12], 16)
console.log(findConsqSums([2,5,3,6,7,0,0,23,12], 16))
//output
[ 2, 5, 3, 6 ]
[ 3, 6, 7 ]
[ 3, 6, 7, 0 ]
[ 3, 6, 7, 0, 0 ]
[ [ 2, 5, 3, 6 ], [ 3, 6, 7 ], [ 3, 6, 7, 0 ], [ 3, 6, 7, 0, 0 ] ]