
/**
 * 这里有个判断条件就是
 * 如果左子树最小深度 > 0, 而右子树最小深度为0, 那么应该取哪个非0的深度
 */

var minDepth = function (root) {
  if (!root) return 0;

  let leftDeep = minDepth(root.left);
  let rightDeep = minDepth(root.right);

  // 如果一个有一个是0 返回有的， 两个都有取最小值
  if (leftDeep * rightDeep === 0) {
    return (leftDeep || rightDeep) + 1;
  } else {
    return Math.min(leftDeep, rightDeep) + 1;
  }
};