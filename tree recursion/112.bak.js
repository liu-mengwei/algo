function hasPathSum(root, sum) {
  if (!root) return false;

  // 如果遍历到了叶子节点并且和为目标值
  if (!root.left && !root.right && sum === root.val) {
    return true;
  }

  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}