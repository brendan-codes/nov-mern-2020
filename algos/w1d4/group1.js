// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif


// function partition(arr, left, right){
//     if(right === 0){
//         return arr;
//     }
//     let index= (left -1);
//     for(let i= left; i < right; i++){
//         if(arr[i] <= arr[right]){
//             index++;
//             let temp= arr[index];
//             arr[index]= arr[right];
//             arr[right]= temp;
//         }
//     }
//     let temp= arr[index + 1];
//     arr[index +1]= arr[right];
//     arr[right]= temp;
//     return partition(arr, left, right -1);
// }


/* not moving 88 or 55 =( */
function partition(arr, left, right){
    if(left >= right){
        return arr
    }
    let idx= left;
    for(let i = left; i < right; i++){
        if(arr[i] <= arr[right]){
            idx++;
            let temp= arr[idx];
            arr[idx]= arr[right];
            arr[right]= temp;
        }
    }
    let temp= arr[idx + 1];
    arr[idx + 1]= arr[right];
    arr[right]= temp;

    return partition(arr, left +1, right -1)
}


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
