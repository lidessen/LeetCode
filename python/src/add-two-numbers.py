# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def addTwoNumbers(self, l1, l2):
        result = ListNode(0)
        cursor = result
        carry = 0
        while (l1 or l2):
            x = l1.val if l1 else 0
            y = l2.val if l2 else 0
            val = carry + x + y
            carry = val // 10
            cursor.next = ListNode(val % 10)
            cursor = cursor.next
            if (l1 != None): l1 = l1.next
            if (l2 != None): l2 = l2.next
        if (carry > 0):
            cursor.next = ListNode(1)
        return result.next
