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
function twoSums(nums_arr, target) {
    // let index_arr = [];
    for (let i = 0; i < nums_arr.length - 1; i++) {
        for (let j = i + 1; j < nums_arr.length; j++) {
            if ((nums_arr[i] + nums_arr[j] == target)) {
                return [i, j]
            }
        }
    }
    return [];
}
console.log([2, 7, 11, 15],9);
