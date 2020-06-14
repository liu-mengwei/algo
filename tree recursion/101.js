
/**
 * 注意对称的条件
 * 
 * 一棵树的左子树跟右子树对称则对称
 * 
 * 如何判断左树和右数对称
 * 左树的右子树和右树的左子树对称
 */
var isSymmetric = function (root) {

  function subSymmetric(p1, p2) {
    if (!p1 && !p2) return true;
    if (!(p1 && p2)) return false;
    if (p1.val !== p2.val) return false;

    return subSymmetric(p1.right, p2.left) && subSymmetric(p1.left, p2.right);
  }

  return subSymmetric(root, root)
};