/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 *
 * https://leetcode-cn.com/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (63.96%)
 * Likes:    165
 * Dislikes: 0
 * Total Accepted:    24.2K
 * Total Submissions: 37.8K
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 *
 * 示例:
 *
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1, 3, 4]
 * 解释:
 *
 * ⁠  1            <---
 * ⁠/   \
 * 2     3         <---
 * ⁠\     \
 * ⁠ 5     4       <---
 *
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const result = [];
  let nodes = [root];
  while (nodes.length > 0) {
    const tempNodes = [];
    for (let i = 0; i < nodes.length; i++) {
      if (i === nodes.length - 1 && nodes[i] !== null) {
        result.push(nodes[i].val);
      }
      if (nodes[i] !== null) {
        if (nodes[i].left !== null) {
          tempNodes.push(nodes[i].left);
        }
        if (nodes[i].right !== null) {
          tempNodes.push(nodes[i].right);
        }
      }
    }
    nodes = tempNodes;
  }
  return result;
};
// @lc code=end
