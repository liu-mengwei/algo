
/**
 * 时间复杂度o(n)
 */
var levelOrder = function (root) {

  let queue = [];
  let ret = [];
  if (root) queue.push(root);

  while (queue.length > 0) {
    // 遍历当前的队列，把所有的节点放入ret, 再把子节点赋给queue
    let newQueue = [];
    let tempRet = [];
    while (queue.length > 0) {
      let node = queue.shift();
      tempRet.push(node.val);

      if (node.left) newQueue.push(node.left);
      if (node.right) newQueue.push(node.right);
    }
    ret.push(tempRet);

    // 到了下一层
    queue = newQueue;
  }

  return ret;
};


/**
 * 还有一种思路就是
 * 增加信息，记录层数，少些一遍循环，但复杂度都是一样的
 */
var levelOrder2 = function (root) {

  let queue = [];
  let ret = [];
  if (root) queue.push(new Ele(root, 0));

  while (queue.length) {
    let ele = queue.shift();
    let level = ele.level;

    // 之前这一层还没建立起来
    if (level === ret.length) {
      ret.push([]);
    }
    ret[level].push(ele.node.val);

    // 把左右节点加进去
    if (ele.node.left) queue.push(new Ele(ele.node.left, level + 1));
    if (ele.node.right) queue.push(new Ele(ele.node.right, level + 1));
  }

  return ret;
};

class Ele {
  constructor(node, level) {
    this.node = node;
    this.level = level;
  }
}

levelOrder2({ val: 1, left: null })