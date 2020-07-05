// 解法错误
// var maxProfit = function (prices) {
//   let dp = Array.from(new Array(prices.length), () => new Array(3));

//   dp[0][1] = -prices[0];
//   dp[0][0] = 0;
//   dp[0][2] = 0;

//   for (let i = 1; i < prices.length; i++) {
//     dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][2] - prices[i], dp[i - 1][1]);

//     // 未持有2次机会
//     dp[i][0] = dp[i - 1][0];

//     // 未持有1次机会
//     dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
//   }

//   let m = prices.length - 1;
//   return Math.max(dp[m][0], dp[m][2]);
// };

// 解法错误
// var maxProfit = function (prices) {
//   if (!prices.length) return 0;
//   let dp = Array.from(new Array(prices.length), () => new Array(2));
//   dp[0][1] = { profit: -prices[0], times: 1 };
//   dp[0][0] = { profit: 0, times: 2 };

//   for (let i = 1; i < prices.length; i++) {
//     let times = dp[i - 1][1].times;
//     let profit = dp[i - 1][1].profit;
//     if (dp[i - 1][0].times > 0 && (dp[i - 1][0].profit - prices[i] > dp[i - 1][1].profit)) {
//       times = dp[i - 1][0].times - 1;
//       profit = dp[i - 1][0].profit - prices[i];
//     }

//     dp[i][1] = { times, profit };
//     dp[i][0] = null;

//     // 谁大用谁的
//     if (dp[i - 1][0].profit > (dp[i - 1][1].profit + prices[i])) {
//       dp[i][0] = Object.assign({}, dp[i - 1][0]);
//     } else {
//       dp[i][0] = { times: dp[i - 1][1].times, profit: dp[i - 1][1].profit + prices[i] };
//     }
//   }

//   return dp[prices.length - 1][0].profit;
// };

/**
 * 对状态的细分 三维dp
 */
var maxProfit = function (prices) {
  if (!prices.length) return 0;
  let dp = Array.from(new Array(prices.length), () => Array.from(new Array(2), () => new Array(3)));

  dp[0][1][1] = -prices[0];
  dp[0][1][0] = -prices[0];
  dp[0][0][2] = 0;
  dp[0][0][1] = 0;
  dp[0][0][0] = 0;

  for (let i = 1; i < prices.length; i++) {
    // 已持有剩下1次
    dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][2] - prices[i]);

    // 已持有剩下0次
    dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][0][1] - prices[i]);

    // 未持有剩下2次
    dp[i][0][2] = dp[i - 1][0][2];

    // 未持有剩下1次
    dp[i][0][1] = Math.max(dp[i - 1][0][1], dp[i - 1][1][1] + prices[i]);

    // 未持有剩下0次
    dp[i][0][0] = Math.max(dp[i - 1][0][0], dp[i - 1][1][0] + prices[i]);
  }

  let m = prices.length - 1;
  return Math.max(dp[m][0][2], dp[m][0][1], dp[m][0][0]);
};

maxProfit([1, 2, 3]);