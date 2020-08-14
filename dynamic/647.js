// 动态规划
var countSubstrings = function (s) {
  let dp = Array.from(new Array(s.length), () => new Array(s.length));

  // 特判
  if (s.length === 1) return 1;
  let ret = 0;

  // 初始化
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    ret++;
  }

  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {

        // 范围
        if (j - i < 3) { // 边界判断
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }

        if (dp[i][j]) ret++;
      }
    }
  }

  return ret;
}
