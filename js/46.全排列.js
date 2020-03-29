/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (74.50%)
 * Likes:    576
 * Dislikes: 0
 * Total Accepted:    95.1K
 * Total Submissions: 127.6K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 *
 * 示例:
 *
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length < 2) {
    return [nums];
  }
  const result = [];
  for (const num of nums) {
    const subNums = permute(nums.filter(x => x !== num));
    subNums.forEach(sub => {
      result.push([num, ...sub]);
    });
  }
  return result;
};
// @lc code=end
