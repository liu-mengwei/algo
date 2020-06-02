/**
 * 一开始我想的就是取四个指针，这样其实直觉上来看就是不可能的，
 * 然后就想怎么简化这个问题，如果把d搞成一个map，那就是一个o(n3)的算法
 * 继续想，如果把c, d的所有加和的情况搞成一个map, 那就是一个o(n2)的算法
 * 
 * 数据规模，现代计算机1s内大概是执行千万级别的指令
 * 500的平方是250000，完全可以在1s内解决问题
 * 
 * 时间复杂度 o(n2)
 * 空间复杂读 o(n2)
 */
var fourSumCount = function (A, B, C, D) {

  // 将 C D 加和的所有可能情况转成map
  let ret = 0;

  let cdSumMap = {};
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      let sum = C[i] + D[j];
      cdSumMap[sum] = cdSumMap[sum] ? ++cdSumMap[sum] : 1;
    }
  }

  // 遍历 A B

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let target = 0 - (A[i] + B[j]);

      // 找到解
      if (cdSumMap[target] > 0) {
        ret += cdSumMap[target];
      }
    }
  }

  return ret;
};

fourSumCount([-1, -1], [-1, 1], [-1, 1], [1, -1])



