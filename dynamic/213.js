var help = function (nums) {
  let dp = new Array(nums.length);

  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max((dp[i - 2] || 0) + nums[i], dp[i - 1]);
  }

  return dp[nums.length - 1];
};

// 截取数组比较即可
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let way1 = nums.slice(0, nums.length - 1);
  let way2 = nums.slice(1);

  return Math.max(help(way1), help(way2));
};