var maxProfit = function (prices, fee) {
  if (!prices.length) return 0;
  let dp = Array.from(new Array(prices.length), () => new Array(2));

  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);

    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
  }

  return dp[prices.length - 1][0];
};