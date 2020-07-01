
var uniquePaths = function (m, n) {
  let dp = Array.from(new Array(m), () => new Array(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 如果在边线上
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};

// 优化 不用遍历第一行 第一列
var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 如果在边线上
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};


