//BUBBLE SORT: O(n^2) cos nested loop or
//O(n) if data is nearly sorted

//unoptimized solution

// function bubbleSort(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       count++;
//       console.log(arr);
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log(count);
//   return arr;
// }

// bubbleSort([72, 123, 34, 5]);

// //semi-optimized
// function bubbleSort(arr) {
//   let count = 0;
//   for (var i = arr.length; i > 0; i--) {
//     for (var j = 0; j < i; j++) {
//       count++;
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log(count)
//   return arr;
// }

// bubbleSort([72, 123, 34, 5]);

// Optimized BubbleSort with noSwaps
// function bubbleSort(arr) {
//   var noSwaps;
//   for (var i = arr.length; i > 0; i--) {
//     noSwaps = true;
//     for (var j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//   }
//   return arr;
// }

// bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
