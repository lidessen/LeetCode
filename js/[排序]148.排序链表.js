/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (64.58%)
 * Likes:    466
 * Dislikes: 0
 * Total Accepted:    50.4K
 * Total Submissions: 77.9K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 *
 * 示例 1:
 *
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 *
 *
 * 示例 2:
 *
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  const nums = scanList(head);
  return numsToList(mergeSort(nums));
};

function mergeSort(nums) {
  let step = 1;
  let tempNums = [];
  while (step < nums.length) {
    for (i = 0; i < nums.length; i += step * 2) {
      let j = i,
        k = i + step;

      while (
        (j < i + step && j < nums.length) ||
        (k < i + step * 2 && k < nums.length)
      ) {
        if (
          j >= i + step ||
          (nums[j] > nums[k] && k < i + step * 2 && k < nums.length)
        ) {
          tempNums.push(nums[k]);
          k++;
        } else {
          tempNums.push(nums[j]);
          j++;
        }
      }
    }
    step *= 2;
    nums = tempNums;
    tempNums = [];
  }
  return nums;
}

function scanList(head) {
  const nums = [];
  while (head !== null) {
    nums.push(head.val);
    head = head.next;
  }
  return nums;
}

function numsToList(nums) {
  const head = new ListNode(null);
  let cursor = head;
  for (const num of nums) {
    cursor.next = new ListNode(num);
    cursor = cursor.next;
  }
  return head.next;
}
// @lc code=end
