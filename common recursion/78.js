var subsets = function (nums) {
  let ret = [];

  function deep(nums, arr, start, times) {
    if (times === arr.length) {
      let tempArr = arr.slice();
      ret.push(tempArr);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      let num = nums[i];
      arr.push(num);
      deep(nums, arr, i + 1, times);
      arr.pop(num);
    }
  }

  for (let i = 0; i <= nums.length; i++) {
    deep(nums, [], 0, i);
  }
  return ret;
};