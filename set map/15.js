/**
 * 排序 + 双指针
 * 去重这个操作不借助map，set会很麻烦，想了半天也没做出来
 * 选择合适的数据结构很重要，会省大事
 */
var threeSum = function (nums) {
  // 特判
  if (nums.length < 3) return [];

  // 从小到大排序
  nums = nums.sort((a, b) => a - b);

  let map = new Map(); // 找到合适的数据结构和key就会很省事
  let ret = [];

  // 一层遍历
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue; // 去重

    //左右指针
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      // 找到解
      let sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        let key = '' + nums[i] + nums[l] + nums[r];

        map.set(key, [nums[i], nums[l], nums[r]]);
        l++;
        r--;

      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  for (let item of map.values()) {
    ret.push(item);
  }

  return ret;

};
