//only for sorted arrays or strings. there must be some order to it

//find a middle value. and keep doing this.

//divide and conquer. find a pivot point. check left and right side and progress accordingly

//binary search O(log n)

function binarySearch(arr, val) {
  //define start, end and pivot
  let start = 0;
  let end = arr.length - 1;
  let pivot = Math.floor((start + end) / 2);

  //if this condition holds, it means the loop has not reached the very end of the array. if it does not hold, it means the value beig searched for does not exist in the array
  while (start <= end) {
    //return match if arr[pivot] equals value
    if (arr[pivot] === val) {
      return pivot;
    }
    //move start by +1 if pivot is less than value
    if (arr[pivot] < val) {
      start = pivot + 1;
    }
    //move end by -1 if pivot is greater than value
    if (arr[pivot] > val) {
      end = pivot - 1;
    }
    pivot = Math.floor((start + end) / 2);
  }

  //at this point, it means the loop condition no longer holds which means the vale does not exist in the array. feel free to return -1
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 1));
