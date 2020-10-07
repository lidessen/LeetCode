/*
 * @lc app=leetcode.cn id=84 lang=typescript
 *
 * [84] 柱状图中最大的矩形
 *
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (41.78%)
 * Likes:    943
 * Dislikes: 0
 * Total Accepted:    92.7K
 * Total Submissions: 221.8K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 *
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 *
 *
 *
 *
 *
 * 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
 *
 *
 *
 *
 *
 * 图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
 *
 *
 *
 * 示例:
 *
 * 输入: [2,1,5,6,2,3]
 * 输出: 10
 *
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    let l = i,
      r = i,
      height = heights[i];

    while (l > 0) {
      let h = Math.min(height, heights[l - 1]);

      if (h * (r - l + 2) > height * (r - l + 1)) {
        height = h;
        l--;
      } else {
        break;
      }
    }

    while (r < heights.length - 1) {
      let h = Math.min(height, heights[r + 1]);

      if (h * (r - l + 2) > height * (r - l + 1)) {
        height = h;
        r++;
      } else {
        break;
      }
    }

    max = Math.max(max, height * (r - l + 1));
  }
  return max;
}
// @lc code=end
