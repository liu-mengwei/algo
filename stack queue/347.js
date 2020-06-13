/**
 * 遍历一边数组，建立一个map结构，key存数字，value存元素出现的次数
 * 
 * 再放到数组里，利用自带的快速排序进行排序，最后输出结果
 * 
 * 时间复杂度 o(nlogn)
 */
var topKFrequent = function (nums, k) {
  // 将数组扫描一遍
  let map = {};
  let tempArr = [];
  let ret = [];

  nums.forEach(num => {
    // 记录次数
    map[num] = map[num] ? ++map[num] : 1;
  });

  for (let key in map) {
    tempArr.push({ num: key, times: map[key] });
  }

  //降序
  tempArr = tempArr.sort((a, b) => {
    return b.times - a.times;
  })

  // 取前k个
  for (let i = 1; i <= k; i++) {
    ret.push(tempArr[i - 1].num);
  }

  return ret;
};

/**
 * 桶排序 o(n)
 * 将元素出现的次数存入数组的下标，数组当中的值就是那个数字
 * 下面实现错误，没有考虑到元素次数相同的情况
 */
var topKFrequent2 = function (nums, k) {
  // 将数组扫描一遍
  let map = {};
  let tempArr = [];
  let ret = [];

  nums.forEach(num => {
    // 记录次数
    map[num] = map[num] ? ++map[num] : 1;
  });

  // 桶排序
  for (let key in map) {
    tempArr[map[key]] = key;
  }

  //找出前k个
  for (let i = tempArr.length - 1; i >= 0, k > 0; i--) {
    if (tempArr[i]) {
      ret.push(tempArr[i]);
      k--;
    }
  }

  return ret;
};

let ret = topKFrequent2([1,2], 2);
console.log(ret);

/**
 * 优先队列
 * 优先队列的底层实现是堆 (最大堆，最小堆)
 * 
 * 因为是取前k个元素
 * 维护一个长度为k的优先队列
 * push, pop的复杂度都为logk
 * 整体的时间复杂度为nlogk，比nlogn优秀
 * 
 * 思路 遍历统计次数后的map, 比较队首元素，如果当前值的次数 > 队首元素的次数值，则队首出队，当前值进队
 */