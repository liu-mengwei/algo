
var maxDepth = function (root) {
  let deep = 0;

  function deepfn(root, deep) {
    if (!root) return deep;

    //  求左子树和右子树哪个更深
    let leftLength = deepfn(root.left, deep + 1);
    let rightLength = deepfn(root.right, deep + 1);

    return Math.max(leftLength, rightLength);
  }

  return deepfn(root, deep);
}

/**
 * 体会一下更简洁的写法
 * 
 * 一个往前，一个往后算次数
 * 我那个写法是从根节点往后面算不断的累加高度
 * 
 * 而下面这个算法是先遍历到最深，从0开始算累加高度
 */
var maxDepth = function (root) {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

