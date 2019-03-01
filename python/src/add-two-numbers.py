# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        a = str(l1.val)
        b = str(l2.val)
        while(l1.next is not None or l2.next is not None):
            if(l1.next is None):
                l1.val = ''
            else:
                l1 = l1.next
            if(l2.next is None):
                l2.val = ''
            else:
                l2 = l2.next
            a = str(l1.val) + a
            b = str(l2.val) + b
        result = int(a) + int(b)
        resultList = ListNode(None)
        start = resultList
        for n in str(result)[::-1]:
            if start.val is not None:
                start.next = ListNode(int(n))
                start = start.next
            else:
                start.val = int(n)
        return resultList