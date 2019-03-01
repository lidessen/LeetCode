# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        result = ListNode(0)
        start = self.add(result, l1, l2)
        
        while(l1.next is not None or l2.next is not None):
            if(l1.next is None):
                l1.val = 0
            else:
                l1 = l1.next
            if(l2.next is None):
                l2.val = 0
            else:
                l2 = l2.next
            start = self.add(start, l1, l2)
        return result
