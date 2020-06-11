var numSquares = function (n) {
  let queue = [];

  //  设置起始点
  queue.push(new Ele(n, 0));
  let visitedArr = new Array(n + 1); // 防止重复添加元素
  visitedArr[n] = true;

  while (queue.length) {
    // 取出队首作判断
    let ele = queue.shift();

    // 找到所有的相邻数 从1开始 入队列
    for (let i = 1; ; i++) {
      let val = ele.num - i * i;

      // 找到目标数
      if (val === 0) {
        return ele.step + 1;
      }

      if (val < 0) {
        break;
      }

      //没有访问过才放入元素
      if (!visitedArr[val]) {
        queue.push(new Ele(val, ele.step + 1));
        visitedArr[val] = true;
      }
    }
  }
};

class Ele {
  constructor(num, step) {
    this.num = num;
    this.step = step;
  }
}

numSquares(12);