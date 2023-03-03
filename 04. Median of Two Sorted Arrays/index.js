/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//1. using few code (avoiding sorting the array)
var findMedianSortedArrays = function (nums1, nums2) {
  const nums = nums1.concat(nums2);
  const return1 = nums.reduce((prev, item) => {
    return prev + item;
  });

  return return1 / nums.length;
};

//2. sorting array 
var findMedianSortedArrays = function (nums1, nums2) {
  const len = nums1.length + nums2.length;
  const merged = [];
  let n1 = (n2 = 0);
  for (let i = 0; i < len; i++) {
    if (nums1[n1] < nums2[n2] || n2 === nums2.length) {
      merged.push(nums1[n1]);
      n1++;
    } else {
      merged.push(nums2[n2]);
      n2++;
    }
  }

  if (len % 2 === 1) return merged[(len + 1) / 2 - 1];
  return (merged[len / 2] + merged[len / 2 - 1]) / 2;
};
