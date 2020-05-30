/**
 * 这个问题的关键在于要理解连续数组
 * 滑动窗口，给数组圈定一个范围
 * 为什么是o(n)的算法，我的理解是它没有进行重复计算
 */
var minSubArrayLen = function (s, nums) {
  let i = 0;
  let j = i;

  let total = 0;
  let min = 0;
  let lastj = -1;
  while (j >= i && j <= nums.length - 1) {
    // 避免重复计算nums[j]值
    if (lastj !== j) total += nums[j];
    lastj = j;

    // 移动左指针看能不能更小
    if (total >= s) {
      min = min === 0 ? j - i + 1 : Math.min(min, j - i + 1);
      total -= nums[i];
      i++;
    }
    // 否则移动右指针
    else {
      j++;
    }
  }

  return min;
};

// todo 初始值定义可以优化，可以在初始值的时候，滑动窗口是没有值的，即r = -1