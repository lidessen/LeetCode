class Solution:
    def isValid(self, s: str) -> bool:
        list = ['*']
        for c in s:
            if self.pair(list[-1], c):
                list.pop()
            else:
                list.append(c)
        return len(list) == 1
    def pair(self, l, r):
        return (l == '(' and r == ')') or (l == '[' and r == ']') or (l == '{' and r == '}')
