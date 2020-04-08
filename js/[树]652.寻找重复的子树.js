/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
 *
 * https://leetcode-cn.com/problems/find-duplicate-subtrees/description/
 *
 * algorithms
 * Medium (52.71%)
 * Likes:    91
 * Dislikes: 0
 * Total Accepted:    6.3K
 * Total Submissions: 12K
 * Testcase Example:  '[1,2,3,4,null,2,4,null,null,4]'
 *
 * 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
 *
 * 两棵树重复是指它们具有相同的结构以及相同的结点值。
 *
 * 示例 1：
 *
 * ⁠       1
 * ⁠      / \
 * ⁠     2   3
 * ⁠    /   / \
 * ⁠   4   2   4
 * ⁠      /
 * ⁠     4
 *
 *
 * 下面是两个重复的子树：
 *
 * ⁠     2
 * ⁠    /
 * ⁠   4
 *
 *
 * 和
 *
 * ⁠   4
 *
 *
 * 因此，你需要以列表的形式返回上述重复子树的根结点。
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const count = {};
  const nodeMap = {};
  traverseTree(root, count, nodeMap);
  console.log(count);
  return Object.keys(count)
    .filter((k) => count[k] > 1)
    .map((k) => nodeMap[k]);
};

function traverseTree(node, count, nodeMap) {
  if (node === null) {
    return 'null';
  }
  const left = traverseTree(node.left, count, nodeMap);
  const right = traverseTree(node.right, count, nodeMap);

  const key = `(${left}|${node.val}|${right})`;
  nodeMap[key] = node;
  if (count[key] === undefined) {
    count[key] = 0;
  }
  count[key]++;

  return key;
}
// @lc code=end
