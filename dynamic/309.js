// 超时
// var maxProfit = function (prices) {
//   let max = 0;

//   function deep(prices, start, lastSell, hasStock, current, profit) {
//     if (start === prices.length) {
//       // 根节点获取总利润
//       max = Math.max(max, profit);
//       return 0;
//     }
//     let todayPrice = prices[start];

//     // 如果当前在冷冻期
//     if (lastSell) {
//       deep(prices, start + 1, false, hasStock, current, profit);
//       return;
//     }

//     // 当前持有股票
//     if (hasStock) {
//       // 卖出 
//       deep(prices, start + 1, true, false, 0, profit + todayPrice);
//     } else {
//       // 买入
//       deep(prices, start + 1, false, true, todayPrice, profit - todayPrice);
//     }

//     // 等待
//     deep(prices, start + 1, false, hasStock, current, profit);
//   }

//   deep(prices, 0, false, false, 0, 0);
//   return max;
// };

/**
 * 超时 
 * 但这样还是无法利用缓存
 * 很显然，代码就可以看出，如果利用缓存， 后面3个deep都不用计算了，但我希望是要计算
 */
var maxProfit = function (prices) {

  function deep(prices, start, lastSell, hasStock) {
    if (start === prices.length) {
      return 0;
    }

    let todayPrice = prices[start];
    // 如果当前在冷冻期
    if (lastSell) {
      return deep(prices, start + 1, false, hasStock);
    }

    // 当前持有股票
    let profit1;
    let profit2;
    if (hasStock) {
      profit1 = todayPrice + deep(prices, start + 1, true, false); // 卖出
      profit2 = deep(prices, start + 1, false, hasStock); // 等待
    } else {
      profit1 = deep(prices, start + 1, false, true) - todayPrice; // 买入
      profit2 = deep(prices, start + 1, false, hasStock); // 等待
    }

    let val = Math.max(profit1, profit2);

    return val;
  }

  return deep(prices, 0, false, false);
};


// 不持股且能购买  dp[i][0]
// 持股 dp[i][1]
// 不持股且不能购买 (刚卖掉) dp[i][2]

// dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2]);
// dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
// dp[i][2] = dp[i][1] + prices[i];
var maxProfit = function (prices) {
  let dp = Array.from(new Array(prices.length), () => new Array(3));
  if (!prices.length) return 0;

  dp[0][0] = 0;
  dp[0][1] = - prices[0];
  dp[0][2] = 0;

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    dp[i][2] = dp[i][1] + prices[i];
  }

  let m = prices.length - 1;
  return Math.max(dp[m][0], dp[m][2]);
};
