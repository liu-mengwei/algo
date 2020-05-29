// 还是数学感觉，一边循环即可知道左右两边的和
var pivotIndex = function (nums) {
  // 先取总数
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  let index = -1;
  let leftValue = 0;
  let rightValue = 0;

  for (let i = 0; i < nums.length; i++) {
    leftValue += nums[i - 1] || 0;

    rightValue = total - leftValue - nums[i];

    // 只要总数减去左边的和就是右边的和
    if (leftValue === rightValue) {
      return i;
    }
  }

  return index;
};