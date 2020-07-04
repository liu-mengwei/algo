
var maxProfit = function (prices) {
  if (!prices.length) return 0;
  let dp = new Array(prices.length).fill(0);

  let minPrice = prices[0]; // 用一个变量记录买入操作

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
  }

  return dp[prices.length - 1];
};