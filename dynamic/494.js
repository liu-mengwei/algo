var findTargetSumWays = function (nums, S) {
  let cache = {};

  function deep(index, target) {
    if (index === 0) {
      if (Math.abs(target) === nums[index]) {
        return nums[index] === 0 ? 2 : 1;
      } else {
        return 0
      }
    }

    if (cache[`${index} ${target}`] !== undefined) return cache[`${index} ${target}`];


    let ret = deep(index - 1, target - nums[index]) + deep(index - 1, target + nums[index]);

    return cache[`${index} ${target}`] = ret;
  }

  return deep(nums.length - 1, S);
};

findTargetSumWays([7, 9, 3, 8, 0, 2, 4, 8, 3, 9], 0);