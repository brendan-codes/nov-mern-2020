// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif


function partition(arr, left, right){

    let pivot = Math.floor(arr.length/2);
    let ptr1 = 0;
    let ptr2= arr.length-1;

    while(ptr1 < ptr2){// it's actually that simple
        if(arr[ptr1]>arr[pivot])
        {
            while(arr[ptr2]>arr[pivot])
            {
                ptr2-=1
            }
            var temp=arr[ptr1]
            arr[ptr1]=arr[ptr2]
            arr[ptr2]=temp
        }
        else if(arr[ptr2]<arr[pivot])
        {
            while(arr[ptr1]<arr[pivot])
            {
                ptr1+=1
            }
            var temp=arr[ptr1]
            arr[ptr1]=arr[ptr2]
            arr[ptr2]=temp
        }
        ptr1+=1
        ptr2-=1

    }

return arr;
}

let arr = [88, 22, 11, 55, 111, 99, 33];
console.log(partition(arr, 0, arr.length-1));

// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value

// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition


