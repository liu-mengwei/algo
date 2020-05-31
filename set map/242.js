
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  // 将s转成map结构
  let map = {};
  s.split('').forEach(item => {
    map[item] = map[item] ? ++map[item] : 1;
  })

  for (let i = 0; i < t.length; i++) {
    // 如果s里不包含t 
    if (!map[t[i]] || map[t[i]] === 0) return false;
    map[t[i]]--;
  }

  return true;
};
