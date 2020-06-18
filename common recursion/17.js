var letterCombinations = function (digits) {
  const strMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }

  function deep(digits, index, str) {
    // 终止条件
    if (index >= digits.length) {
      ret.push(str);
      return;
    }

    // 当前值
    let digit = digits[index];

    // 找出所有可能性
    strMap[digit].split('').forEach(letter => {
      deep(digits, index + 1, str + letter)
    })
  }

  let ret = [];
  if (!digits.length) return [];

  deep(digits, 0, '');

  return ret;
};

letterCombinations('')