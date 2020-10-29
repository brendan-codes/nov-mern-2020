// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif


function partition(arr) {
    left = 0;
    right = arr.length - 1;
    pivotIndex = arr.length - 1;
    pointer1 = left;
    pointer2 = right;
    while(pointer1 <= pointer2 + 1) {
        if(arr[pointer1] >= arr[pivotIndex]) {
            while(pointer2 >= pointer1 - 1) {
                if (pointer2 == pointer1 - 1) {
                    [arr[pointer1], arr[pivotIndex]] = [arr[pivotIndex], arr[pointer1]];
                    break;
                }
                if (arr[pointer2] < arr[pivotIndex]) {
                    [arr[pointer1], arr[pointer2]] = [arr[pointer2], arr[pointer1]];
                    break;
                }
                pointer2--;
            }
        }
        pointer1++;
    }
    return arr;
}
console.log(partition([11,599,859,262,400,90,338,573]));

//attempt at recursive
function partitionRecursive(arr, left = -1, right = -1) {
    if (left == -1) {
        left = 0;
        right = arr.length - 1;
    }
    if (left == right) {
        console.log(arr);
        return arr;
        //for some reason this console log is giving me the perfectly sorted array
        //what
        //it's logging it once before it hits the infinite recursion
        //and it's the sorted array
    }
    let pivotIndex = right;
    let pointer1 = left;
    let pointer2 = right;
    while (pointer1 <= pointer2 + 1) {
        if (arr[pointer1] >= arr[pivotIndex]) {
            while (pointer2 >= pointer1 - 1) {
                if (pointer2 == pointer1 - 1) {
                    [arr[pointer1], arr[pivotIndex]] = [arr[pivotIndex], arr[pointer1]];
                    pivotIndex = pointer1;
                    break;
                }
                if (arr[pointer2] < arr[pivotIndex]) {
                    [arr[pointer1], arr[pointer2]] = [arr[pointer2], arr[pointer1]];
                    break;
                }
                pointer2--;
            }
        }
        pointer1++;
    }
    return partitionRecursive(arr, left, pivotIndex - 1).concat(partitionRecursive(arr, pivotIndex + 1, right));
}

console.log(partitionRecursive([11, 599, 859, 262, 400, 90, 338, 573]));
// Select pivot somewhere in the middle
// Swap with end
// Partition the subarray with two pointers
// [arr[1], arr[2]] = [arr[2], arr[1]];

// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value

// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition

// let arr = [88, 22, 11, 55, 111, 99, 33];
// partition(arr, 0, arr.length-1);
