var binaryTreePaths = function (root) {
  let ret = [];

  function deep(root, path) {
    if (!root) return;

    path = path ? `${path}->${root.val}` : root.val + '';

    if (!root.left && !root.right) {
      ret.push(path);
      return;
    }

    deep(root.left, path);
    deep(root.right, path);
  }

  deep(root, '');

  return ret;
};

/**
 * 上面那种是从上往下，通过参数累计结果集，递归到最深处，返回结果
 * 这种方法要另起一个函数，因为要包含参数
 *
 * 还可以不另起一个函数，直接返回结果集，这种方式就是从底网上累计结果集
 */
var binaryTreePaths = function (root) {
  let ret = [];
  if (!root) return ret;

  if (!root.left && !root.right) {
    ret.push(root.val + '');
    return ret;
  }

  let leftNodes = binaryTreePaths(root.left);
  leftNodes.forEach(item => {
    ret.push(`${root.val}->${item}`);
  })

  let rightNodes = binaryTreePaths(root.right);
  rightNodes.forEach(item => {
    ret.push(`${root.val}->${item}`);
  })

  return ret;
};


