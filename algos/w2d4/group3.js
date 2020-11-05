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
let target = 9;
let nums = [2,7,11,15];
function twoSums(nums, target) {
    let idx1=0;
    let idx2=1;
    let sol = []
    for (let i = 0; i<num.length; i++){
        while (nums[i]+ nums[idx2] !== target && idx2 < nums.length);
            idx2 += 1;
        }
        if (nums[i] + nums[idx2] === target) {
            sol.push(i);
            sol.push(idx2);
            return sol;
        }
        }
console.log(twoSums2([15,11,7,2], 9))



function twoSums2(nums, target) {
    let sol = [];
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        while(nums[i] + nums[j] !== target && j < nums.length) {
            j++;
        }
        if(nums[i] + nums[j] === target) {
            sol.push(i);
            sol.push(j);
            return sol;
        }
    }
}

function twoSumsonePass(nums,target){
    var returnarr=[]; //array to return
    var sumtable={}; //dictionary to store numbers we've already passed
    for(var i=0;i<nums.length;i++)
    {
        if(!sumtable[target-nums[i]])//if the other number to the sum does not exist in the dict
            sumtable[nums[i]]=i;//store the current indexed number into the dictionary with key/value pair (sumpair number: index)

        else //else meaning we found the other number in the dictionary
        {
            returnarr.push(sumtable[target-nums[i]]) //push the index in the dict table
            returnarr.push(i);//push the current index
            break; //break the loop
        }
    }
    return returnarr;
}
console.log(twoSums2([15,11,7,2], 9))



function twoSumsRecursive(arr, target, idx1 = 0, idx2 = 0){
    if(idx1 == arr.length || idx2 == arr.length)
    {
        console.log(-1);
        return -1;
    }
    if(target === arr[idx1] + arr[idx2] && idx1 !== idx2)
    {
        console.log(idx1, idx2)
        return [idx1, idx2];
    }
    else if(idx2 !== arr.length-1){
        twoSumsRecursive(arr, target, idx1, idx2 + 1);
    }
    else{
        idx2=0;
        twoSumsRecursive(arr, target, idx1+1, idx2);
    }
}
twoSumsRecursive([6,4,5,1,1,9], 15);