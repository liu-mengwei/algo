const { createLinkList, logLinkList, ListNode } = require('./linkListUtil');

var oddEvenList = function (head) {

  // 声明两个链表 // 保持插入操作的统一性，需要设置一个头节点
  let headOven = new ListNode();
  let headOdd = new ListNode();

  let i = 0;
  let endOven = headOven
  let endOdd = headOdd;
  while (head) {
    let next = head.next;

    if (i % 2 === 0) {
      endOven.next = head;
      endOven = head;
    } else {
      endOdd.next = head;
      endOdd = head;
    }

    head = next;
    i++;
  }

  //有一个bug, 否则会形成环路
  if (i % 2 === 0) {
    endOven.next = null
  } else {
    endOdd.next = null
  }

  // 拼接两个链表
  endOven.next = headOdd.next; 
  return headOven.next;
};

let head = createLinkList([1, 2, 3, 4, 5]);
head = oddEvenList(head);
logLinkList(head);