const { createLinkList, logLinkList, ListNode } = require('./linkListUtil');

/**
 * 不知道是我不熟悉还是怎么回事
 * 得创建好多变量保存信息才行
 * 链表的指针改变，原来的指向就丢失了 得声明一个变量保存下来
 */
var reverseBetween = function (head, m, n) {

  let dummy = new ListNode(null)
  dummy.next = head;

  // 将a、d结点移动到该移的位置
  let a = dummy;
  let d = dummy;

  // 将a移动到m-1的位置
  for (let i = 0; i < m - 1; i++) a = a.next;

  // 将d移动到n的位置
  for (let i = 0; i < n; i++) d = d.next;

  // 翻转
  let pre = a.next;
  let cur = pre.next;
  let end = d.next;

  while (cur && cur != end) {
    let next = cur.next;
    cur.next = pre;

    pre = cur;
    cur = next;
  }

  a.next.next = end;
  a.next = d;

  return dummy.next;
};

let head = createLinkList([1, 2, 3, 4, 5]);
reverseBetween(head, 2, 4)

logLinkList(head);