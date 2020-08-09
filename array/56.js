var merge = function (arr) {

  // 从小到大排序
  arr = arr.sort((a, b) => a[0] - b[0]);

  let ret = [];

  for (let i = 0; i < arr.length; i++) {
    let item = ret.pop();
    if (!item) {
      ret.push(arr[i]);
      continue;
    }

    if (arr[i][0] <= item[1]) {
      if (arr[i][1] > item[1]) {
        ret.push([item[0], arr[i][1]]);
      } else { 
        // 包含
        ret.push(item);
      }


    } else {
      ret.push(item, arr[i]);
    }
  }

  return ret;
};

merge([[1, 4], [4, 5], [6, 7]]);