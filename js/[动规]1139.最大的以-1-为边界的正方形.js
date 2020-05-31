/*
 * @lc app=leetcode.cn id=1139 lang=javascript
 *
 * [1139] 最大的以 1 为边界的正方形
 *
 * https://leetcode-cn.com/problems/largest-1-bordered-square/description/
 *
 * algorithms
 * Medium (41.80%)
 * Likes:    15
 * Dislikes: 0
 * Total Accepted:    2.3K
 * Total Submissions: 5.2K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * 给你一个由若干 0 和 1 组成的二维网格 grid，请你找出边界全部由 1 组成的最大 正方形 子网格，并返回该子网格中的元素数量。如果不存在，则返回
 * 0。
 *
 *
 *
 * 示例 1：
 *
 * 输入：grid = [[1,1,1],[1,0,1],[1,1,1]]
 * 输出：9
 *
 *
 * 示例 2：
 *
 * 输入：grid = [[1,1,0,0]]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= grid.length <= 100
 * 1 <= grid[0].length <= 100
 * grid[i][j] 为 0 或 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  let maxSize = 0;
  const height = grid.length;
  const width = grid[0].length;

  const continuousOneOfLeft = {};
  const continuousOneOfAbove = {};

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const loc = pos(i, j);
      continuousOneOfLeft[loc] =
        grid[i][j] === 1 ? (continuousOneOfLeft[pos(i, j - 1)] || 0) + 1 : 0;
      continuousOneOfAbove[loc] =
        grid[i][j] === 1 ? (continuousOneOfAbove[pos(i - 1, j)] || 0) + 1 : 0;
      const size = Math.min(
        continuousOneOfLeft[loc],
        continuousOneOfAbove[loc]
      );
      if (size <= maxSize) {
        continue;
      }
      for (let s = size; s > maxSize; s--) {
        if (
          !continuousOneOfLeft[pos(i - s + 1, j)] ||
          continuousOneOfLeft[pos(i - s + 1, j)] < s
        ) {
          continue;
        }
        if (
          !continuousOneOfAbove[pos(i, j - s + 1)] ||
          continuousOneOfAbove[pos(i, j - s + 1)] < s
        ) {
          continue;
        }
        maxSize = s;
      }
    }
  }

  return maxSize * maxSize;
};

function pos(i, j) {
  return `${i},${j}`;
}
// @lc code=end
