// 错误
// var wordBreak = function (s, wordDict) {
//   let dp = {};
//   dp[''] = true;

//   for (let i = 0; i < s.length; i++) {

//     let str = s.substr(0, i + 1);
//     let ret = false;

//     for (let word of wordDict) {

//       if (str.indexOf(word) >= 0) {
//         // 截取字符串
//         let leftStr = str.split(word).join('');
//         if (dp[leftStr]) {
//           ret = true;
//           break;
//         }
//       }

//     }

//     dp[str] = ret;
//   }

//   return dp[s];
// };

var wordBreak = function (s, wordDict) {
  let cache = {};

  function deep(str) {
    if (str === '') return true;

    if (typeof cache[str] === 'boolean') return cache[str];

    let ret = false;

    for (let word of wordDict) {

      let start = str.indexOf(word);
      if (start === -1) continue;

      if (start === 0 || start + word.length === str.length) {
        let leftStr = str.substring(0, start) + str.substring(start + word.length);
        if (deep(leftStr)) {
          ret = true;
          break;
        }
      }
    }

    return cache[str] = ret;
  }

  return deep(s);
};

wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);