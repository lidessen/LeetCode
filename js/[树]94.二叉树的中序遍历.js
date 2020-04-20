/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (70.74%)
 * Likes:    470
 * Dislikes: 0
 * Total Accepted:    142.4K
 * Total Submissions: 200.4K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
 *
 * 示例:
 *
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * 输出: [1,3,2]
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
var inorderTraversal = function (root) {
  const nodes = [root];
  const result = [];
  while (nodes.length > 0) {
    const node = nodes.pop();
    if (node === null) {
      continue;
    }
    if (node.right !== null) {
      nodes.push(node.right);
    }
    if (node.left === null) {
      result.push(node.val);
    } else {
      nodes.push(new TreeNode(node.val), node.left);
    }
  }
  return result;
};
// @lc code=end
