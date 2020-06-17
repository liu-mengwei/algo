
/**
 * 问题拆分
 * 找出以包含root根节点的所有路径 （一个递归）
 * 再找出不包含root根节点的所有路径
 * 
 * 嵌套递归
 */

var pathSum = function (root, sum) {
  if (!root) return 0;

  let ret = 0;
  ret += findPath(root, sum);
  ret += pathSum(root.left, sum);
  ret += pathSum(root.right, sum);

  return ret;
};

// 找到包含root根节点的所有和为sum的路径
var findPath = function (root, sum) {
  if (!root) return 0;

  let ret = 0;
  // 不能直接返回要继续找，因为可能出现负数
  if (root.val === sum) {
    ret += 1;
  }

  ret += findPath(root.left, sum - root.val);
  ret += findPath(root.right, sum - root.val);

  return ret;
}