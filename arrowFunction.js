function modifyArray(nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newArr.push(nums[i] * 2);
    } else {
      newArr.push(nums[i] * 3);
    }
  }
  console.log(newArr);
}
modifyArray([1, 5, 2, 6, 4]);
