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
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let cursorA = head;
  let cursorB = head.next;
  cursorA.next = null;
  while (cursorB !== null) {
    const next = cursorB.next;
    cursorB.next = cursorA;
    cursorA = cursorB;
    cursorB = next;
  }
  return cursorA;
};
