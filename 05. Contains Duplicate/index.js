/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 1.
var containsDuplicate = function (nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    obj[num] = obj[num] ? obj[num] + 1 : 1;

    if (obj[num] > 1) return true;
  }

  return false;
};

// 2.

var containsDuplicate = function (nums) {
  const numsSet = new Set(nums);

  return numsSet.size < nums.length;
};

// 3.
var containsDuplicate = function (nums) {
  const numSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) {
      return true;
    }
    numSet.add(nums[i]);
  }
  return false;
};
