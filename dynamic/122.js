/**
 * 不能用new Array().fill(new Array())
 * 这样写的话，没有断开引用
 */
var maxProfit = function (prices) {
  let dp = Array.from(new Array(prices.length), () => new Array(2));

  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  // 持有股票
  // dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
  // 不持有股票
  // dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])

  for (let i = 1; i < prices.length; i++) {
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);

    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
  }

  return dp[prices.length - 1][0];
};

