
/**
 * 双指针取子字符串
 * 有一个暂存数组，每次进循环时都要判断这个暂存数组有没有重复
 */
var lengthOfLongestSubstring = function (s) {

  let l = 0;
  let r = -1;

  let length = 0;
  let tempArr = [];
  if (s.length === 1) return 1;

  while (l <= s.length - 1) {
    // 判定子字符串是否有相同的
    if (tempArr.length === new Set(tempArr).size && r <= s.length - 1) {
      length = Math.max(length, r - l + 1)

      tempArr.push(s[++r]);
    } else {
      tempArr.shift();
      l++;
    }
  }

  return length;
};


/**
 * 改进，用一个数组就可以记录是否有重复字符，ascii码最多也就256个字符
 * 或者用对象也行
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let r = -1;

  let temp = {};
  let ret = 0;

  while (l < s.length) {
    if (r + 1 < s.length && !temp[s[r + 1]]) {
      r++;
      temp[s[r]] = 1;
    }

    // 缩小左边界
    else {
      delete temp[s[l]];
      l++;
    }

    ret = Math.max(ret, r - l + 1);
  }

  return ret;
};

// 使用set更有优雅的感觉
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let r = -1;

  let ret = 0;
  let temp = new Set();

  while (l < s.length) {
    if (r + 1 < s.length && !temp.has(s[r + 1])) {
      temp.add(s[++r]);
    }

    // 缩小左边界
    else {
      temp.delete(s[l++]);
    }

    ret = Math.max(ret, r - l + 1);
  }

  return ret;
};
