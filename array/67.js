/**
 * 逐位进行计算
 */
var addBinary = function (a, b) {
  let ret = [];
  let maxArr;
  let minArr;
  if (a.length > b.length) {
    maxArr = a;
    minArr = b;
  } else {
    maxArr = b;
    minArr = a;
  }

  let temp = 0; // 存放进位

  let i = maxArr.length - 1;
  let j = minArr.length - 1;

  while (i >= 0) {
    let aValue = parseInt(maxArr[i] || 0)
    let bValue = parseInt(minArr[j] || 0)

    let addValue = aValue + bValue + temp;

    temp = 0;
    if (addValue >= 2) temp = 1;

    addValue = addValue % 2;
    ret.unshift(addValue);

    i--;
    j--;
  }

  if (temp === 1) ret.unshift(1);

  return ret.join('')
};

// 简洁一下
var addBinary = function (a, b) {
  let temp = 0; // 存放进位
  let ret = [];

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
    let aValue = parseInt(a[i] || 0)
    let bValue = parseInt(b[j] || 0)

    let addValue = aValue + bValue + temp;

    temp = 0;
    if (addValue >= 2) temp = 1;

    addValue = addValue % 2;
    ret.unshift(addValue);

    i--;
    j--;
  }

  if (temp === 1) ret.unshift(1);

  return ret.join('')
};


/**
 * 转成10进制后，再转会2进制
 * 有一个问题，非常长的字符串不能被转为int
 */
var addBinary = function (a, b) {
  a = parseInt(a, 2);
  b = parseInt(b, 2);

  let sum = a + b;
  return sum.toString(2);
}
