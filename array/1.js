
/**
 * 将数组转成对象的形式，obj['key'] 就可以直接判断元素是否存在，元素是否存在在hashmap中是o(1)的时间复杂度
 * 
 * js 中也可以使用map这种数据结构
 * 
 * 和对象的主要区别是 
 * 1. map.size() 可以访问元素的数量，而对象无法直接获得元素的数量，必须用object.keys()
 * 2. map的key可以用任意数据类型，而对象的数据类型只能是简单数据类型，数字，字符串，symbol
 * 3. map的可以保证元素顺序，而对象无法保证
 * 4. 对象的创建形式更方便，map相对麻烦
 * 5. 大数据量下map性能更好，并且支持迭代 
 */
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    let firstValue = nums[i];
    let secondValue = target - firstValue;

    // 在map里检测值是否存在
    let secondIndex = map.get(secondValue);
    if (secondIndex && secondIndex !== i) return [i, secondIndex];
  }

  return -1;
};