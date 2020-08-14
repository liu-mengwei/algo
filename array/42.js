/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let dp_maxleft = [];
  let dp_maxRight = [];
  let ret = 0;

  // dp_maxleft[i] 表示的i列左边的最高列
  // dp_maxRight[i] 表示的是i列右边的最高列

  dp_maxleft[0] = height[0];
  dp_maxRight[height.length - 1] = height[height.length - 1];

  for (let i = 1; i < height.length; i++) {
    dp_maxleft[i] = Math.max(height[i], dp_maxleft[i - 1]);
  }

  for (let i = height.length - 2; i >= 0; i--) {
    dp_maxRight[i] = Math.max(height[i], dp_maxRight[i + 1]);
  }

  for (let i = 1; i <= height.length - 2; i++) {
    // 求左右两边的最小值
    let min = Math.min(dp_maxRight[i + 1], dp_maxleft[i - 1]);

    if (min > height[i]) {
      ret += min - height[i];
    }
  }

  return ret;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])