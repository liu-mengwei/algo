var eraseOverlapIntervals = function (intervals) {

  // 按第一个最小值排序
  intervals = intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  let temp = [];
  let ret = 0;

  for (let arr of intervals) {

    if (!temp.length || arr[0] >= temp[1]) {
      ret++;
      temp = arr;
      continue;
    }

    // 否则我要判断哪一个为temp
    if (temp[1] >= arr[1]) {
      temp = arr; // 否则temp不变
    }
  }

  return intervals.length - ret;
};


var eraseOverlapIntervals = function (intervals) {
  if (!intervals.length) return 0

  // 直接按最大值排序
  intervals = intervals.sort((a, b) => {
    return a[1] - b[1];
  });

  let ret = 1;
  let pre = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= intervals[pre][1]) {
      ret++;
      pre = i;
    }
  }

  return intervals.length - ret;
};
