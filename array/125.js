/**
 * 取双指针
 */
var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;
  let reg = /\w/;

  while (l < r) {
    // 如果匹配的不是字母数字
    if (!reg.test(s[l])) {
      l++;
      continue;
    };

    if (!reg.test(s[r])) {
      r--;
      continue;
    }

    if (s[l].toUpperCase() !== s[r].toUpperCase()) return false
    l++;
    r--;
  }

  return true;
};


/**
 * 取双指针 要考虑对原始数据作一定的处理，后面就会省略一些代码
 */
var isPalindrome = function (s) {
  // 先把特殊字符处理掉
  // js基础的字符串处理
  s = s.replace(/[^0-9a-zA-Z]/g, '').toUpperCase();

  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }

  return true;
};

/**
 * 直接翻转
 */
var isPalindrome = function (s) {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toUpperCase();
  return s === s.split('').reverse().join('');
};



