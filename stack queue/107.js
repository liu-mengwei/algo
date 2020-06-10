
/**
 * todo 待优化
 * 我的思路是，如果不用reverse的方法
 * 就用一个栈来记录倒序的过程
 */
var levelOrderBottom = function (root) {
  let stack = [];
  if (root) {
    stack.push(new Ele(root, 0))
  } else {
    return []
  }

  for (let i = 0; i < stack.length; i++) {
    let level = stack[i].level;
    let node = stack[i].node;

    if (node.right) stack.push(new Ele(node.right, level + 1));
    if (node.left) stack.push(new Ele(node.left, level + 1));
  }

  return getRet(stack);
};

function getRet(stack) {
  let ret = []
  let length = stack[stack.length - 1].level;
  while (stack.length) {
    let ele = stack.pop();
    let level = length - ele.level;

    if (level === ret.length) {
      ret.push([]);
    }

    ret[level].push(ele.node.val);
  }

  return ret;
}

class Ele {
  constructor(node, level) {
    this.node = node;
    this.level = level;
  }
}

levelOrderBottom({ val: 1, left: null, right: null })