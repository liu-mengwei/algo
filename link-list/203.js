const { createLinkList, logLinkList, ListNode } = require('./linkListUtil');

var removeElements = function (head, val) {
  let dummyNode = new ListNode();
  dummyNode.next = head;

  // 设立一个虚拟头节点
  let pre = dummyNode;
  let cur = head;
  while (cur) {
    let next = cur.next;
    if (cur.val === val) {
      pre.next = next;
      cur = next;
    } else {
      // 同时把节点往后移动
      pre = cur;
      cur = next;
    }
  }

  return dummyNode.next;
};

/**
 * 取一个变量即可，设立了虚拟头节点，则头节点的next指向了第一个节点
 * 则删除第一个节点的操作和删除后续节点达成了统一
 */
removeElements = function (head, val) {
  let dummyNode = new ListNode();
  dummyNode.next = head;

  // 设立一个虚拟头节点
  let cur = dummyNode;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return dummyNode.next;
};


let head = createLinkList([1, 1]);
removeElements(head, 1)

logLinkList(head);