/**
 * 常用的链表调试方法
 */

/**
 * 链表节点定义
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 根据数组创建链表
 * @param n 创建元素的个数
 */
function createLinkList(arr, n = arr.length) {
  if (n === 0) return null;

  // 创建第一个节点
  let head = new ListNode(arr[0]);

  let cur = head;
  for (let i = 1; i < n; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }

  return head;
}

/**
 * 打印链表
 */
function logLinkList(head) {
  let ret = '';

  while (head) {
    ret += `${head.val} -> `;
    head = head.next;
  }

  ret += 'NULL';
  console.log(ret);
}

module.exports = {
  createLinkList,
  ListNode,
  logLinkList
}
