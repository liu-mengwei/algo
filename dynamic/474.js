
var findMaxForm = function (strs, m, n) {
  if (!strs.length) return 0;

  let dp = Array.from(new Array(strs.length), () => Array.from(new Array(m + 1), () => new Array(n + 1).fill(0)));

  for (let i = 0; i < strs.length; i++) {
    let { num0, num1 } = getNum(strs[i]);

    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        if (i === 0) {
          if (j >= num0 && k >= num1) dp[i][j][k] = 1;
          continue;
        }

        dp[i][j][k] = dp[i - 1][j][k];
        if (j - num0 >= 0 && k - num1 >= 0) {
          dp[i][j][k] = Math.max(dp[i - 1][j][k], 1 + dp[i - 1][j - num0][k - num1]);
        }
      }
    }
  }

  return dp[strs.length - 1][m][n];

  function getNum(str) {
    let arr = str.split('');
    let num0 = arr.filter(num => num == 0).length;
    let num1 = arr.length - num0;

    return { num0, num1 }
  }
};


// 优化降维 减少不必要的循环 也少了初始值设定的问题
var findMaxForm = function (strs, m, n) {
  if (!strs.length) return 0;

  let dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));

  for (let i = 0; i < strs.length; i++) {
    let { num0, num1 } = getNum(strs[i]);

    for (let j = m; j >= num0; j--) {
      for (let k = n; k >= num1; k--) {

        dp[j][k] = dp[j][k];
        if (j - num0 >= 0 && k - num1 >= 0) {
          dp[j][k] = Math.max(dp[j][k], 1 + dp[j - num0][k - num1]);
        }
      }
    }
  }

  return dp[m][n];

  function getNum(str) {
    let num0 = 0;
    for (let char of str) {
      if (char == 0) {
        num0++;
      }
    }
    return { num0, num1: str.length - num0 };
  }
};
