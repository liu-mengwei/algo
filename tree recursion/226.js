
var invertTree = function (root) {

  if (!root) return null;

  // 得出翻转后的子树
  let leftNode = invertTree(root.left);
  let rightNode = invertTree(root.right);

  root.left = rightNode;
  root.right = leftNode;

  return root;
};


// 区别在于这种递归里面的结果值通过参数 传上去了
// 而我的做法是显示的返回一个结果值
var invertTree = function (root) {

  if (!root) return null;

  // 得出翻转后的子树
  invertTree(root.left);
  invertTree(root.right);

  let temp = root.left;
  root.left = root.right
  root.right = temp;

  return root;
};

