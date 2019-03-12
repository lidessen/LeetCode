class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        res = 0
        symbol_set = ""
        for c in s:
            if c not in symbol_set:
                symbol_set += c
            else:
                res =  len(symbol_set) if len(symbol_set) > res else res
                symbol_set = symbol_set.split(c)[-1] + c
        res = len(symbol_set) if len(symbol_set) > res else res
        return res
