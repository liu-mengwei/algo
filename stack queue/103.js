var zigzagLevelOrder = function (root) {

  let queue = [];
  let ret = [];
  if (root) queue.push(root);

  let times = 0;
  while (queue.length > 0) {
    // 遍历当前的队列，把所有的节点放入ret, 再把子节点赋给queue
    let newQueue = [];
    let tempRet = [];

    while (queue.length > 0) {
      let node = queue.shift();
      
      // 不需要改变遍历顺序，只需要利用这两个方法即可控制输出顺序
      if (times % 2 === 1) {
        tempRet.unshift(node.val);
      } else {
        tempRet.push(node.val);
      }

      if (node.left) newQueue.push(node.left);
      if (node.right) newQueue.push(node.right);
    }

    ret.push(tempRet);
    times++;

    // 到了下一层
    queue = newQueue;
  }

  return ret;
};