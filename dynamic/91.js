
var numDecodings = function (s) {
  let slength = s.length;
  let ret = 0;

  function deep(s, index) {
    if ((index > slength - 1) ||
      (index === slength - 1 && s[slength - 1] !== '0')) {
      ret += 1;
      return;
    }

    let str1 = s.substr(index, 1);
    if (str1 !== '0') {
      deep(s, index + 1);
    }

    if (slength - index >= 2) {
      let str2 = s.substr(index, 2);
      if (+str2 <= 26 && str2[0] !== '0') {
        deep(s, index + 2);
      }
    }
  }

  deep(s, 0);

  return ret;
};

numDecodings('100');