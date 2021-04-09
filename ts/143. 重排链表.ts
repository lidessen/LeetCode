class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reorderList(head: ListNode | null): void {
  let [a, b] = sliptNode(head);
  b = reverseList(b);
  mergeTwoLists(a, b);
}

function sliptNode(head: ListNode | null) {
  if (head === null || head.next === null) {
    return [head, null];
  }

  let fastNode: ListNode | null = head.next;
  let slowNode: ListNode | null = head;

  while (fastNode?.next !== null && fastNode !== null) {
    fastNode = fastNode?.next.next;
    slowNode = slowNode?.next || null;
  }

  const a = head;
  const b = slowNode?.next || null;
  if (slowNode) {
    slowNode.next = null;
  }

  return [a, b];
}

function reverseList(head: ListNode | null) {
  let node: ListNode | null;
  [node, head] = takeFirstFromList(head);
  let newHead = node;
  while (head !== null) {
    [node, head] = takeFirstFromList(head);

    if (node === null) {
      break;
    }

    node.next = newHead;
    newHead = node;
  }

  return newHead;
}

function mergeTwoLists(a: ListNode | null, b: ListNode | null) {
  if (a === null) {
    return b;
  }
  if (b === null) {
    return a;
  }

  const head = new ListNode();
  let cursor = head;

  let node: ListNode | null;
  while (a !== null && b !== null) {
    [node, a] = takeFirstFromList(a);
    if (node === null) {
      cursor.next = b;
      break;
    }
    cursor.next = node;
    cursor = cursor.next as ListNode;

    if (a === null) {
      cursor.next = b;
      break;
    }

    [node, b] = takeFirstFromList(b);
    if (node === null) {
      cursor.next = a;
      break;
    }
    cursor.next = node;
    cursor = cursor.next as ListNode;

    if (b === null) {
      cursor.next = a;
      break;
    }
  }

  return head.next;
}

function takeFirstFromList(list: ListNode | null) {
  if (list === null) {
    return [null, list];
  }

  const node = list;
  const newList = list.next;
  node.next = null;
  return [node, newList];
}
