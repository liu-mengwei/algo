/**
 * 考点在于灵活选择键值
 * 
 * 我一开始想到的就是判断两个字符是否是字母是异位词
 * 
 * 两种方法 1： 将字母转成 ascii码，即 string.charCodeAt()， 然后排序， 'bca' 转成了abc，'cba'也转成了abc，
 * 所以是字母异位词，以这个值作为key值，value存所有可能情况
 * 
 * 2. 取26长度的数组[0, 0, 0, .... 0]
 * 以下表代表数字，即a代表 0， b代表以，a出现两次，则变成了[2,0...0]
 * 再把这个数组转成数字代表key
 * 
 * 时间复杂度 o(n2)
 * 空间复杂度 o(n2)
 */

var groupAnagrams = function (strs) {

  let TAG_ARR = new Array(26).fill(0);
  const START = 'a'.charCodeAt();
  let ret = [];
  let retMap = {};

  strs.forEach(str => {
    // 将str转成响应的key
    let temp = TAG_ARR.slice();

    str.split('').forEach(s => {
      temp[s.charCodeAt() - START]++
    })
    let key = temp.join('');

    if (!retMap[key]) {
      retMap[key] = [str];
    } else {
      retMap[key].push(str);
    }
  })

  for (let key in retMap) {
    ret.push(retMap[key]);
  }

  return ret;
};
