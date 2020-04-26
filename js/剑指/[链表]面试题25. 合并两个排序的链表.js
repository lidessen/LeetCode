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
var mergeTwoLists = function (l1, l2) {
  const head = new ListNode(null);
  let cursor = head;
  while (l1 !== null || l2 !== null) {
    if (l1 !== null && (l2 === null || l1.val < l2.val)) {
      cursor.next = l1;
      l1 = l1.next;
    } else {
      cursor.next = l2;
      l2 = l2.next;
    }
    cursor = cursor.next;
  }
  return head.next;
};
