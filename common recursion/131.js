var partition = function (s) {
  let ret = [];

  function deep(s, tempArr) {
    if (!s.length) {
      ret.push(tempArr);
      return;
    }

    for (let i = 1; i <= s.length; i++) {
      // 截取字符串
      let newTempArr = tempArr.slice();
      let str = s.substr(0, i);

      // 此字符传是回文才进行下一轮递归
      if (isTheStr(str)) {
        newTempArr.push(str);
        deep(s.substring(i), newTempArr);
      }
    }
  }
  deep(s, []);

  return ret;
};

function isTheStr(s) {
  return s.split('').reverse().join('') === s;
}

partition("aab")