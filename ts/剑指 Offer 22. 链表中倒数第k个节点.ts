class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let slowNode = head;
  if (slowNode === null) {
    return slowNode;
  }
  let fastNode = slowNode.next;
  let count = 1;

  while (fastNode !== null) {
    fastNode = fastNode.next;
    if (count < k) {
      count++;
    } else {
      slowNode = slowNode!.next;
    }
  }

  return count < k ? null : slowNode;
}
