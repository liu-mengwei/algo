
/**
 * 代码略显啰嗦，其实就是两个字母互为一对一的关系
 * 
 * 可以执行两边函数
 * 检查是否是可以单对单，注意 a -> c b -> c 也是可以的 还是一对一的关系
 * 只是反过来不行 c - > a c -> b 成了一对多，错误
 */


 /**
  * 或者存一个中间态 {a : 1, b: 2} , {c : 1, d: 2}
  * 判断转化后的数字是否相等，这样可以直接检查双向单对单的状态
  */

var wordPattern = function (pattern, str) {
  let strArr = str.split(' ');

  // 如果两个长度不相等 直接返回
  if (pattern.length !== strArr.length) return false;

  let mapA = {};
  let mapB = {};

  for (let i = 0; i < pattern.length; i++) {
    if (!mapA[pattern[i]]) {
      if (!mapB[strArr[i]]) {
        mapA[pattern[i]] = strArr[i];
        mapB[strArr[i]] = pattern[i];
      } else {
        return false;
      }

    } else {
      if (pattern[i] !== mapB[strArr[i]]) {
        return false;
      } else {
        continue;
      }
    }
  }

  return true;
};
