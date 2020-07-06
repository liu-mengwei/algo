var canPartition = function (nums) {
  let sum = 0;
  nums.forEach(item => {
    sum += item;
  })
  if (sum % 2 > 0) return false;
  sum = sum / 2;

  let cache = {};

  // 函数的本意是比如 sum 是 50， 我要求最接近的加和为50的值
  function deep(index, sum) {
    if (index < 0) {
      return 0;
    }

    if (sum - nums[index] === 0) {
      return nums[index];
    }

    if (cache[`${index} ${sum}`]) return cache[`${index} ${sum}`];

    let ret = deep(index - 1, sum);
    if (sum - nums[index] > 0) {
      ret = Math.max(ret, deep(index - 1, sum - nums[index]) + nums[index]);
    }
    cache[`${index} ${sum}`] = ret;

    return ret;
  }

  return deep(nums.length - 1, sum) === sum
};

canPartition([1, 5, 11, 5]);