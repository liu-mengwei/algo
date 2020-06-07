var evalRPN = function (tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    // 如果是数字
    if (!Number.isNaN(+tokens[i])) {
      stack.push(tokens[i]);
    } else {
      // 计算栈中顶部两个元素的值
      let val1 = +stack.pop();
      let val2 = +stack.pop();

      let ret;
      switch (tokens[i]) {
        case '+': ret = val1 + val2; break;
        case '-': ret = val2 - val1; break;
        case '*': ret = val1 * val2; break;
        case '/': ret = parseInt(val2 / val1); break;
      }

      stack.push(ret);
    }
  }

  return stack.pop();
};

// 其实并不用判断是不是数字
// 直接采用switch case语句即可
var evalRPN = function (tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    let num;
    switch (tokens[i]) {
      case '+':
        stack.push(stack.pop() + stack.pop());
        break;
      case '-':
        num = stack.pop();
        stack.push(stack.pop() - num);
        break;
      case '*':
        stack.push(stack.pop() * stack.pop());
        break;
      case '/':
        num = stack.pop();
        stack.push(parseInt(stack.pop() / num));
        break;
      default:
        stack.push(+tokens[i]);
    }
  }

  return stack.pop();
};