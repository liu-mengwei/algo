/**
 * 通过反转数组快速的把后面的元素移到前面，而位置信息并没有丢失
 * 进行3次反转即可完成
 */
let rotate = function (nums, k) {
  k = k % nums.length;

  // 先整个反转
  reverse(nums, 0, nums.length - 1);

  // 再反转前面k个
  reverse(nums, 0, k - 1);

  // 再反转后面剩余
  reverse(nums, k, nums.length - 1);
};

// 数组反转
let reverse = function (nums, start, end) {
  let i = start;
  let j = end;

  let temp;
  while (i < j) {
    temp = nums[j]
    nums[j] = nums[i];
    nums[i] = temp;
    i++;
    j--
  }
}