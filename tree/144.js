
/**
 * 二叉树的先序遍历
 * 
 * 先访问根节点，再访问左节点，再访问右节点
 */
var preorderTraversal = function (root) {
  let ret = [];

  function traversal(root) {
    if (!root) return;

    ret.push(root.val);
    traversal(root.left);
    traversal(root.right);
  }

  traversal(root);
  return ret;
};

/**
 * 间接写法
 */
var preorderTraversal = function (root) {
  if (root) {
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
  } else {
    return [];
  }
};



var preorderTraversal = function (root, ret) {
  let ret = [];

  if (!root) return;

  ret.push(root.val);
  preorderTraversal(root.left, ret);
  preorderTraversal(root.right, ret);

  return ret;
};


/**
 * 用栈模拟递归
 */
var preorderTraversal = function (root) {
  let ret = [];
  let stack = [];

  if (root) stack.push(root);
  1.
  while (stack.length > 0) {
    // 弹出栈顶
    let ele = stack.pop();
    ret.push(ele.val);

    // 这里是关键点，先存放右子树, 再存放左子树
    if (ele.right) stack.push(ele.right);
    if (ele.left) stack.push(ele.left);
  }

  return ret;
};


