/**
 * @param {number[]} height
 * @return {number}
 */

// 暴力搜索
let maxArea = function (height) {
  let max = 0;
  debugger;
  for (let i = 0; i < height.length - 1; i++) {
    let start = height[i];

    for (let j = i + 1; j < height.length; j++) {
      let end = height[j];

      // 取二者之间的最小值
      let minHeight = start < end ? start : end;
      let width = j - i;
      max = minHeight * width > max ? minHeight * width : max;
    }
  }

  return max;
};


/**
 * 我的理解是，这个题就是考的是一个人对于数学的直觉和感觉
 * 这个题里的宽度，有没有形象的想到用两个指针去表示
 * 本质还是搜索，双指针法能起作用的原因是，减少了搜索空间
 * 解法的核心在于怎么理解双指针的正确性，其实就是 一个矩形，宽度长度都缩小的情况下，面积肯定会更小，这看起来更像一句废话
 */
let maxArea2 = function (height) {
  debugger;
  let max = 0;

  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    let minHeight = height[start] < height[end] ? height[start] : height[end];
    let width = end - start;

    max = minHeight * width > max ? minHeight * width : max;

    // 移动较小的柱子
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return max;
}




