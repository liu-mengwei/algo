
/**
 * 可以想到用split('/') 把path分割即简化了问题
 */
var simplifyPath = function (path) {
  let pathArr = path.split('/');

  let stack = [];

  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i] === '' || pathArr[i] === '.') {
      continue;
    } else if (pathArr[i] === '..') {
      stack.pop();
    } else {
      stack.push(pathArr[i]);
    }
  }

  return '/' + stack.join('/');
};