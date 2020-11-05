// https://leetcode.com/problems/two-sum/

// twoSums(nums, target)

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// unsorted, positive integers, no floats, duplicates possible

// [5, 5, 6]
// 10
// [0, 01]

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// function twoSums(nums, target) {
//     let idx = 0;
//     let idx2 = 0;
//     for (var i = 0; i < nums.length; i++) {
//         let num = nums[i]
//         idx++;
//         for (var j = i + 1; j < nums.length; j++) {
//             idx2++;
//             console.log('i:',i , 'j:', j)
//         }
//     }
// }

// console.log(twoSums([5, 5, 6]))


function twoSums(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
}

console.log(twoSums([5, 5, 6], 11))