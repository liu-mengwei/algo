/**
 * 我觉的就是靠怎么选取3个点
 * 我发现取3个指针这样的话，基本不太会，很有心智负担
 * 直接用一个map 存所有距离相同的点，key是距离，再用排列组合算出所有可能情况
 * 
 * 注意，这里只返回数量就可以
 * 
 * 时间复杂度 o(n2)
 * 空间复杂度 o(n) 为什么不是o(n2) 每次循环都开一个o(n),然后立刻释放掉，实际运行时只有一个长度为n的map
 * 
 * 可能出现数组越界 2的31次方 -1 
 */

var numberOfBoomerangs = function (points) {

  let ret = 0;

  for (let i = 0; i < points.length; i++) {
    let startPoint = points[i];

    let mapRange = {};
    for (let j = 0; j < points.length; j++) {
      if (j === i) continue;

      // 算出j点和基准点的距离
      let range = Math.pow((points[j][0] - startPoint[0]), 2) + Math.pow((points[j][1] - startPoint[1]), 2);
      mapRange[range] = mapRange[range] ? ++mapRange[range] : 1;
    }

    for (let key in mapRange) {
      // 排除只有一个点的 排列组合选出所有的可能解
      if (mapRange[key] > 1) {
        ret += mapRange[key] * (mapRange[key] - 1);
      }
    }
  }

  return ret;
};
