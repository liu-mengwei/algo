/**
 * 这个方法相当于每一层都开辟了一个数组，否则的话直接下一层就改了上一层的值，回不去了
 * 经过测试，必须写slice，用于保存当前层的值
 */
// var permute = function (nums) {
//   let ret = [];

//   function deep(nums, arr) {
//     if (nums.length === 0) {
//       ret.push(arr);
//       return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//       let num = nums[i];
//       let tempArr = arr.slice();
//       tempArr.push(num);

//       let numArr = nums.slice();
//       numArr.splice(i, 1);
//       deep(numArr, tempArr);
//     }
//   }

//   deep(nums, []);
//   return ret;
// };


// 可以优化，每一层不需要另开辟空间
var permute = function (nums) {
  let ret = [];
  let used = [];

  function deep(nums, arr) {
    if (nums.length === arr.length) {
      ret.push(arr.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (!used[num]) {
        arr.push(num);
        used[num] = true;
        deep(nums, arr);
        arr.pop(); //关键 回去时这个数据要进行恢复
        used[num] = false;
      }
    }
  }

  deep(nums, []);
  return ret;
}
permute([1, 2, 3])