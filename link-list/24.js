const { createLinkList, logLinkList, ListNode } = require('./linkListUtil');

var swapPairs = function (head) {
  let dummyNode = new ListNode();

  dummyNode.next = head;
  let p = dummyNode;

  while (p.next && p.next.next) {
    let node1 = p.next;
    let node2 = p.next.next;

    let next = node2.next;
    node2.next = node1; // 翻转
    node1.next = next;
    p.next = node2;

    p = node1;
  }

  return dummyNode.next;
};

let head = createLinkList([1, 2, 3, 4]);
head = swapPairs(head);