/**
 * 
 * 这个点只可能从上面或者左面走来
 * 
 * 写出方程
 */

var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let dp = Array.from(new Array(m), () => new Array(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== 0 && j !== 0) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }

      else if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
      }

      else if (i !== 0 && j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      }

      else {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      }
    }
  }

  return dp[m - 1][n - 1];
};