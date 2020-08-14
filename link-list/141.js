
// 理解错了
var hasCycle = function (head) {
  let set = new Set();
  let p = head;

  while (p) {
    if (set.has(p)) return true;

    set.add(p);
    p = p.next;
  }

  return false;
};

// 给一个标记
var hasCycle = function (head) {

  let p = head;

  while (p) {
    if (p.tag) return true;

    p.tag = true;
    p = p.next;
  }

  return false;
};

