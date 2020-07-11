var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= i - 1; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let max = 0;
  for (let item of dp) {
    max = Math.max(max, item);
  }

  return max;
};