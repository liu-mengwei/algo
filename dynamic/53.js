var maxSubArray = function (nums) {
  if (!nums.length) return 0;

  let dp = new Array(nums.length);
  dp[0] = nums[0];

  let ret = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);

    // 直接求ret即可
    ret = Math.max(ret, dp[i]);
  }

  return ret;
};