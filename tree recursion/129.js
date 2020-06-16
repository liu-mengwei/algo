
var sumNumbers = function (root) {
  let nums = [];

  function deep(root, num) {
    if (!root) return;

    // 拼接数字
    num = num + root.val;

    // 到了叶子节点
    if (!root.left && !root.right) {
      nums.push(num);
      return;
    }

    deep(root.left, num);
    deep(root.right, num);
  }

  deep(root, '');

  //求和
  let ret = 0;
  nums.forEach(num => {
    ret += parseInt(num);
  })

  return ret;
};  