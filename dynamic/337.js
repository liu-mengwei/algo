// // 转成层序遍历，再用前面动态规划的方法求解
// // 错误 [2,1,3,null,4] 会出错
// var rob = function (root) {
//   if (!root) return 0;

//   let nums = [];

//   let stack = [];
//   stack.push(new Ele(root, 0));

//   while (stack.length) {
//     let ele = stack.shift();

//     nums[ele.deep] = (nums[ele.deep] || 0) + ele.node.val;
//     if (ele.node.left) stack.push(new Ele(ele.node.left, ele.deep + 1));
//     if (ele.node.right) stack.push(new Ele(ele.node.right, ele.deep + 1));
//   }

//   return help(nums);
// };

// var help = function (nums) {
//   let dp = new Array(nums.length);

//   if (nums.length === 1) return nums[0];

//   dp[0] = nums[0];
//   dp[1] = Math.max(dp[0], nums[1]);

//   for (let i = 2; i < nums.length; i++) {
//     dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
//   }

//   return dp[nums.length - 1];
// };

// class Ele {
//   constructor(node, deep) {
//     this.node = node;
//     this.deep = deep;
//   }
// }

// 用递归求解
// 只能用map， map 的key值可以存对象，但obj的key不行，会被转成字符串
var rob = function (root) {
  let cache = new Map();

  function deep(root) {
    if (!root) return 0;

    if (cache.get(root)) {
      return cache.get(root);
    };

    // 有两种可能，抢或者不抢当前节点
    // 抢了
    let doit = root.val;
    if (root.left) {
      doit += deep(root.left.left) + deep(root.left.right);
    }

    if (root.right) {
      doit += deep(root.right.left) + deep(root.right.right);
    }

    // 没抢
    let notdoit = deep(root.left) + deep(root.right);
    let val = Math.max(doit, notdoit);

    cache.set(root, val);
    return val;
  }

  return deep(root);
}
