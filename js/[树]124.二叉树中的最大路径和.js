/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 *
 * https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/description/
 *
 * algorithms
 * Hard (39.72%)
 * Likes:    372
 * Dislikes: 0
 * Total Accepted:    32.4K
 * Total Submissions: 81.4K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个非空二叉树，返回其最大路径和。
 *
 * 本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 *
 * ⁠      1
 * ⁠     / \
 * ⁠    2   3
 *
 * 输出: 6
 *
 *
 * 示例 2:
 *
 * 输入: [-10,9,20,null,null,15,7]
 *
 * -10
 * / \
 * 9  20
 * /  \
 * 15   7
 *
 * 输出: 42
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  return getMax(root)[1];
};

function getMax(node) {
  let val = node.val;
  let lval = node.val;
  let rval = node.val;
  let max = lval;
  if (node.left !== null) {
    const [addLeft, maxLeft] = getMax(node.left);
    if (addLeft > 0) {
      lval += addLeft;
      val += addLeft;
    }
    max = Math.max(max, lval, rval, val, maxLeft, addLeft);
  }
  if (node.right !== null) {
    const [addRight, maxRight] = getMax(node.right);
    if (addRight > 0) {
      rval += addRight;
      val += addRight;
    }
    max = Math.max(max, lval, rval, val, maxRight, addRight);
  }

  return [Math.max(lval, rval), max];
}
// @lc code=end
