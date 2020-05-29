
// 还是对数学的感觉，逻辑思维想一下就知道了

// 想一下，你先取一个最小数，这个数可定会被计算进sum
// 那你怎么取第二个数跟他配对，那肯定要取一个第二小的数，
// 然后取第三小的数，依次类推
// 感觉数组的东西，没事先排个序看看情况
// 用到排序直接这样写 nums.sort((a, b) => a - b) 默认的sort() 遇到负数会有问题
var arrayPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b);

  let total = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (i % 2 === 0) {
      total += nums[i];
    }
  }

  return total;
};