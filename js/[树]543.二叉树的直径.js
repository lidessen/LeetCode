/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 *
 * https://leetcode-cn.com/problems/diameter-of-binary-tree/description/
 *
 * algorithms
 * Easy (49.04%)
 * Likes:    304
 * Dislikes: 0
 * Total Accepted:    42.9K
 * Total Submissions: 87K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 *
 *
 *
 * 示例 :
 * 给定二叉树
 *
 * ⁠         1
 * ⁠        / \
 * ⁠       2   3
 * ⁠      / \
 * ⁠     4   5
 *
 *
 * 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
 *
 *
 *
 * 注意：两结点之间的路径长度是以它们之间边的数目表示。
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
var diameterOfBinaryTree = function (root) {
  if (root === null) {
    return 0;
  }
  let max = 0;
  traverseTree(root, (node) => {
    if (node === null) {
      return;
    }
    const ld = deepestBranch(node.left);
    const rd = deepestBranch(node.right);
    max = Math.max(max, ld + rd);
  });
  return max;
};

function traverseTree(node, cb) {
  cb(node);
  if (node === null) {
    return;
  }
  traverseTree(node.left, cb);
  traverseTree(node.right, cb);
}

function deepestBranch(node) {
  if (node === null) {
    return 0;
  }
  return 1 + Math.max(deepestBranch(node.left), deepestBranch(node.right));
}
// @lc code=end
