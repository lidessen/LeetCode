/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (68.26%)
 * Likes:    866
 * Dislikes: 0
 * Total Accepted:    201.3K
 * Total Submissions: 294.9K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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

/** Recursive
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
var reverseList = function(head) {
  if (head === null) {
    return null;
  }
  const [reversed] = reverseRecursively(head);
  return reversed;
};

function reverseRecursively(head) {
  if (head.next === null) {
    return [head, head];
  }
  const [listHead, listTail] = reverseRecursively(head.next);
  head.next = null;
  listTail.next = head;
  return [listHead, head];
}
*/

var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let cursor = head.next;
  head.next = null;
  while (cursor !== null) {
    const tempNode = cursor.next;
    cursor.next = head;
    head = cursor;
    cursor = tempNode;
  }
  return head;
};
// @lc code=end
