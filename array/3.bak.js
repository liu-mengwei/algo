function lengthOfLongestSubstring(s) {
  let l = 0;
  let r = -1;

  let set = new Set();
  let ret = 0;

  while (l < s.length) {
    // 如果没有重复
    if (r + 1 < s.length && !set.has(s[r + 1])) {
      r++;
      set.add(s[r]);
    } else {
      l++;
      set.delete(s[r]);
    }

    ret = Math.max(ret, r - l + 1);
  }

  console.log(ret);
  return ret;
}

lengthOfLongestSubstring('abcabcbb')