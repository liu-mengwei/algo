const { createLinkList, logLinkList, ListNode } = require('./linkListUtil');

/**
 * 方法一： 遍历一次列表算出链表的长度，再遍历一次链表找到n前面的那个元素
 * 
 * 方法二：双索引，取p,q pq间隔 n + 1 当移动到null的时候时候，说明找到了要删除元素的前一个节点
 * 一次遍历即可，相当于把问题作了一次转化的感觉
 * 
 */

var removeNthFromEnd = function (head, n) {
  let dummyNode = new ListNode();
  dummyNode.next = head;

  // 先计算出链表的长度
  let cur = head;
  let length = 0;
  while (cur) {
    length++;
    cur = cur.next;
  }

  // 需要遍历到哪个节点
  let i = length - n;
  cur = dummyNode;

  while (i-- > 0) {
    cur = cur.next;
  }

  // 删除
  cur.next = cur.next.next;
  return dummyNode.next;
};

let head = createLinkList([1]);
head = removeNthFromEnd(head, 1);
logLinkList(head)