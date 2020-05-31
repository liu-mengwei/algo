/**
 *  set map的使用，其实取交集的话，想一下，无论以哪个数组进行filter, 都能得到最后的结果
 */
var intersection = function (nums1, nums2) {

  let numsSet = new Set(nums2);

  return [...new Set(nums1)].filter(item => numsSet.has(item))

};

// 还有includes api
var intersection = function (nums1, nums2) {
  return [...new Set(nums1)].filter(item => nums2.includes(item))
};
