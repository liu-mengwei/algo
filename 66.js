var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] = digits[i] % 10; // 用余数写法更简洁

    // 没有进位
    if (digits[i] !== 0) return digits;
  }

  // 走到这一步就说明需要在最前位加1
  digits.unshift(1);
  return digits;
};