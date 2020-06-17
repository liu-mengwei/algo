var sortedArrayToBST = function (nums) {
  function deep(nums, root) {
    if (!nums.length) return null;

    // 取中间节点的值
    let length = nums.length;
    let mid = parseInt(length / 2);
    root.val = nums[mid];

    // 将数组拆分
    let leftTree = deep(nums.slice(0, mid), new TreeNode(null));
    let rightTree = deep(nums.slice(mid + 1), new TreeNode(null));

    root.left = leftTree;
    root.right = rightTree;

    return root;
  }

  return deep(nums, new TreeNode(null));
};


/**
 * 不需要多传一个参数，直接在递归内部创建那个节点即可
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  // 取中间节点的值
  let length = nums.length;
  let mid = parseInt(length / 2);

  let root = new TreeNode(null);
  root.val = nums[mid];

  // 将数组拆分
  let leftTree = sortedArrayToBST(nums.slice(0, mid));
  let rightTree = sortedArrayToBST(nums.slice(mid + 1));

  root.left = leftTree;
  root.right = rightTree;

  return root;
}

/**
 * 上面我每走一步都创建了数组，其实不用，取左右指针即可,节省了空间
 * 递归终止条件是 l > r
 * 取中点 mid = (l+r) / 2
 */
