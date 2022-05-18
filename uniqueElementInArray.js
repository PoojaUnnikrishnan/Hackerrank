// function uniqueElement(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] != array[i]) {
//     }
//   }
// }
// uniqueElement([1, 2, 3, 4, 2, 3, 1, 5, 5]);

// var arr = [1, 2, 3, 4, 2, 3, 1, 5, 5];

// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) != index);
// }

// console.log(removeDuplicates(arr));

function findSingle(a) {
  // Do XOR of all elements and return
  let response = a[0];
  for (let i = 1; i < a.length; i++) response = response ^ a[i];

  return response;
}

// Driver code
let a = [3, 5, 4, 7, 5, 2, 3, 4, 2];
let n = a.length;
console.log(findSingle(a, n));

// This code is contributed by Surbhi Tyagi
