
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let i = g.length - 1;
  let j = s.length - 1;

  let ret = 0;
  while (i >= 0 && j >= 0) {
    // 满足了
    if (s[j] >= g[i]) {
      ret++;
      j--;
      i--;
    } else {
      i--;
    }
  }

  return ret;
};