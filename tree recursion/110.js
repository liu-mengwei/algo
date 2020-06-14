/**
 * 求二叉树深度的变种
 * 
 * 自底向上，中间已经作了判断，如果高度差大于1, 则赋值一个全局变量为false 
 */
var isBalanced = function (root) {
  let ret = true;

  function deep(root) {
    if (!root) return 0;

    let leftDeep = deep(root.left) + 1;
    let rightDeep = deep(root.right) + 1;

    if (Math.abs(leftDeep - rightDeep) > 1) ret = false;

    return Math.max(leftDeep, rightDeep);
  }

  deep(root);

  return ret;
};