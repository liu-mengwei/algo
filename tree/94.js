
/**
 * 中序遍历
 */
var inorderTraversal = function (root) {
  let ret = [];

  function traversal(root) {
    if (!root) return;

    traversal(root.left);
    ret.push(root.val);
    traversal(root.right);
  }

  traversal(root);
  return ret;
};

/**
 * 简洁写法
 */
var inorderTraversal = function (root) {
  if (root) {
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
  } else {
    return [];
  }
};

/**
 * 用栈模拟递归
 * 这里虽然用了两个while循环 算法的时间复杂度依然是o(n)的
 * 注意循环判断的条件 两个条件 1.栈不为空 2.root不为null
 * 理解一下这里的root究竟是什么，是还没有遍历到的节点
 * 凡是遍历过，入栈。栈的长度越长，则递归的越深。当没有元素进栈时，则说明遍历到了最深，出栈，
 * 再对这个元素进行相应的处理
 */
var inorderTraversal = function (root) {
  let ret = [];
  let stack = [];

  while (root || stack.length > 0) {
    // 将左节点全部压入栈中
    while (root) {
      stack.push(root);
      root = root.left;
    }

    // 将栈弹出
    root = stack.pop();
    ret.push(root.val);

    root = root.right;
  }

  return ret;
};
