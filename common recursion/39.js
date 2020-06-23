var combinationSum = function (candidates, target) {
  let ret = [];
  
  // 优化剪枝
  candidates = candidates.filter(num => num <= target);
  candidates = candidates.sort((a, b) => a - b);

  function deep(candidates, arr, sum, start) {
    for (let i = start; i < candidates.length; i++) {
      let num = candidates[i];

      // 如果已经大于 则后面的循环都是多余的，直接返回到上一层
      if (sum + num > target) {
        return;
      } else if (sum + num === target) {
        let temp = arr.slice();
        temp.push(num);
        ret.push(temp);
        return;
      } else {
        arr.push(num);
        deep(candidates, arr, sum + num, i);
        arr.pop(num);
      }
    }
  }

  deep(candidates, [], 0, 0);
  return ret;
};