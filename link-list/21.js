const { createLinkList, logLinkList, ListNode } = require('./linkListUtil');

var mergeTwoLists = function (l1, l2) {
  let dummyNode = new ListNode(); // 设立虚拟头节点，插入删除方便

  let end = dummyNode;
  let cur1 = l1;
  let cur2 = l2;

  while (cur1 && cur2) {
    // 取值最小的节点
    if (cur1.val <= cur2.val) {
      end.next = cur1;
      cur1 = cur1.next;
    } else {
      end.next = cur2;
      cur2 = cur2.next;
    }

    end = end.next;
  }

  if (cur1) end.next = cur1;
  if (cur2) end.next = cur2;

  return dummyNode.next;
};

let l1 = createLinkList([1, 2, 3]);
let l2 = createLinkList([1, 3, 4]);
mergeTwoLists(l1, l2);