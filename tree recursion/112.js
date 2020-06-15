


function hasPathSum(root, sum) {
  ret = false;

  var hasPathSumfn = function (root, sum) {
    if (!root) return;
    if ((sum - root.val === 0) && (!root.left && !root.right)) {
      ret = true;
      return;
    }

    hasPathSumfn(root.left, sum - root.val);
    hasPathSumfn(root.right, sum - root.val);
  };
  hasPathSumfn(root, sum);

  return ret;
}

/**
 * 只需要把true, false传上去即可，不需要令开变量
 */
function hasPathSum(root, sum) {
  if (!root) return false;

  // 遍历到叶子节点
  if (!root.left && !root.right) {
    return sum === root.val;
  }

  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}
