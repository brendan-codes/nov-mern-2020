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
let arr = [2,5,3,6,7,0,0,23,12];
let val = 16;

function findConsqSums(arr, k){
    let resArr = [];
    let currentI = 0;
    let sum = 0;


    for(var i=currentI; i < arr.length-1; i++){
        sum += arr[i];
        console.log("Sum is: ", sum);
        if (sum === k){
            resArr.push(arr.slice(currentI, i))
            currentI += 1;
            sum = 0;
        }
    }
}

console.log(findConsqSums(arr,val));
function findConsqSums(arr, k){
    let resArr = [];
    let currentI = 0;
    let sum = 0;


    for(var i=currentI; i < arr.length-1; i++){
        sum += arr[i];
        console.log("Sum is: ", sum);
        if (sum === k){
            resArr.push(arr.slice(currentI, i))
            currentI += 1;
            sum = 0;
        }
    }
}

console.log(findConsqSums(arr,val));

function findConsqSums(arr, k){
    let resArr = []
    let sum = 0
    
    for(var i=0; i < arr.length-1; i++){
        console.log(sum)
        for (var j=i;j<arr.length;j++){
            console.log('j: ', arr[j])
            console.log(resArr)
            sum += arr[j]
            if (sum === k){
                console.log(arr.slice(i, j+1))
                resArr.push(arr.slice(i, j+1))
                sum = 0
                break
             }
             else if (sum > k) {
                 sum = 0
                 break
             }
        }
        
    }
}

console.log(findConsqSums([2,5,3,6,7,0,0,23,12], 16))