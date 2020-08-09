/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let ret = [];
  nums = nums.sort((a, b) => a - b);


  function deep(index, arr) {
    if (index === nums.length) {
      ret.push(arr.slice());
      return;
    }

    // 选了
    arr.push(nums[index]);
    deep(index + 1, arr);
    arr.pop();

    while (index + 1 < nums.length && nums[index + 1] === nums[index]) {
      index++;
    }

    // 没选
    deep(index + 1, arr);
  }

  deep(0, []);

  return ret;
};

subsetsWithDup([1, 2, 2]);