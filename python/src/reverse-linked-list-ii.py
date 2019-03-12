# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseBetween(self, head: ListNode, m: int, n: int) -> ListNode:
        if m == n:
            return head
        pre = None
        cursor = head
        count = 0
        flag_start_with_head = m - 1 == 0
        flag_end_with_tail = False
        start = head
        preStart = None
        while cursor is not None:
            count = count+1
            if count > m and count <= n:
                next = cursor.next
                cursor.next = pre
                pre = cursor
                cursor = next
                if count == n:
                    start.next = cursor
                    if flag_start_with_head:
                        return pre
                    else:
                        preStart.next = pre
                        return head
            else:
                if count == m - 1:
                    preStart = cursor
                    start = cursor.next
                pre = cursor
                cursor = cursor.next
