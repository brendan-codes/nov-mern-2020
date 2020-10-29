// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif


function partition(arr, left, right){

    let mid = arr[Math.floor(arr.length / 2)]
    let i = left
    let j = right - 1
    while (i !== j) {
        if (arr[i] < mid) {
            i++
        } else if (arr[j] > mid) {
            j--
        } else {
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
    }
    return j //?
}
//88, 22, 11, 55, 111, 99, 33
//  i                 mid              j
//33, 22, 11, 55, 111, 99, 88
//                    i
//                    j

// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value

// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition

let arr = [88, 22, 11, 55, 111, 99, 33];
//              i      np    j       p                  j
partition(arr, 0, arr.length - 1){
    let mid = arr[Math.floor(arr.length / 2)]
    let left = 0
    let right = arr.length - 1
    if (arr[left] < mid) {
        left++
    } else if (arr[right] > mid) {
        right--
    } else {
        let temp = arr[right]
        arr[right] = arr[left]
        arr[left] = temp
    }
    return right;
}

