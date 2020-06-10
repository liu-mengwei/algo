
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


/**
 * 更像计算机那样的去模拟递归 模拟执行命令压入栈
 */

class Commond {
  constructor(text, node) {
    this.text = text; // 所要去执行的命令
    this.node = node;
  }
}

var preorderTraversal = function (root) {
  if (!root) return [];
  let ret = [];

  let stack = [];
  stack.push(new Commond('go', root));

  while (stack.length > 0) {
    // 取出这条命令并运行
    let commond = stack.pop();
    if (commond.text === 'print') {
      ret.push(commond.node.val);
    }

    if (commond.text === 'go') {
      // 对入栈的条件作了判断， 相当于递归的终止条件
      if (commond.node.right) stack.push(new Commond('go', commond.node.right));
      if (commond.node.left) stack.push(new Commond('go', commond.node.left));
      stack.push(new Commond('print', commond.node));
    }
  }

  return ret;
} 