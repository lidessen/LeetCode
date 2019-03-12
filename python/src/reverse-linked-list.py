# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        pre = None
        cursor = head
        while cursor is not None:
            next = cursor.next
            cursor.next = pre
            pre = cursor
            cursor = next
            if cursor is None:
                return pre
