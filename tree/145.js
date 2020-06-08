
/**
 * 后序遍历
 */
var postorderTraversal = function (root) {
  if (root) {
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
  } else {
    return [];
  }
};