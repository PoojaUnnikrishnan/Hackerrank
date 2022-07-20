function countingSort(arr) {
  let frequencyArray = new Array(100).fill(0);
  for (let num of arr) {
    frequencyArray[num]++;
  }
  return frequencyArray;
}
console.log(countingSort([1, 1, 3, 2, 1]));
