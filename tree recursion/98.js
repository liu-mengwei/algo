
/**
 * 解答错误，不符合二叉搜索树的定义
 */
// var isValidBST = function (root) {
//   if (!root) return true;

//   // 遍历到叶子节点
//   if (!root.left && !root.right) return true;

//   // 找不满足定义的直接返回
//   if (root.left && root.val <= root.left.val) {
//     return false;
//   }

//   if (root.right && root.val >= root.right.val) {
//     return false;
//   }

//   // 再遍历子树是否满足条件
//   return isValidBST(root.left) && isValidBST(root.right);
// };


var isValidBST = function (root) {
  // 中序遍历拿出结果集
  function deep(root) {
    if (!root) {
      return [];
    } else {
      return [...deep(root.left), root.val, ...deep(root.right)];
    }
  }

  let arr = deep(root);
  // 检查即可
  for (let i = 0; i < arr.length; i++) {
    // sb js强转 0会转为false
    if (typeof arr[i + 1] === 'number' && (arr[i] >= arr[i + 1])) {
      return false
    }
  }

  return true;
}

// todo想一下有没有更优解，其实还是o(n)的算法
