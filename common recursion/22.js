

var generateParenthesis = function (n) {
  let ret = [];

  // str 结果, left剩余左括号的个数, right 剩余右括号的个数
  // 规律 不能先使用右括号
  function deep(str, left, right) {
    if (left === 0 && right === 0) {
      ret.push(str);
      return;
    }

    // 越界值
    if (left < 0 || right < 0) {
      return;
    }

    // 非法值
    if (right < left) {
      return;
    }

    deep(str + '(', left - 1, right);
    deep(str + ')', left, right - 1);
  }

  deep('', n, n);
  return ret;
};