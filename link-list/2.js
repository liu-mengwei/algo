let { createLinkList, ListNode } = require('./linkListUtil');

// 题目可能出现大数

// var addTwoNumbers = function (l1, l2) {
//   let sum = getNumber(l1) + getNumber(l2);

//   sum = sum.toString().split('').reverse();

//   let dummyNode = new ListNode();
//   let p = dummyNode;

//   for (let num of sum) {
//     let node = new ListNode(num);
//     p.next = node;
//     p = p.next;
//   }

//   return dummyNode.next;
// };

// function getNumber(linkList) {
//   let ret = [];
//   let p = linkList;

//   while (p) {
//     ret.push(p.val);
//     p = p.next;
//   }

//   return Number(ret.reverse().join(''));
// }

var addTwoNumbers = function (l1, l2) {
  let p1 = l1;
  let p2 = l2;

  let unit = 0;
  let dummyNode = new ListNode();
  let p = dummyNode;

  while (p1 || p2) {
    let val1 = p1 && p1.val || 0;
    let val2 = p2 && p2.val || 0;

    let sum = val1 + val2 + unit;
    unit = sum >= 10 ? 1 : 0;

    let node = new ListNode(sum % 10);
    p.next = node;
    p = p.next;

    p1 = p1 && p1.next;
    p2 = p2 && p2.next;
  }

  if (unit === 1) p.next = new ListNode(1);

  return dummyNode.next;
};