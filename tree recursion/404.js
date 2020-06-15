
var sumOfLeftLeaves = function (root) {
  let sum = 0;

  function deepFn(root, isLeft) {
    if (!root) return;

    // 遍历到叶子节点 这就同时满足了两个条件，叶子节点和左节点
    if (!root.left && !root.right && isLeft) {
      sum += root.val;
      return;
    }

    deepFn(root.left, true);
    deepFn(root.right, false);
  }

  deepFn(root, false);
  return sum;
}