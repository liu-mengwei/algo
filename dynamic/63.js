var uniquePathsWithObstacles = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = new Array(m).fill(new Array(n).fill(0));

  if (grid[0][0] === 1) {
    return 0;
  } else {
    dp[0][0] = 1;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        dp[i][j] = 0;
        continue;
      }

      if (i === 0 && j !== 0) {
        dp[i][j] = dp[i][j - 1];
      }
      else if (j === 0 && i !== 0) {
        dp[i][j] = dp[i - 1][j];
      }
      else if (i !== 0 && j !== 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};

uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);