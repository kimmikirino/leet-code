/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // 1.
const twoSum =  (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
};

// 2.
const twoSum =  (nums, target) => {
  let mapNums = {}
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (mapNums.hasOwnProperty(complement)) {
      return [mapNums[complement], i];
    }

    mapNums[nums[i]] = i
  }
};