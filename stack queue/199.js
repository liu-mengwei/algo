// todo 解答错误 这里只返回了所有的右侧节点
var rightSideView = function (root) {
  if (root) {
    return [root.val, ...rightSideView(root.right)];
  } else {
    return []
  }
};