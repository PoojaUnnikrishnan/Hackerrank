function getSecondLargest(nums) {
  let sorted = nums.sort(function (a, b) {
    return a - b;
  });
  //   console.log(sorted);

  let unique = sorted.filter((n, index) => {
    return sorted.indexOf(n) === index;
  });

  console.log(unique[unique.length - 2]);
}
getSecondLargest([1, 2, 5, 3, 6, 5, 9, 11, 10, 2, 6]);
