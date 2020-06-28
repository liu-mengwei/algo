let cache = [];

let climbStairs = function (n) {
  cache[1] = 1;
  cache[2] = 2;

  for (let i = 3; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache[n];
};