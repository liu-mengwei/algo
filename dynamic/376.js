
var wiggleMaxLength = function (nums) {

  let dp = Array.from(new Array(nums.length), () => new Array(2).fill(1));

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= i - 1; j++) {
      if (nums[i] > nums[j]) {
        dp[i][1] = Math.max(dp[i][1], 1 + dp[j][0]);
      } else if (nums[i] < nums[j]) {
        dp[i][0] = Math.max(dp[i][0], 1 + dp[j][1]);
      }
    }
  }

  let max = 0;
  for (let item of dp) {
    max = Math.max(max, item[0], item[1]);
  }

  return max;
};


// 时间复杂度 o(n)
// 空间复杂度 o(1)
// 因为子序列可以不连续，所以可以真么求解，up 和 down 随时保持的就是其最优解
var wiggleMaxLength = function (nums) {
  if (!nums.length) return 0;

  let up = 1;
  let down = 1;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      up = down + 1;
    } else if (nums[i] < nums[i - 1]) {
      down = up + 1;
    }
  }

  return Math.max(up, down);
};
