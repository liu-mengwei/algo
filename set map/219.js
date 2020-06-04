/**
 * 时间复杂度o(n)
 */

var containsNearbyDuplicate = function (nums, k) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let indexArr = map[nums[i]];

    if (!indexArr) {
      // {1: [0]} key是值，数组存着下标
      map[nums[i]] = [i];
    } else {

      // 取最后一个就是最近的下标
      if (i - indexArr[indexArr.length - 1] <= k) {
        return true;
      } else {
        indexArr.push(i);
      }
    }
  }

  return false;
};


/**
 * 滑动窗口解法
 * 滑动窗口是什么：这个窗口存在这目前所有可能的数，即用于比较的第一个数的范围
 * 为什么滑动窗口是奏效的，因为滑动窗口往右的过程中，窗口左边的元素就再也没有可行解
 */
var containsNearbyDuplicate = function (nums, k) {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;

    set.add(nums[i]);

    // 时刻保证set中只有k个元素
    if (set.size > k) {
      // 删除最左边的元素
      set.delete(nums[i - k]);
    }
  }

  return false;
};

