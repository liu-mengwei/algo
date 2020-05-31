/**
 * 涉及到元素的出现次数，应该想到用map记录
 * 这里用{}也可以
 */
var intersect = function (nums1, nums2) {
  let ret = [];
  let nums1Map = new Map();

  // 记录每个元素出现的次数
  nums1.forEach(item => {
    let count = nums1Map.get(item) || 0;
    nums1Map.set(item, ++count);
  })

  nums2.forEach(item => {
    // 存在
    let count = nums1Map.get(item);

    // 这里有一个强转逻辑，0被转成了false
    if (count) {
      ret.push(item)
      nums1Map.set(item, --count);
    }
  })

  return ret;
};