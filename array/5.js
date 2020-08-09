
let cache = {};

// 递归 超时
// var longestPalindrome = function (s) {
//   if (s === '') return '';

//   if (isPa(s)) {
//     return s;
//   }

//   if (cache[s]) return cache[s];

//   let str1 = longestPalindrome(s.substring(1));
//   let str2 = longestPalindrome(s.substring(0, s.length - 1));

//   return cache[s] = str1.length > str2.length ? str1 : str2;
// };

// function isPa(str) {
//   return str === str.split('').reverse().join('');
// }

// 动态规划
var longestPalindrome = function (s) {
  let dp = Array.from(new Array(s.length), () => new Array(s.length));
  let start = 0;
  let maxLen = 1;

  // 特判
  if (s.length === 1) return s;

  // 初始化
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
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
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        start = i;
      }
    }
  }

  return s.substr(start, maxLen);
}


longestPalindrome('ac')