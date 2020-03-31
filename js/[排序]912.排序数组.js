/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 *
 * https://leetcode-cn.com/problems/sort-an-array/description/
 *
 * algorithms
 * Medium (53.44%)
 * Likes:    98
 * Dislikes: 0
 * Total Accepted:    46.4K
 * Total Submissions: 78.4K
 * Testcase Example:  '[5,2,3,1]'
 *
 * 给你一个整数数组 nums，请你将该数组升序排列。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [5,2,3,1]
 * 输出：[1,2,3,5]
 *
 *
 * 示例 2：
 *
 * 输入：nums = [5,1,1,2,0,0]
 * 输出：[0,0,1,1,2,5]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 50000
 * -50000 <= nums[i] <= 50000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  return mergeSort(nums);
};

function mergeSort(nums, start = 0, end = nums.length) {
  if (nums.length < 2) {
    return nums;
  }
  if (start === end - 1 || start === end) {
    return [nums[start]];
  } else {
    const middle = split(start, end);
    return merge(mergeSort(nums, start, middle), mergeSort(nums, middle, end));
  }
}

function merge(nums1, nums2) {
  const result = [];
  let i = 0,
    j = 0;
  while (i < nums1.length || j < nums2.length) {
    if (i >= nums1.length || nums2[j] < nums1[i]) {
      result.push(nums2[j]);
      j++;
    } else {
      result.push(nums1[i]);
      i++;
    }
  }
  return result;
}

function split(start, end) {
  return Math.ceil((start + end) / 2);
}
// @lc code=end
