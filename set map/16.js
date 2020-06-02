/**
 * 还是取双指针
 * 
 * 但我这里取了两个变量，一个存的目前最接近的绝对值，以此来作为依据来判断3个值是否是一个可行解。一个是结果
 */
var threeSumClosest = function (nums, target) {

  nums = nums.sort((a, b) => a - b);

  let closest;
  let ret;
  for (let i = 0; i < nums.length; i++) {

    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];

      // 取两数之间的绝对值
      let range = Math.abs(target - sum);

      if (!closest) {
        closest = range;
        ret = sum;
      } else if (range < closest) {
        closest = range;
        ret = sum;
      }

      if (sum < target) {
        start++;
      } else if (sum > target) {
        end--;
      } else {
        return target;
      }
    }
  }

  return ret;
};

threeSumClosest([4], 1)