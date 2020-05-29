/**
 * 这个可以先简化问题，先遍历y坐标，再遍历x坐标，遇到情况再翻转数组，就不需要考虑翻转的起点了
 * 考点就是二维数组的xy坐标变换，遍历过程中，x,y的变化规律，边界情况
 */
var findDiagonalOrder = function (matrix) {
  // 先找x的起点
  let ret = [];
  let temp = [];

  if (!matrix[0]) return matrix;

  // 先找上半部分
  for (let i = 0; i < matrix[0].length; i++) {
    let y = i;
    let x = 0;

    // 边界条件
    while (x < matrix.length && y >= 0) {
      // 需要翻转数组
      temp.push(matrix[x][y])
      x++;
      y--;
    }

    if (i % 2 === 0) temp = temp.reverse();
    ret = ret.concat(temp);
    temp.length = 0
  }

  // 再找下半部分
  for (let i = 1; i < matrix.length; i++) {
    let x = i;
    let y = matrix[0].length - 1;

    // 边界条件
    while (x < matrix.length && y >= 0) {
      // 需要翻转数组
      temp.push(matrix[x][y])
      x++;
      y--;
    }

    if (i % 2 !== matrix[0].length % 2) temp = temp.reverse();
    ret = ret.concat(temp);
    temp.length = 0
  }

  return ret;
};           