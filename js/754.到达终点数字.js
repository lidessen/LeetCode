/*
 * @lc app=leetcode.cn id=754 lang=javascript
 *
 * [754] 到达终点数字
 *
 * https://leetcode-cn.com/problems/reach-a-number/description/
 *
 * algorithms
 * Medium (39.57%)
 * Likes:    101
 * Dislikes: 0
 * Total Accepted:    4.5K
 * Total Submissions: 11.3K
 * Testcase Example:  '1'
 *
 * 在一根无限长的数轴上，你站在0的位置。终点在target的位置。
 *
 * 每次你可以选择向左或向右移动。第 n 次移动（从 1 开始），可以走 n 步。
 *
 * 返回到达终点需要的最小移动次数。
 *
 * 示例 1:
 *
 *
 * 输入: target = 3
 * 输出: 2
 * 解释:
 * 第一次移动，从 0 到 1 。
 * 第二次移动，从 1 到 3 。
 *
 *
 * 示例 2:
 *
 *
 * 输入: target = 2
 * 输出: 3
 * 解释:
 * 第一次移动，从 0 到 1 。
 * 第二次移动，从 1 到 -1 。
 * 第三次移动，从 -1 到 2 。
 *
 *
 * 注意:
 *
 *
 * target是在[-10^9, 10^9]范围中的非零整数。
 *
 *
 */

// @lc code=start
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
  target = Math.abs(target);
  let n = 0;
  let total = 0;
  while (total < target || (total - target) % 2 !== 0) {
    n++;
    total += n;
  }
  return n;
};
// @lc code=end
