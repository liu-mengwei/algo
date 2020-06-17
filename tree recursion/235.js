

var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;

  // p q节点都在root的右侧 递归
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  
  // 其他的情况，都返回root
  return root;
};