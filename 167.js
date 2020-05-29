/**
 * 因为数组是有序的，所以可以想到用二分查找找到第二个数
 */
let twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let firstValue = numbers[i];
    let secondValue = target - firstValue;

    // 通过二分查找找第二个数
    let secondIndex = search(numbers, i + 1, secondValue);

    if (secondIndex !== -1) {
      return [i + 1, secondIndex + 1];
    }
  }

  return -1;
};

let search = function (numbers, start, target) {
  // 定义左右边界
  let i = start;
  let j = numbers.length - 1;

  while (i <= j) {
    let middle = parseInt((j + i) / 2);

    if (numbers[middle] === target) {
      return middle;
    } else if (numbers[middle] > target) {
      j = middle - 1;
    } else {
      i = middle + 1;
    }
  }

  return -1;
}