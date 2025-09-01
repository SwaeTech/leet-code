



// a sorted array
// you don't have to create a linked tree to solve this
// a divide and conquer algorithm
// recursive and iterative methods (recursion is more intuitive)

// intuition: split array and check if greater than or equal, then split subarray


function binarySearch(arr, target){

    let midPointIndex = Math.floor((arr.length-1) / 2);

    console.log(arr[midPointIndex])
    let left = arr.slice(0,midPointIndex);
    let right = arr.slice(midPointIndex,arr.length)
    console.log("right: ", right);

    if (target === arr[midPointIndex]){
        return midPointIndex;
    } else if (target < arr[midPointIndex] && left.length > 0){
        return binarySearch(left, target);
    } else if (target > arr[midPointIndex] && right.length > 0){
        return binarySearch(right, target);
    }

    return "not found";

}

let arr = [-1, 0, 3, 5, 9, 12]
let target = 0;
binarySearch(arr, target);