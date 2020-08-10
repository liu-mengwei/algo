
// 按位异或
// 12 xor 12 xor 7 => 7 
// 12 xor 7 xor 12 => 7 满足交换律

// 12 xor 0 => 12
// 12 xor 12 => 0
var singleNumber = function (nums) {
  let ret = 0;

  for (let num of nums) {
    ret ^= num;
  }

  return ret;
};  