

var pathSum = function (root, sum) {
  let ret = [];

  function deep(root, sum, path) {
    if (!root) return;

    // 找到叶子节点
    if (!root.left && !root.right && root.val === sum) {
      path.push(root.val);
      ret.push(path);
      return;
    }

    // 记录路径
    path.push(root.val);
    deep(root.left, sum - root.val, path.slice());
    deep(root.right, sum - root.val, path.slice());
  }
  deep(root, sum, [])

  return ret;
};

// todo可以尝试下自底向上的解法