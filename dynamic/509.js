/***
 * 算法时间复杂度为o(n)
 * 即计算每一个值时，只计算了一次
 * 实际上调用次数是 2n-1 
 */

let cache = [];

var fib = function (N) {
  if (N === 0) return 0;

  if (N === 1) return 1;

  if (!cache[N]) {
    cache[N] = fib(N - 1) + fib(N - 2);
  }

  return cache[N];
};