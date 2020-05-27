// 283
function movezeros(nums) {
  for (var i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  // 再把后面的置为0
  while (j < nums.length) {
    nums[j] = 0;
    j++;
  }

  return nums;
}

// 27
var removeElement = function(nums, val) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

// 26
let removeDuplicates = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    var j = i + 1;
    // 找出重复元素
    while (j < nums.length) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
      } else {
        break;
      }
    }
  }

  return nums.length;
};

// 26
let removeDuplicates2 = function(nums) {
  if (!nums.length) return 0;
  let res = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[res]) {
      nums[res + 1] = nums[i];
      res++;
    }
  }
  return res + 1;
};

// 80 [1, 1, 1, 2, 2]
let removeDuplicates3 = function(nums) {
  let i = 0;
  let j = i + 1;
  while (i < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    }

    if (nums[i] !== nums[j]) {
      // 重复了3个或以上以上的元素
      let n = j - i - 2;
      let repeat = n >= 2;
      while (n > 0) {
        nums.splice(i, 1);
        n--;
      }

      if (repeat) {
        i += 2;
      } else {
        i += 1;
      }

      j = i + 1;
    }
  }

  return nums.length;
};

// 80 吊吊吊
let removeDuplicates4 = function(nums) {
  let i = 0;
  for (let num of nums) {
    if (i < 2 || num > nums[i - 2]) {
      nums[i++] = num;
    }
  }
  return i;
};

// 75
var sortColors = function(nums) {
  var zero = -1;
  var two = nums.length;

  for (var i = 0; i < two; ) {
    if (nums[i] === 1) {
      i++;
    } else if (nums[i] === 0) {
      swap(nums, ++zero, i++);
    } else if (nums[i] === 2) {
      swap(nums, --two, i);
    }
  }

  function swap(nums, i, j) {
    var c = nums[i];
    nums[i] = nums[j];
    nums[j] = c;
  }
};

// 88 非原地操作
var merge = function(nums1, m, nums2, n) {
  var i = 0;
  var j = 0;
  var index = 0;
  var ret = [];
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      ret[index++] = nums1[i++];
    } else {
      ret[index++] = nums2[j++];
    }
  }

  if (i === m) {
    while (j < n) {
      ret[index++] = nums2[j++];
    }
  } else {
    while (i < n) {
      ret[index++] = nums1[i++];
    }
  }

  nums1 = ret;
  return ret;
};

// 88 [1,2,3,0,0,0] 3, [2, 5, 6], 3 思路：可以指针从后往前推
var merge = function(nums1, m, nums2, n) {
  var p = m + n - 1;
  m--;
  n--;
  while (m >= 0 && n >= 0) {
    if (nums1[m] >= nums2[n]) {
      nums1[p--] = nums1[m--];
    } else {
      nums1[p--] = nums2[n--];
    }
  }

  if (n !== -1) {
    while (n >= 0) {
      nums1[p--] = nums2[n--];
    }
  }
};

// 167
var twoSum = function(numbers, target) {
  for (var i = 0; i < numbers.length; i++) {
    var j = i + 1; // j 大于 i 并且 j小于数组长度

    
  }

  return -1;
};
