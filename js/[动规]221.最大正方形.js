/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 *
 * https://leetcode-cn.com/problems/maximal-square/description/
 *
 * algorithms
 * Medium (39.34%)
 * Likes:    419
 * Dislikes: 0
 * Total Accepted:    52.5K
 * Total Submissions: 123.9K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
 *
 * 示例:
 *
 * 输入:
 *
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 *
 * 输出: 4
 *
 */

// @lc code=start
/**
 * @param {string[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  // get martix height, if = 0, return;
  let h = matrix.length;
  if (h === 0) {
    return 0;
  }
  // get matrix width, if = 0, return;
  let w = matrix[0].length;
  if (w === 0) {
    return 0;
  }

  let queue = [];
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (matrix[i][j] === '1') {
        queue.push([i, j]);
      }
    }
  }
  if (queue.length === 0) {
    return 0;
  }
  let width = 1;
  while (queue.length > 0) {
    const temp = [];
    for (const item of queue) {
      const [h0, w0] = item;

      if (h0 + width >= h || w0 + width >= w) {
        continue;
      }
      let match = true;
      for (let i = h0; i < h0 + width + 1; i++) {
        if (matrix[i][w0 + width] === '0') {
          match = false;
          break;
        }
      }
      for (let j = w0; j < w0 + width + 1; j++) {
        if (matrix[h0 + width][j] === '0') {
          match = false;
          break;
        }
      }

      if (match) {
        temp.push(item);
      }
    }
    queue = temp;
    if (queue.length > 0) {
      width++;
    }
  }
  return width * width;
};
// @lc code=end
