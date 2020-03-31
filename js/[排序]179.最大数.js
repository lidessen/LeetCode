/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 *
 * https://leetcode-cn.com/problems/largest-number/description/
 *
 * algorithms
 * Medium (35.77%)
 * Likes:    250
 * Dislikes: 0
 * Total Accepted:    25.8K
 * Total Submissions: 71.9K
 * Testcase Example:  '[10,2]'
 *
 * 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。
 *
 * 示例 1:
 *
 * 输入: [10,2]
 * 输出: 210
 *
 * 示例 2:
 *
 * 输入: [3,30,34,5,9]
 * 输出: 9534330
 *
 * 说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums = mergeSort(nums);
  let result = '';
  for (let num of nums) {
    if (result === '0') {
      result = '' + num;
    } else {
      result += num;
    }
  }
  return result;
};

function mergeSort(nums, start = 0, end = nums.length) {
  if (start === end || start === end - 1) {
    return [nums[start]];
  } else {
    const middle = Math.ceil((start + end) / 2);
    return merge(mergeSort(nums, start, middle), mergeSort(nums, middle, end));
  }
}

function merge(nums1, nums2) {
  const result = [];
  let i = 0,
    j = 0;
  while (i < nums1.length || j < nums2.length) {
    if (
      i >= nums1.length ||
      (j < nums2.length && !greater(nums1[i], nums2[j]))
    ) {
      result.push(nums2[j]);
      j++;
    } else {
      result.push(nums1[i]);
      i++;
    }
  }
  return result;
}

function greater(a, b) {
  a = a.toString();
  b = b.toString();
  return parseInt(a + b) > parseInt(b + a);
}
// @lc code=end
