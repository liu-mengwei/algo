/**
 * 目前没想到双索引的技术
 * 因为感觉我这里有个取余数的操作需要知道连表的长度
 */

var rotateRight = function (head, k) {
  // 特判
  if (!head) return head;

  // 先计算出链表的长度
  let cur = head;
  let length = 0;
  let end = null; // 标记最后一个节点

  while (cur) {
    length++;
    if (!cur.next) end = cur;
    cur = cur.next;
  }

  // 需要遍历到哪个节点
  let i = length - (k % length);
  cur = head;

  while (i-- > 1) {
    cur = cur.next;
  }
  end.next = head;
  let ret = cur.next;
  cur.next = null;

  return ret;
};