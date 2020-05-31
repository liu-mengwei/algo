/**
 * 考点就是数组的下标变换
 * 我一开始想到的是遇到0，就把所有值往前移，再遇到0，再把所有值往前0，其实是多余的操作
 * 因为，只需要一次遍历，其是就能够知道这个值最终会在什么位置，就是这里j的位置，其实也就是0的位置
 * 核心就是把0和非0交换一下，而交换后，非0值已经归位
 * 遇到不是0的情况，就把j和i同时移动一位
 */

var moveZeroes = function (nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {

      // 交换0
      let val = nums[j];
      nums[j] = nums[i];
      nums[i] = val;
      
      // 隐含的意思是j会停在0的位置
      j++;
    }
  }
};

moveZeroes([0, 1, 0 ,12])