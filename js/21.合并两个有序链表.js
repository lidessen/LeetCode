/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (60.64%)
 * Likes:    917
 * Dislikes: 0
 * Total Accepted:    216.1K
 * Total Submissions: 356.1K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  const head = {
    next: null
  };
  let cursor = head;
  while (l1 !== null || l2 !== null) {
    if (l2 === null || (l1 !== null && l1.val < l2.val)) {
      const next = l1.next;
      l1.next = null;
      cursor.next = l1;
      l1 = next;
    } else {
      const next = l2.next;
      l2.next = null;
      cursor.next = l2;
      l2 = next;
    }
    cursor = cursor.next;
  }
  return head.next;
};
// @lc code=end
