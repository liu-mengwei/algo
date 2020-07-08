
var coinChange = function (coins, amount) {

  let dp = new Array(amount + 1).fill(amount + 1); // 先设定一个不可能达到的值，方便编码
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {

    for (let coin of coins) {
      if (i - coin >= 0 && dp[i - coin] !== amount + 1) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }

  if (dp[amount] === amount + 1) {
    return -1;
  } else {
    return dp[amount];
  }
};

coinChange([1, 2, 5], 11);

// dp[i] = // 遍历一遍的最小值