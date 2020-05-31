var wordPattern = function (pattern, str) {
  let strArr = str.split(' ');

  // 如果两个长度不相等 直接返回
  if (pattern.length !== strArr.length) return false;

  let mapA = {};
  let mapB = {};

  for (let i = 0; i < pattern.length; i++) {
    if (!mapA[pattern[i]]) {
      if (!mapB[strArr[i]]) {
        mapA[pattern[i]] = strArr[i];
        mapB[strArr[i]] = pattern[i];
      } else {
        return false;
      }

    } else {
      if (pattern[i] !== mapB[strArr[i]]) {
        return false;
      } else {
        continue;
      }
    }
  }

  return true;
};
