
var dominantIndex = function (nums) {
  let max = 0;
  let maxIndex = 0;

  // 找出最大值
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }

  // 找出其他元素， 2倍的值大于最大值
  for (let i = 0; i < nums.length; i++) {
    if (i !== maxIndex && max < 2 * nums[i]) {
      return -1;
    }
  }

  return maxIndex;
};