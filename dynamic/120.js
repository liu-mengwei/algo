
var minimumTotal = function (triangle) {
  let cache = [];

  function deep(row, col) {
    if (row === triangle.length) {
      return 0;
    }

    if (!cache[`${row} ${col}`]) {
      cache[`${row} ${col}`] = Math.min(deep(row + 1, col), deep(row + 1, col + 1)) + triangle[row][col];
    }

    return cache[`${row} ${col}`];
  }

  return deep(0, 0);
};

/**
 * dp(i)(j) = Math.min(dp(i+1)(j) + dp(i+1)(j+1)) + triangle(i)(j)
 */

var minimumTotal = function (triangle) {
  // 从倒数第二从下往上遍历
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      // 直接覆盖原数组即可
      triangle[i][j] = Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return triangle[0][0];
};



