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


// 实际上返回布尔值就行了
var canPartition = function (nums) {
  let sum = 0;
  nums.forEach(item => {
    sum += item;
  })
  if (sum % 2 > 0) return false;
  sum = sum / 2;

  let cache = {};

  function deep(index, sum) {
    if (index < 0 || sum < 0) {
      return false;
    }

    if (sum === 0) {
      return true;
    }

    if (typeof cache[`${index} ${sum}`] === 'boolean') {
      return cache[`${index} ${sum}`];
    }

    let ret = deep(index - 1, sum) || deep(index - 1, sum - nums[index]);
    cache[`${index} ${sum}`] = ret;
    return ret;
  }

  return deep(nums.length - 1, sum);
};

// 动态规划解法
var canPartition = function (nums) {
  let sum = 0;
  nums.forEach(item => {
    sum += item;
  })
  if (sum % 2 > 0) return false;
  sum = sum / 2;


  let dp = Array.from(new Array(nums.length), () => new Array(sum + 1));
  for (let j = 0; j <= sum; j++) {
    dp[0][j] = nums[0] === j;
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= sum; j++) {
      dp[i][j] = dp[i - 1][j];

      if (j === nums[i]) {
        dp[i][j] = true;
        continue;
      }

      if (j > nums[i]) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i]];
      }
    }
  }

  return dp[nums.length - 1][sum];
};


// 动态规划解法 降维优化
var canPartition2 = function (nums) {
  if (!nums.length) return true;
  let sum = 0;
  nums.forEach(item => {
    sum += item;
  })
  if (sum % 2 > 0) return false;
  sum = sum / 2;


  let dp = new Array(sum + 1).fill(false);
  dp[nums[0]] = true;

  for (let i = 1; i < nums.length; i++) {
    for (let j = sum; j >= 0; j--) {

      if (j === nums[i]) {
        dp[j] = true;
        continue;
      }

      if (j > nums[i]) {
        dp[j] = dp[j] || dp[j - nums[i]];
      }
    }
  }

  return dp[sum];
};

canPartition2([1, 5, 11, 5]);