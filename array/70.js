

// 将问题化成子问题

// 爬三步楼梯 其实就是 f(2) + f(1)种可能 f(1) = 1 f(2) = 2
// 爬四部楼梯 就是 f(3) + f(2)  f(4) = f(3) + f(2)
// f(n) = f(n-1) + f(n-2)
// 以此写出递归
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);
};



// 但根据画图后发现，有大量冗余树枝 缓存后，就会少去大量递归 直接变成O(n)
let mapObj = {};

let climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  // 如果已经缓存过，直接返回
  if (mapObj[n]) return mapObj[n];

  // 缓存已经计算的结果
  mapObj[n] = climbStairs(n - 1) + climbStairs(n - 2)

  return mapObj[n];
};





