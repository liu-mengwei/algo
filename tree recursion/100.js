
/**
 * 先比较当前节点
 * 再比较左子树和又子树
 * 同时满足，则返回true
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!(p && q)) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};