//for an unsorted array, linear search is king. very common in js. for example indexOf

//one item at a time. checking every single thing

//Time complexity : O(n)

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) return i;
  }
  return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7));
