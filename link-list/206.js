/**
 * 还不太适应链表的写法
 * 取pre cur next 三个指针
 * cur -> pre 反转操作
 * 三个指针同时往前移动
 */

var reverseList = function (head) {

  let pre = null;
  let cur = head;

  while (cur) {
    let next = cur.next;
    cur.next = pre; // 反转

    pre = cur;
    cur = next;
  }

  return pre;
};