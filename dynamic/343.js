/**
 * 超时
 */
var integerBreak = function (n) {
  let cache = [];

  function deep(n) {
    if (n === 1) return 1;

    let ret = -1;

    if (cache[n]) return cache[n];

    for (let i = 1; i <= n - 1; i++) {
      ret = max3(ret, i * integerBreak(n - i), i * (n - i));
    }

    cache[n] = ret;
    return ret;
  }

  return deep(n);
};


function max3(a, b, c) {
  return Math.max(Math.max(a, b), c);
}

// 动态规划
// 能用动态规划说明 有最优子结构
// dp[i] = max3(dp[i], dp[i-j], j * (i-j))

var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(-1);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i - 1; j++) {
      dp[i] = max3(dp[i], j * dp[i - j], j * (i - j));
    }
  }

  return dp[n];
};

