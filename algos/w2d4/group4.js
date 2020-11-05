// https://leetcode.com/problems/two-sum/

// twoSums(nums, target)

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// unsorted, positive integers, no floats, duplicates possible

// [5, 5, 6]
// 10
// [0, 1]

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// var nums = [2, 7, 11, 15]
// var target = 9


// function twoSums(nums, target) {
//     let newArr = []
//     for (let i=0;i<nums.length;i++){
//         if(nums[i] < target) {
//             for (let j=i+1;j<nums.length;j++){
//                 if (nums[i]+nums[j] == target){
//                     newArr.push(i)
//                     newArr.push(j)
//                     return newArr
//                 }
//             }
//         }
//     }
// }

//console.log(twoSums(nums, target))

var nums = [2, 7, 11, 15]
var target = 9


function twoSums(nums, target) {
    let freqTable = {};
    let newArr = [];
    for(let i = 0; i < nums.length; i++) {
        freqTable[target - nums[i]] = i;
    }

    for(let i = 0; i < nums.length; i++) {
        if(freqTable[nums[i]]) {
            newArr.push(i);
            newArr.push(freqTable[nums[i]]);
            return newArr;
        }
    }

    return null;
}

console.log(twoSums(nums, target))