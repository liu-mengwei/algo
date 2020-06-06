const { createLinkList, logLinkList, ListNode } = require('./linkListUtil');

/**
 * 这样做肯定不行啊，js参数是值拷贝，这里传的是地址。改node的值肯定不能把原来的值改了啊
 */
var deleteNode = function (node) {
  node = node.next;
};


/**
 * 这里有点脑筋急转弯了，这里通过改值来删除节点
 * 卧槽这个题其实考察的是内存空间指向的问题
 * 这个题里，js无法做到删除最后一个节点
 * 
 * 给node(形参里的node)设置成nubll, 不能把原来的node(实参)也改成null
 * 经过实验证明，不能删除最后一个节点
 */
var deleteNode = function (node) {
  if (!node) return;

  // 下面代码无效 不能删除最后一个节点
  if (!node.next) {
    node = null;
    return;
  };

  node.val = node.next.val;
  node.next = node.next.next;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

deleteNode(head.next.next);
logLinkList(head);

