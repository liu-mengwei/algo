
var combine = function (n, k) {
  let ret = [];

  k = Math.min(n, k);

  function deep(n, index, arr) {
    if (arr.length === k) {
      ret.push(arr.slice());
      return;
    }

    if (index > n) {
      return;
    }

    for (let i = index; i <= n; i++) {
      // 经过剪枝后，性能得到了优化 大概从160ms 减为了110ms
      if (n - i + 1 + arr.length < k) {
        return;
      }
      arr.push(i);
      deep(n, i + 1, arr); // 关键 传给下一步起始点就是i+1 
      arr.pop(i);
    }
  }

  deep(n, 1, []);

  return ret;
};

combine(4, 2);