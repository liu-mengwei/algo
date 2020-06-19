var restoreIpAddresses = function (s) {

  const MaxDeep = 4;
  let ret = [];
  function deepFn(s, retstr, deep) {
    // 判定当前取值是否合法，不合法返回，合法进入下一轮循环
    // 长度取1 长度取 2 长度取3 
    if (deep === 5) {
      ret.push(retstr);
      return;
    }

    for (let i = 1; i <= 3; i++) {
      if (s.length - i < 0) {
        return;
      }

      let tempStr = s.substr(0, i);

      // 不满足条件会率先返回
      if ((MaxDeep - deep) * 3 < s.length - i) {
        continue;
      } else if ((MaxDeep - deep) * 1 > s.length - i) {
        continue;
      } else if (parseInt(tempStr) > 255) {
        continue;
      } else if (tempStr.length > 1 && tempStr[0] === '0') {
        continue;
      }

      else {
        tempStr = retstr ? retstr + '.' + tempStr : tempStr;
        deepFn(s.substring(i), tempStr, deep + 1);
      }
    }
  }

  deepFn(s, '', 1);
  return ret;
};

// todo 看下有没有更好的解法
