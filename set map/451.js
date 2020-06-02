/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {

  let map = new Map();
  let ret = ''

  for (let i = 0; i < s.length; i++) {
    let count = map.get(s[i]) || 0;
    map.set(s[i], ++count);
  }

  let temp = [];

  // 直接遍历出键值对 map.entries()
  for (let item of map.entries()) {
    temp.push({ 'str': item[0], 'count': item[1] });
  }

  temp = temp.sort((a, b) => b.count - a.count);

  // 一种new 数组的方法，比较方便
  temp.forEach(item => {
    ret += new Array(item.count).fill(item.str).join('')
  })

  return ret;
};

frequencySort('tree')