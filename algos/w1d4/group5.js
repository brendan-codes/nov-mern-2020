// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif



function partition(arr, left, right) {
    if (arr.length < 2) return arr;

    var pivot = arr[arr.length - 1];
    right--;
    while (left != right) {
        while (arr[left] < pivot) {
            if (left == right) {
                break;
            }
            left++;
        }
        while (arr[right] > pivot) {
            if (left == right) {
                break;
            }
            right--;
        }
        if (arr[left] >= pivot && arr[right] <= pivot) {
            let temp = arr[left];
            arr[left] = arr[right]
            arr[right] = temp;
        }
    }
    let temp = arr[arr.length - 1];
    arr[arr.length - 1] = arr[left]
    arr[left] = temp;
    return left;
}

function quickSort(arr, left, right) {
    if (arr.length < 2) return arr;
    if (left < right) {

        var pi = partition(arr, left, right);

        quickSort(arr, 0, pi - 1);
        quickSort(arr, pi + 1, arr.length - 1);
    }
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
