# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        list = []
        cursor = head
        while cursor is not None:
            list.append(cursor)
            cursor = cursor.next
        if n == len(list):
            head = head.next
        else:
            list[-(n+1)].next = list[-n+1] if (1-n) != 0 else None
        return head 
