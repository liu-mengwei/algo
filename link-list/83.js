const { createLinkList, logLinkList, ListNode } = require('./linkListUtil');

var deleteDuplicates = function (head) {
  if (!head) return null;
  let p = head;
  let q = p.next;

  // 找到不等于p元素的值
  while (q) {
    if (q.val === p.val) {
      q = q.next;
    } else {
      p.next = q;
      p = q;
      q = p.next;
    }
  }
  p.next = null;

  return head;
};

let head = createLinkList([1,1,2]);
head = deleteDuplicates(head);
logLinkList(head);