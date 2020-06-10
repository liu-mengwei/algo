// 递归解法
// 在生成遍历器时直接进行扁平化

/**
 * call 和 apply的区别
 * 
 * call(obj, arg1, arg2)
 * apply(obj, [arg1, arg2])
 * 
 * apply(obj, toArray(arguments))
 */
var NestedIterator = function (nestedList) {
  this.stack = [];
  resetArr.call(this, nestedList);

  function resetArr(list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].isInteger()) {
        this.stack.unshift(list[i].getInteger());
      } else {
        resetArr.call(this, list[i].getList());
      }
    }
  }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  return this.stack.pop();
};