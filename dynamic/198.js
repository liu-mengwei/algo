var rob = function (nums) {
  let dp = new Array(nums.length);

  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  dp[0] = nums[0];
  dp[1] = Math.max(dp[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    if (dp[i - 1] === dp[i - 2]) {
      dp[i] = dp[i - 1] + nums[i];
    } else {
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
  }

  return dp[nums.length - 1];
};